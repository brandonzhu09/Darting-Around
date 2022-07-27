from flask import Flask, send_from_directory, request, redirect
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS #comment this on deployment
import requests

from amadeus import Client, ResponseError
import json


app = Flask(__name__, static_url_path='', static_folder='client/build')
CORS(app)
api = Api(app)

amadeus = Client(
    client_id='AKrea0eBDJ91WvqGAeqGjVlO8xQ1AerM',
    client_secret='Uy3NfIYH9yZSxAjA'
)
ipstack_access_key = "3a756b58ab702c90a06b4515c2162930"

@app.route('/', methods=["GET","POST"])
def home():
    if request.method == "POST":
        print(request.form)
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/flights/<string:originLocationCode>/<string:destinationLocationCode>/<string:departureDate>/<string:returnDate>/<string:travelClass>')
def flights(originLocationCode, destinationLocationCode, departureDate, returnDate, travelClass):
    # Flight Offers Search GET request
    result = flights_offer_search(originLocationCode, destinationLocationCode, departureDate, returnDate, travelClass)      
    return result

@app.route('/hotels/<string:cityCode>')
def hotels(cityCode):
    result = hotels_offer_search(cityCode)
    return result

@app.route('/location')
def location():
    # remoteAddress = request.remote_addr
    # result = requests.get("http://api.ipstack.com/{}?access_key={}".format(remoteAddress, ipstack_access_key)).json()
    with open("./json/location.json", 'r') as f:
        result = json.load(f)
    return result

@app.route('/flights/travel_recommendations/<string:originCityCode>/<string:period>')
def flight_recommendations(originCityCode, period):
    result = flights_most_booked(originCityCode, period)
    return result

@app.route('/rentals/<string:location>/<string:departureDate>/<string:departureTime>/<string:returnDate>/<string:returnTime>')
def rentals(location, departureDate, departureTime, returnDate, returnTime):
    result = rentals_offer_search(location, departureDate, departureTime, returnDate, returnTime)
    return result

# SYD, BKK, 2022-11-01, 2022-11-18, ECONOMY

def flights_offer_search(originLocationCode, destinationLocationCode, departureDate, returnDate, travelClass="ECONOMY"):
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
            trips["duration"] = trip["duration"]
            trips["segments"] = []

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

    # GET REQUEST TO-FILE TEST (DELETE)
    # with open("travel_offers_post.txt", 'w') as f:
    #     json.dump(result, f, indent=2)

    return result

def hotels_offer_search(cityCode):
    response = amadeus.shopping.hotel_offers.get(cityCode=cityCode).result
    return response

def flights_most_booked(originCityCode, period):
    response = amadeus.travel.analytics.air_traffic.booked.get(originCityCode=originCityCode, period=period, max=10).result
    id = 1
    for destination in response["data"]:
        destination["id"] = id
        id += 1
    return response

def car_locations_search(location):
    url = 'https://priceline-com-provider.p.rapidapi.com/v1/cars-rentals/locations',
    params = {'name': 'Heathrow Airport'},
    headers = {
        'X-RapidAPI-Key': '9170b9edb5msh685e613e1dbfc98p162176jsn94b64470b554',
        'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
    }
    response = requests.get(url, params=params, headers=headers)
    return {'locationID': response[0][0]["cityID"], 'latitude': response[0][0]["lat"], 'longitude': response[0][0]["lon"]}

def rentals_offer_search(location, departureDate, departureTime, returnDate, returnTime, max=20):
    # locationID = car_locations_search(location)['locationID']
    url = 'https://priceline-com-provider.p.rapidapi.com/v1/cars-rentals/search'
    params = {
    'location_pickup': 'JFK',
    'date_time_pickup': "{} {}".format(departureDate, departureTime),
    'date_time_return': "{} {}".format(returnDate, returnTime),
    'location_return': '1365100023'
    }
    headers = {
    'X-RapidAPI-Key': '9170b9edb5msh685e613e1dbfc98p162176jsn94b64470b554',
    'X-RapidAPI-Host': 'priceline-com-provider.p.rapidapi.com'
    }
    response = requests.get(url, params=params, headers=headers).json()
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
        vehicles.append(vehicleRates[vehicle])
    result["vehicleRates"] = vehicles 
    return result
