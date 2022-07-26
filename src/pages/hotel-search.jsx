import React from 'react';
import destination_icon from '../assets/destination_icon_black.png';
import search_icon from '../assets/search.png';

function HotelSearch() {
    return ( 
        <div class="bg-hotel-header opacity-60 bg-cover h-screen font-body px-8 py-16">
            <h1 class="text-4xl mb-8 font-bold">Find the right place to stay.</h1>
            <h3 class="text-2xl mb-4 ">Explore the different lodging and accommodations that best suit your needs.</h3>
            <div className="hotel-search">
                <form action="hotels/offers">
                    <div class="flex justify-start">
                        <input class="rounded w-20 text-center" type="number" name="rooms" placeholder="Rooms" min="0" max="50"></input> 
                    </div>
                    <div class="flex items-center my-2">
                        <div class="flex bg-gray-300 rounded py-2 mr-2">
                            <img class="px-2" src={destination_icon} alt="destination-icon"/>
                            <input class="bg-transparent after:bg-transparent pr-8" type="text" name="cityCode" placeholder="Leaving From" required></input>
                        </div>
                        <label>Departure Date:</label>
                        <input type="date" name="departureDate" placeholder="Departure Date"></input>
                        <label>Return Date:</label>
                        <input type="date" name="returnDate" placeholder="Return Date"></input>
                        <button class="mx-4">
                            <img src={search_icon} alt="search-icon"/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
     );
}

export default HotelSearch;