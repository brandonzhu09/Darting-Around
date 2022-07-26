import React from 'react';

function FlightCard(props) {
    return ( 
        <div>
            <ul>
                <li>{props.origin} TO {props.destination}</li>
                <li>Price: ${props.price}</li>
                <li>Total duration: {props.trips.duration}</li>
                <li>Seats left: {props.seats}</li>
            </ul>
        </div>
     );
}

export default FlightCard;