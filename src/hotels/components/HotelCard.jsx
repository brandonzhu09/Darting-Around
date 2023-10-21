import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { PropagateLoader } from 'react-spinners';

function HotelCard(props) {
    return ( 
        <div class="flex basis-full lg:basis-1/2 bg-white my-4 rounded overflow-hidden shadow-lg transition ease-in-out delay-150 hover:scale-110 duration-300">
            <div class="flex max-w-28 max-h-40 items-center"> 
                <img class="object-fill" src={props.image} />
            </div>
            <div class="px-4 pt-2">
                <h1 class="text-2xl">{props.name}</h1>
                <p class="block text-md">{props.location}</p>
            </div>
            <div class="flex items-center px-4">
                <ReactStars value={props.rating} edit={false}/>
                <p class="text-sm ml-2 font-thin">({props.rating}/5)</p>
            </div>
            <div class="flex flex-wrap mt-6 p-4 items-end">
                <div class="">
                    {props.amenities.map(amenity => <p class="block text-xs text-green-500">{amenity}</p>)}
                </div>
                <div class="">
                    <h1 class="flex text-2xl font-bold justify-end">${Math.round(props.price)}</h1>
                    <div class="flex flex-wrap justify-end">
                        {props.rooms == 1 
                        ?   <p class="text-sm w-20 text-end">${Math.round(props.price*1.13)} total</p>
                        :   <p class="text-sm w-20 text-end">${Math.round(props.price*1.13*props.rooms)} total for {props.rooms} rooms</p>   
                        }
                    </div>
                </div>
            </div>
        </div>
     );
}

export default HotelCard;