import React from "react";
import destination_icon from "../../assets/destination_icon_black.png";
import search_icon from "../../assets/search.png";

function HotelSearchBar() {
  return (
    <div className="hotel-search">
      <form action="http://localhost:3000/hotels/offers">
        <div class="flex justify-start">
          <input
            class="rounded w-20 text-center"
            type="number"
            name="rooms"
            placeholder="Rooms"
            min="0"
            max="8"
          ></input>
        </div>
        <div class="flex items-center my-2">
          <div class="flex bg-gray-300 rounded py-2 mr-2">
            <img class="px-2" src={destination_icon} alt="destination-icon" />
            <input
              class="bg-transparent after:bg-transparent pr-8"
              type="text"
              name="location"
              placeholder="Leaving From"
              required
            ></input>
          </div>
          <label for="departureDate">Departure Date:</label>
          <input
            type="date"
            name="departureDate"
            placeholder="Departure Date"
            required
          ></input>
          <label for="returnDate">Return Date:</label>
          <input
            type="date"
            name="returnDate"
            placeholder="Return Date"
            required
          ></input>
          <button class="mx-4">
            <img src={search_icon} alt="search-icon" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default HotelSearchBar;
