import React, { useState } from 'react';
import flightData from '../assets/airport_data.json';

function SearchButton(props) {
    const [location, setLocation] = useState("")
    const [locationCode, setLocationCode] = useState("")
    const [clicked, setClicked] = useState(true)

    return ( 
        <div> 
            <div class="flex bg-gray-300 rounded py-2 relative">
                <img class="px-2" src={props.icon}/>
                <input 
                    class="bg-transparent after:bg-transparent pr-8" 
                    type="text" 
                    value={location} 
                    placeholder={props.placeholder} 
                    onChange={event => {setLocation(event.target.value); setClicked(false);}} required autocomplete="off">   
                </input>
                <input type="hidden" name={props.name} value={locationCode}></input>
            </div>
            <div class="absolute bg-white mt-2 max-h-32 max-w-xxs overflow-auto">
                {flightData["rows"].filter(flight => (
                    !clicked && (flight.name.toLowerCase().includes(location.toLowerCase()) || flight.iata.toLowerCase().includes(location.toLowerCase())))
                ).map(flight => (
                    <div class="block py-2 pl-2 text-xs hover:bg-gray-300" value={flight.name} onClick={() => {setLocation(flight.name); setLocationCode(flight.iata); setClicked(true);}}>{flight.name}</div>
                ))}
            </div>
        </div>
     );
}

export default SearchButton;