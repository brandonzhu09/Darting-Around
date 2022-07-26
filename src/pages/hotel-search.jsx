import React from 'react';

function HotelSearch() {
    return ( 
        <div className="hotel_search">
            <form action="hotels/offers">
                <input type="text" name="cityCode" placeholder="City Code"></input>
                <label>Departure Date:</label>
                <input type="date" name="departureDate" placeholder="Departure Date"></input>
                <label>Return Date:</label>
                <input type="date" name="returnDate" placeholder="Return Date"></input>
                <button>Search</button>
            </form>
        </div>
     );
}

export default HotelSearch;