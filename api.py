from flask import Blueprint, send_from_directory, request, redirect, flash
from models import User

import json
from datetime import datetime
import requests
import bcrypt
from amadeus import Client
from os import environ as env
from dotenv import load_dotenv

load_dotenv()

api = Blueprint("api", __name__)
amadeus = Client(
    client_id=env['AMADEUS_CLIENT_ID'],
    client_secret=env['AMADEUS_CLIENT_SECRET']
)

rapid_api_key = env['RAPID_API_KEY']

@api.route('/flights/<string:originLocationCode>/<string:destinationLocationCode>/<string:departureDate>/<string:returnDate>/<string:travelClass>/<string:flightType>')
def flights(originLocationCode, destinationLocationCode, departureDate, returnDate, travelClass, flightType):
    # Flight Offers Search GET request
    result = flights_offer_search(originLocationCode, destinationLocationCode, departureDate, returnDate, travelClass, flightType)      
    return result

@api.route('/hotels/<string:location>/<string:departureDate>/<string:returnDate>')
def hotels(location, departureDate, returnDate):
    result = hotels_offer_search(location, departureDate, returnDate)
    return result

@api.route('/location')
def location():
    # remoteAddress = request.remote_addr
    # result = requests.get("http://api.ipstack.com/{}?access_key={}".format(remoteAddress, ipstack_access_key)).json()
    with open("./json/location.json", 'r') as f:
        result = json.load(f)
    return result

@api.route('/flights/travel_recommendations/<string:originCityCode>/<string:period>')
def flight_recommendations(originCityCode, period):
    result = flights_most_booked(originCityCode, period)
    return result

@api.route('/rentals/<string:location>/<string:departureDate>/<string:departureTime>/<string:returnDate>/<string:returnTime>')
def rentals(location, departureDate, departureTime, returnDate, returnTime):
    result = rentals_offer_search(location, departureDate, departureTime, returnDate, returnTime)
    return result

# SYD, BKK, 2022-11-01, 2022-11-18, ECONOMY

def flights_offer_search(originLocationCode, destinationLocationCode, departureDate, returnDate, travelClass, flightType):
    if flightType == "oneWay":
        response = amadeus.shopping.flight_offers_search.get(
                originLocationCode=originLocationCode, 
                destinationLocationCode=destinationLocationCode,
                departureDate=departureDate,
                adults=1,
                max=20,
                travelClass=travelClass).result
    else:
        response = amadeus.shopping.flight_offers_search.get(
                originLocationCode=originLocationCode, 
                destinationLocationCode=destinationLocationCode,
                departureDate=departureDate,
                returnDate=returnDate,
                adults=1,
                max=20,
                travelClass=travelClass).result
    result = {} 
    result["flights"] = []   
    for flights in response["data"]:
        flight_id = flights["id"]
        result["flights"].append({})
        flight = result["flights"][-1]
        flight["id"] = flight_id
        flight["lastTicketingDate"] = flights["lastTicketingDate"]
        flight["numberOfBookableSeats"] = flights["numberOfBookableSeats"]  
        flight["price"] = flights["price"]["base"]

        # determine if flight is one way, roundtrip, or multi-city
        flight["oneWay"] = False
        flight["roundTrip"] = False
        flight["multiCity"] = False
        if len(flights["itineraries"]) == 1:
            flight["oneWay"] = True
        elif len(flights["itineraries"]) == 2:
            flight["roundTrip"] = True
        else:
            flight["multiCity"] = True

        # list of trips 
        flight["trips"] = []
        for trip in flights["itineraries"]:
            flight["trips"].append({})
            trips = flight["trips"][-1]
            trips["duration"] = trip["duration"].lower().replace("pt", "").replace("h", "h ")
            trips["originLocationCode"] = trip["segments"][0]["departure"]["iataCode"]
            trips["destinationLocationCode"] = trip["segments"][-1]["arrival"]["iataCode"]
            trips["stops"] = len(trip["segments"])-1
            trips["segments"] = []
            # parse time of departure to time of arrival
            departureTime = trip["segments"][0]["departure"]["at"][11:-3]
            arrivalTime = trip["segments"][-1]["arrival"]["at"][11:-3]
            departureTime = datetime.strptime(departureTime, "%H:%M").strftime("%I:%M %p")
            arrivalTime = datetime.strptime(arrivalTime, "%H:%M").strftime("%I:%M %p")
            trips["departureTime"] = departureTime
            trips["arrivalTime"] = arrivalTime
            # keep a list of all airlines for the trip
            airlines = []

            for segment in trip["segments"]:
                trips["segments"].append({})
                segments = trips["segments"][-1]
                segments["aircraft"] = segment["aircraft"]["code"]
                segments["arrivalTime"] = segment["arrival"]["at"]
                segments["arrivalIataCode"] = segment["arrival"]["iataCode"]
                segments["carrierCode"] = segment["carrierCode"]
                segments["departureTime"] = segment["departure"]["at"]
                segments["departureIataCode"] = segment["departure"]["iataCode"]
                segments["duration"] = segment["duration"]
                segments["id"] = segment["id"]
                airlines.append(segment["carrierCode"])
            
            airlines = set(airlines)
            if len(airlines) == 1: # only 1 airline for trip
                airline = airlines.pop()
                airline_dict = airline_info(airline)
                trips["airline"] = airline_dict["name"]
                trips["airlineLogo"] = airline_dict["logo"]
            else:
                trips["airline"] = "Multiple Airlines"
                trips["airlineLogo"] = ""

    # GET REQUEST TO-FILE TEST (DELETE)
    # with open("flight_offers.txt", 'w') as f:
    #     json.dump(result, f, indent=2)

    return result

