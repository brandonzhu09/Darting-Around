import React from 'react';
import destination_icon from '../assets/office-building.png';

/*
props: key, id, name, description, price, pickUpLocation, returnLocation, 
images, peopleCapacity, bagCapacity, departureDate, returnDate
*/

function RentalCard(props) {
    return ( 
        <div>
            <div class="bg-white mx-4 my-4 rounded max-w-lg overflow-hidden shadow-lg transition ease-in-out delay-150 hover:scale-110 duration-300">
                <div class="rental-card">
                    <div class="img-box px-4">
                        <img src={props.images.SIZE134X72} />
                        <img src={props.partnerImg} />
                    </div>
                    <div class="description-box px-4 pt-4">
                        <h1 class="text-lg font-bold">{props.name}</h1>
                        <h3 class="text-md font-thin">{props.description}</h3>
                    </div>
                    <div className="price-box px-8 pt-8">
                        <h2 class="text-lg font-bold text-end">${props.price}</h2>
                    </div>
                    <div class="destination-box pt-4">
                        <div class="flex bg-gray rounded justify-center">
                            <img class="object-contain mr-4" src={destination_icon} />
                            <p>{props.pickUpLocation.addressLine1} {props.pickUpLocation.cityName}</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
     );
}

export default RentalCard;


{/* <h1 class="font-bold">{props.name}</h1>
            <h3>{props.description}</h3>
            <img src={props.images.SIZE134X72}/>
            <ul>
                <li>Price: ${props.price}</li>
                <li>Pickup Location:{props.pickUpLocation.addressLine1} {props.pickUpLocation.cityName}</li>
            </ul>
            <br></br> */}