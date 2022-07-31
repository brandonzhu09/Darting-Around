import React, { useState } from 'react';
import SearchButton from '../components/SearchButton';
import destination_icon from '../assets/destination_icon_black.png';
import flight_arrow_icon from '../assets/flight_arrow_icon.png';
import search_icon from '../assets/search.png';

function FlightSearchBar() {
    const [visible, setVisible] = useState(true) // set visibility of returnDate to true if roundtrip false if oneWay

    return ( 
        <div class="flight-search">
            <form action="http://localhost:3000/flights/offers">
                <div class="flex items-baseline my-2">
                    <input class="mr-4 peer" type="radio" value="oneWay" name="flightType" onClick={() => setVisible(false)}></input>
                    <label class="mr-2 text-lg" for="flightType">One Way</label>
                    <input class="mr-4" type="radio" value="roundTrip" name="flightType" defaultChecked onClick={() => setVisible(true)}></input>
                    <label class="mr-4 roundTrip text-lg" for="flightType">Roundtrip</label>
                    <select class="rounded" name="travelClass">
                        <option value="FIRST">First Class</option>
                        <option value="BUSINESS">Business Class</option>
                        <option value="ECONOMY" selected>Economy Class</option>
                    </select>
                </div>
                <div class="flex flex-wrap">
                    <SearchButton key={1} type="flights" name="originLocationCode" placeholder="Leaving From" icon={destination_icon} />
                    <img class="mx-2" src={flight_arrow_icon} />
                    <SearchButton key={1} type="flights" name="destinationLocationCode" placeholder="Going to" icon={destination_icon} />
                    <input type="date" name="departureDate" placeholder="Departure Date" required></input>
                    {visible && <input type="date" name="returnDate" placeholder="Return Date" required></input>}
                    <button type="submit" class="mx-2">
                        <img src={search_icon}/>
                    </button>
                </div>
            </form>
        </div>
     );
}

export default FlightSearchBar;