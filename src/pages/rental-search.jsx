import React from 'react';
import SearchButton from '../components/SearchButton';
import destination_icon from '../assets/destination_icon_black.png';
import search_icon from '../assets/search.png';

function RentalSearch() {
    return ( 
        <div class="bg-rental-header opacity-70 bg-cover h-screen font-body px-8 py-16">
            <h1 class="text-4xl mb-12 font-bold">Go where the roads take you.</h1>
            <div class="rental-search">
                <form action="rentals/offers">
                    <div class="flex">
                        <SearchButton key="rentalLocation" name="location" placeholder="Enter location here" image={destination_icon}/>
                        <input class="ml-2 rounded-l" type="date" name="departureDate"></input>
                        <select class="mr-2 rounded-r" name="departureTime">
                            <option value="" disabled selected>Pickup</option>
                            <option value="0:00">Midnight</option>
                            <option value="1:00">1:00 am</option>
                            <option value="2:00">2:00 am</option>
                            <option value="3:00">3:00 am</option>
                            <option value="4:00">4:00 am</option>
                            <option value="5:00">5:00 am</option>
                            <option value="6:00">6:00 am</option>
                            <option value="7:00">7:00 am</option>
                            <option value="8:00">8:00 am</option>
                            <option value="9:00">9:00 am</option>
                            <option value="10:00">10:00 am</option>
                            <option value="11:00">11:00 am</option>
                            <option value="12:00">Noon</option>
                            <option value="13:00">1:00 pm</option>
                            <option value="14:00">2:00 pm</option>
                            <option value="15:00">3:00 pm</option>
                            <option value="16:00">4:00 pm</option>
                            <option value="17:00">5:00 pm</option>
                            <option value="18:00">6:00 pm</option>
                            <option value="19:00">7:00 pm</option>
                            <option value="20:00">8:00 pm</option>
                            <option value="21:00">9:00 pm</option>
                            <option value="22:00">10:00 pm</option>
                            <option value="23:00">11:00 pm</option>
                        </select>
                        <input class="rounded-l" type="date" name="returnDate"></input>
                        <select class="rounded-r" name="returnTime">
                            <option value="" disabled selected>Return</option>
                            <option value="0:00">Midnight</option>
                            <option value="1:00">1:00 am</option>
                            <option value="2:00">2:00 am</option>
                            <option value="3:00">3:00 am</option>
                            <option value="4:00">4:00 am</option>
                            <option value="5:00">5:00 am</option>
                            <option value="6:00">6:00 am</option>
                            <option value="7:00">7:00 am</option>
                            <option value="8:00">8:00 am</option>
                            <option value="9:00">9:00 am</option>
                            <option value="10:00">10:00 am</option>
                            <option value="11:00">11:00 am</option>
                            <option value="12:00">Noon</option>
                            <option value="13:00">1:00 pm</option>
                            <option value="14:00">2:00 pm</option>
                            <option value="15:00">3:00 pm</option>
                            <option value="16:00">4:00 pm</option>
                            <option value="17:00">5:00 pm</option>
                            <option value="18:00">6:00 pm</option>
                            <option value="19:00">7:00 pm</option>
                            <option value="20:00">8:00 pm</option>
                            <option value="21:00">9:00 pm</option>
                            <option value="22:00">10:00 pm</option>
                            <option value="23:00">11:00 pm</option>
                        </select>
                        <button class="mx-2">
                            <img src={search_icon}/>
                        </button>
                    </div>
                </form>
            </div>
        </div>
     );
}

export default RentalSearch;