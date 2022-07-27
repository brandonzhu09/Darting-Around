import React from 'react';

/*
props: key, id, name, description, price, pickUpLocation, returnLocation, 
images, peopleCapacity, bagCapacity, departureDate, returnDate
*/
function RentalCard(props) {
    return ( 
        <div>
            <h1 class="font-bold">{props.name}</h1>
            <h3>{props.description}</h3>
            <img src={props.images.SIZE134X72}/>
            <ul>
                <li>Price: ${props.price}</li>
                <li>Pickup Location:{props.pickUpLocation.addressLine1} {props.pickUpLocation.cityName}</li>
            </ul>
            <br></br>
        </div>
     );
}

export default RentalCard;