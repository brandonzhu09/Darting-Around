import React from 'react';
import destination_icon from '../assets/destination_icon_black.png';
import flight_arrow_icon from '../assets/flight_arrow_icon.png';
import search_icon from '../assets/search.png';

function FlightSearchBar() {
    return ( 
        <div class="flight-search">
            <form action="flights/offers">
                <div class="flex items-baseline my-2">
                    <input class="mr-4 peer" type="radio" value="oneWay" name="flightType"></input>
                    <label class="mr-2 text-lg">One Way</label>
                    <input class="mr-4" type="radio" value="roundTrip" name="flightType" defaultChecked></input>
                    <label class="mr-4 roundTrip text-lg">Roundtrip</label>
                    <select class="rounded" name="travelClass">
                        <option value="FIRST">First Class</option>
                        <option value="BUSINESS">Business Class</option>
                        <option value="ECONOMY" selected>Economy Class</option>
                    </select>
                </div>
                <div class="flex">
                    <div class="flex bg-gray-300 rounded py-2">
                        <img class="px-2" src={destination_icon}/>
                        <input class="bg-transparent after:bg-transparent pr-8" type="text" name="originLocationCode" placeholder="Leaving From" required></input>
                    </div>
                    <img class="mx-2" src={flight_arrow_icon} />
                    <div class="flex bg-gray-300 rounded py-2 mr-2">
                        <img class="px-2" src={destination_icon}/>
                        <input class="bg-transparent pr-8" type="text" name="destinationLocationCode" placeholder="Going to" required></input>
                    </div>
                    <input type="date" name="departureDate" placeholder="Departure Date" required></input>
                    <input class="peer-checked:invisible" type="date" name="returnDate" placeholder="Return Date" required></input>
                    <button class="mx-2">
                        <img src={search_icon}/>
                    </button>
                </div>
            </form>
        </div>
     );
}

export default FlightSearchBar;