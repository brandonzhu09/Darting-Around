import React from 'react';
import flightIcon from '../assets/flight_icon.png';
import hotelIcon from '../assets/hotel_icon.png';
import destinationIcon from '../assets/destination_icon.png';
import cardImage from '../assets/card_image.png';

function HomePage() {
    return ( 
        <div class="font-body">
            <header class="bg-hero-header opacity-70 bg-cover h-128 relative">
                <nav class="">
                    <ul class="flex text-gray-300 text-lg list-none justify-center">
                        <li class="ml-10"><a href="/flights"></a></li>
                        <li class="ml-10"><a href="/hotels"></a></li>
                        <li class="ml-10"><a href="/rentals"></a></li>
                        <li class="ml-10"><a href="/profile"></a></li>
                        <li class="ml-10"><a href="/"></a></li>
                    </ul>
                </nav>
                <div class="mt-24 text-white pl-10 drop-shadow-md">
                    <h1 class="pt-10 text-6xl sm:text-5xl">Make your next move.</h1>
                    <h3 class="pt-10 text-4xl sm:text-3xl break-words">Don't know where to go for vacation? Click here to start your new adventure!</h3>
                </div>
                <div class="mt-10 flex justify-center text-black">
                    <button class="text-center px-8 py-4 ml-4 border border-black rounded hover:bg-secondary">
                        <span class="get-started">Play Darts!</span>
                    </button>
                    <button class="text-center px-8 py-4 ml-4 border border-black rounded hover:bg-secondary">
                        <span class="learn-more">Learn More</span>
                    </button>
                </div>
            </header>
            <div class="flex items-baseline text-center justify-center pt-10">
                <div class="mr-10 lg:mr-40 w-56 lg:w-96">
                    <img src={flightIcon} class="mx-auto" />
                    <h3 class="font-bold text-xl py-2">Flight Offers</h3>
                    <p class="w-56 mx-auto">Get flight deals from over 500 airlines in the world customized to fit your price range and schedule.</p>
                </div>
                <div class="mr-10 lg:mr-40 w-56 lg:w-96">
                    <img src={hotelIcon} class="mx-auto"/>
                    <h3 class="font-bold text-xl py-2">Hotel Search</h3>
                    <p class="w-56 mx-auto">Search for hundreds of leading hotel chains around the world and their perks to find your next vacation spot. </p>
                </div>
                <div class="mr-10 lg:mr-40 w-56 lg:w-96">
                    <img src={destinationIcon} class="mx-auto"/>
                    <h3 class="font-bold text-xl py-2">Interactive Game</h3>
                    <p class="w-56 mx-auto">Throw a dart to the world map and  discover new vacation spots and explore a new culture!</p>
                </div>
            </div>
            <div class="bg-gray-300 mt-20">
                <h2 class="block text-2xl text-white font-bold pl-4 py-8">Top Destinations Today</h2>
                <div class="flex justify-center carosel">    
                    <div class="bg-white max-w-sm rounded mr-5 overflow-hidden shadow-lg">
                        <img class="w-full" src={cardImage} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                    <div class="bg-white max-w-sm rounded mr-5 overflow-hidden shadow-lg">
                        <img class="w-full" src={cardImage} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                    <div class="bg-white max-w-sm rounded mr-5 overflow-hidden shadow-lg">
                        <img class="w-full" src={cardImage} alt="Sunset in the mountains" />
                        <div class="px-6 py-4">
                            <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
                            <p class="text-gray-700 text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                            </p>
                        </div>
                        <div class="px-6 pt-4 pb-2">
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default HomePage;