import React from 'react';
import ReactStars from 'react-rating-stars-component';

function HotelCard(props) {
    return ( 
        <div>
            <div class="flex-wrap p-4 bg-white mx-4 my-4 rounded max-w-lg overflow-hidden shadow-lg transition ease-in-out delay-150 hover:scale-110 duration-300">
                <img class="flex" src={props.image} />
                <div>
                    <h1 class="text-2xl">{props.name}</h1>
                    <p class="block text-md">{props.location}</p>
                </div>
                <div class="flex items-center">
                    <ReactStars value={props.rating} edit={false}/>
                    <p class="text-sm ml-2 font-thin">({props.rating}/5)</p>
                </div>
                <div class="flex flex-wrap mt-6 align-bottom">
                    <div class="mt-6 basis-1/2">
                        {props.amenities.map(amenity => <p class="block text-md">{amenity}</p>)}
                    </div>
                    <div class="basis-1/2 items-baseline">
                        <h1 class="flex text-2xl font-bold justify-end">{props.price}</h1>
                        <div class="flex flex-wrap justify-end"><p class="text-sm w-20 text-end">{"$443 total for 2 rooms"}</p></div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default HotelCard;