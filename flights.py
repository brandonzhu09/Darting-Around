# from flask import Blueprint, request, jsonify

# flights = Blueprint('flights', __name__, url_prefix='/flights')

# @flights.route("/<string:originLocationCode>/<string:destinationLocationCode>/<string:departureDate>/<string:returnDate>/<string:travelClass>/<string:flightType>")
# def flights(originLocationCode, destinationLocationCode, departureDate, returnDate, travelClass, flightType):
#     # Flight Offers Search GET request
#     result = flights_offer_search(originLocationCode, destinationLocationCode, departureDate, returnDate, travelClass, flightType)      
#     return result