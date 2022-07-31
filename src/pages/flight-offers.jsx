import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import FlightSearchBar from '../components/FlightSearchBar';
import FlightCard from '../components/FlightCard';
import LoadingScreen from '../components/LoadingScreen';

export default function FlightOffers() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [flights, setFlights] = useState([])
    const [loading, setLoading] = useState(true)

    const originLocationCode = searchParams.get("originLocationCode") 
    const destinationLocationCode = searchParams.get("destinationLocationCode")
    const flightType = searchParams.get("flightType")
    const departureDate = searchParams.get("departureDate")
    const returnDate = flightType === "roundTrip" ? searchParams.get("returnDate") : "null"
    const travelClass = searchParams.get("travelClass")

    useEffect(()=>{
        axios.get(`http://localhost:5000/flights/${originLocationCode}/${destinationLocationCode}/${departureDate}/${returnDate}/${travelClass}/${flightType}`).then(response => {
            console.log("SUCCESS", response)
            setFlights(JSON.parse(JSON.stringify(response.data.flights)))
            setLoading(false)
        }).catch(error => {
            console.log(error)
        })

    }, [originLocationCode, destinationLocationCode, departureDate, returnDate, travelClass, flightType])

    return ( 
        <div>
            {loading === false ? (
                <>
                <div class="flex justify-center my-10">
                    <FlightSearchBar />
                </div>
                <div class="flex flex-wrap">
                    {/* <FlightCard key={1} origin={"BOS"} destination={"DUB"} price={"$123"} duration={"6H37M"} seats={6} /> */}
                    {flights.map((flight) => <FlightCard key={flight.id}
                        id={flight.id}
                        price={flight.price}
                        seats={flight.numberOfBookableSeats}
                        travelClass={travelClass}
                        trips={flight.trips} />)}
                </div></>
            ) : <LoadingScreen />}
        </div>
     );
}