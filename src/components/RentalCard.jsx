import React from 'react';

function RentalCard(props) {
    return ( 
        <div>
            <h3>{props.name}</h3>
            <ul>
                <li>Price: ${props.price}</li>
                Amenities:<ul>
                    {props.amenities !== undefined ? props.amenities.slice(0,5).map(perk => <li>{perk}</li>) : "None"}
                </ul>
                <li>Rating: {props.rating}/5</li>
            </ul>
        </div>
     );
}

export default RentalCard;