def flights_most_booked(originCityCode, period):
    response = amadeus.travel.analytics.air_traffic.booked.get(originCityCode=originCityCode, period=period, max=10).result
    id = 1
    for destination in response["data"]:
        destination["id"] = id
        id += 1
    return response

def airline_info(carrierCode):
    url = 'https://airlines-by-api-ninjas.p.rapidapi.com/v1/airlines'
    params = {'iata': carrierCode} if len(carrierCode) == 2 else {'icao': carrierCode}
    headers = {
        'X-RapidAPI-Key': rapid_api_key,
        'X-RapidAPI-Host': 'airlines-by-api-ninjas.p.rapidapi.com'
    }
    response = requests.get(url, params=params, headers=headers).json()
    result = {}
    result["name"] = response[0]["name"]
    result["logo"] = response[0]["logo_url"] if "logo_url" in response[0] else ""
    return result

def hotels_offer_search(location, departureDate, returnDate):
    city_id = get_city_id(location)
    url = "https://priceline-com-provider.p.rapidapi.com/v1/hotels/search"
    params = {
        "sort_order":"HDR", # HDR, PRICE, STAR, PROXIMITY, DEALS
        "location_id":city_id,
        "date_checkout":returnDate,
        "date_checkin":departureDate
    }
    headers = {
        "X-RapidAPI-Key": rapid_api_key,
        "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com"
    }
    response = requests.get(url, params=params, headers=headers).json()
    return response

def get_city_id(location):
    url = "https://priceline-com-provider.p.rapidapi.com/v1/hotels/locations"
    params = {"name":location,"search_type":"CITY"}
    headers = {
        "X-RapidAPI-Key": rapid_api_key,
        "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com"
    }
    response = requests.get(url, headers=headers, params=params).json()
    return -1 if len(response) == 0 else response[0]["cityID"]
    
def rentals_offer_search(location, departureDate, departureTime, returnDate, returnTime, max=20):
    locationID = car_locations_search(location)
    url = 'https://priceline-com-provider.p.rapidapi.com/v1/cars-rentals/search'
    params = {
    'location_pickup': str(locationID),
    'date_time_pickup': "{} {}".format(departureDate, departureTime),
    'date_time_return': "{} {}".format(returnDate, returnTime),
    'location_return': str(locationID)
    }
    headers = {
    'X-RapidAPI-Key': rapid_api_key,
    'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
    }
    response = requests.get(url, params=params, headers=headers).json()
    if len(response) == 0:
        return {"vehicleRates": []}
    vehicleRates = response["vehicleRates"]
    partnerLocations = response["partnerLocations"]
    result = {}
    vehicles = []
    for vehicle in vehicleRates:
        if len(vehicles) > max: # get a maximum result of vehicles
            break
        pickupLocationId = vehicleRates[vehicle]["partnerInfo"]["pickupLocationId"]
        returnLocationId = vehicleRates[vehicle]["partnerInfo"]["returnLocationId"]
        vehicleRates[vehicle]["pickUpLocation"] = partnerLocations[pickupLocationId]
        vehicleRates[vehicle]["returnLocation"] = partnerLocations[returnLocationId]

        partnerCode = vehicleRates[vehicle]["partnerCode"]
        vehicleRates[vehicle]["partner"] = response["partners"][partnerCode]["partnerName"]
        vehicleRates[vehicle]["partnerImg"] = response["partners"][partnerCode]["images"]["SIZE88X44"]
        vehicles.append(vehicleRates[vehicle])
    result["vehicleRates"] = vehicles 
    return result

def car_locations_search(location):
    url = "https://priceline-com-provider.p.rapidapi.com/v1/cars-rentals/locations"
    params = {"name": location}
    headers = {
        "X-RapidAPI-Key": rapid_api_key,
        "X-RapidAPI-Host": "priceline-com-provider.p.rapidapi.com"
    }
    response = requests.get(url, headers=headers, params=params).json()
    return response[0]["cityID"] 