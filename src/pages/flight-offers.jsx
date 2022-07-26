import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import FlightCard from '../components/FlightCard'
import { BounceLoader, BarLoader } from 'react-spinners'

export default function FlightOffers() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [flights, setFlights] = useState([])

    const originLocationCode = searchParams.get("originLocationCode") 
    const destinationLocationCode = searchParams.get("destinationLocationCode")
    const departureDate = searchParams.get("departureDate")
    const returnDate = searchParams.get("returnDate")
    const travelClass = searchParams.get("travelClass")

    useEffect(()=>{
        axios.get(`http://localhost:5000/flights/${originLocationCode}/${destinationLocationCode}/${departureDate}/${returnDate}/${travelClass}`).then(response => {
            console.log("SUCCESS", response)
            setFlights(JSON.parse(JSON.stringify(response.data.flights)))
        }).catch(error => {
            console.log(error)
        })

    }, [originLocationCode, destinationLocationCode, departureDate, returnDate, travelClass])

    return ( 
        <div>
            {flights.length != 0 ? flights.map((flight) => <FlightCard key={flight.id} 
                                                 id={flight.id} 
                                                 origin={originLocationCode} 
                                                 destination={destinationLocationCode} 
                                                 price={flight.price} 
                                                 duration={flight.trips.duration} 
                                                 seats={flight.numberOfBookableSeats}
                                                 trips={flight.trips}
                                                 />) : <h1>Loading...</h1>}
        </div>
     );
}