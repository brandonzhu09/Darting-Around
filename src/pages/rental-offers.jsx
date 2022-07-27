import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import RentalCard from '../components/RentalCard'

export default function RentalOffers() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [rentals, setRentals] = useState([])

    const location = searchParams.get("location") 
    const departureDate = searchParams.get("departureDate")
    const departureTime = searchParams.get("departureTime")
    const returnDate = searchParams.get("returnDate")
    const returnTime = searchParams.get("returnTime")

    useEffect(()=>{
        axios.get(`http://localhost:5000/rentals/${location}/${departureDate}/${departureTime}/${returnDate}/${returnTime}`).then(response => {
            console.log("SUCCESS", response)
            setRentals(JSON.parse(JSON.stringify(response.vehicleRates)))
        }).catch(error => {
            console.log(error)
        })

    }, [location, departureDate, departureTime, returnDate, returnTime])

    return ( 
        <div>
            {rentals.map((rental) => <RentalCard 
                                        key={Rental.offers[0].id} 
                                        id={hotel.hotel.hotelId} 
                                        name={hotel.hotel.name}
                                        price={hotel.offers[0].price.total} 
                                        amenities={hotel.hotel.amenities}
                                        location={{"address":hotel.hotel.address.lines, "latitude":hotel.hotel.latitude, "longitude":hotel.hotel.longitude}}
                                        contact={hotel.hotel.contact}
                                        rating={hotel.hotel.rating}
                                        departureDate={departureDate}
                                        returnDate={returnDate}
                                                 />)}
        </div>
     );
}