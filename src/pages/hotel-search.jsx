import React from 'react';
import HotelSearchBar from '../components/HotelSearchBar';
import destination_icon from '../assets/destination_icon_black.png';
import search_icon from '../assets/search.png';

function HotelSearch() {
    return ( 
        <div class="bg-hotel-header opacity-60 bg-cover h-screen font-body px-8 py-16">
            <h1 class="text-4xl mb-8 font-bold">Find the right place to stay.</h1>
            <h3 class="text-2xl mb-4 ">Explore the different lodging and accommodations that best suit your needs.</h3>
            <HotelSearchBar />
        </div>
     );
}

export default HotelSearch;