import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import HotelCard from '../components/HotelCard'
import LoadingScreen from '../components/LoadingScreen';

export default function HotelOffers() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [hotels, setHotels] = useState([])
    const [loading, setLoading] = useState(true)

    const cityCode = searchParams.get("cityCode") 
    const departureDate = searchParams.get("departureDate")
    const returnDate = searchParams.get("returnDate")

    useEffect(()=>{
        axios.get(`http://localhost:5000/hotels/${cityCode}`).then(response => {
            console.log("SUCCESS", response)
            setHotels(JSON.parse(JSON.stringify(response.data.data)))
            setLoading(false)
        }).catch(error => {
            console.log(error)
        })

    }, [cityCode])

    return ( 
        <div>
            {loading === false ? (
                hotels.map((hotel) => <HotelCard 
                                        key={hotel.offers[0].id} 
                                        id={hotel.hotel.hotelId} 
                                        name={hotel.hotel.name}
                                        price={hotel.offers[0].price.total} 
                                        amenities={hotel.hotel.amenities}
                                        location={{"address":hotel.hotel.address.lines, "latitude":hotel.hotel.latitude, "longitude":hotel.hotel.longitude}}
                                        contact={hotel.hotel.contact}
                                        rating={hotel.hotel.rating}
                                        departureDate={departureDate}
                                        returnDate={returnDate}
                                                 />)
            ) : <LoadingScreen />}
        </div>
     );
}