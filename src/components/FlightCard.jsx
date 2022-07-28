import React from 'react';

function FlightCard(props) {
    return ( 
        <div>
            <div class="px-4 py-4">
                <ul>
                    <li>{props.origin} TO {props.destination}</li>
                    <li>Price: ${props.price}</li>
                    <li>Seats left: {props.seats}</li>
                </ul>
            </div>
        </div>
     );
}

export default FlightCard;