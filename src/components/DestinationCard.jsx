import React from 'react';

function DestinationCard(props) {
    return ( 
        <div>
            <ul>
                <li>Destination: {props.destination}</li>
                <li>Rating: {props.rating}/100</li>
            </ul>
        </div>
     );
}

export default DestinationCard;