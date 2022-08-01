import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import HotelCard from '../components/HotelCard'
import LoadingScreen from '../components/LoadingScreen';

export default function HotelOffers() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [hotels, setHotels] = useState([])
    const [loading, setLoading] = useState(true)

    const location = searchParams.get("location") 
    const departureDate = searchParams.get("departureDate")
    const returnDate = searchParams.get("returnDate")

    const amenitiesCode = {
        "FINTRNT": "Free Internet Access",
        "HEALTHSVCS": "Health Services",
        "RESTRNT": "Restaurant",
        "NSMKFAC": "No Smoking Rooms/Facitilies"
    }

    // useEffect(()=>{
    //     axios.get(`http://localhost:5000/hotels/${location}/${departureDate}/${returnDate}`).then(response => {
    //         console.log("SUCCESS", response)
    //         setHotels(JSON.parse(JSON.stringify(response.data.data)))
    //         setLoading(false)
    //     }).catch(error => {
    //         console.log(error)
    //     })

    // }, [location, departureDate, returnDate])

    return ( 
        <div>
            {<HotelCard key={1} name={"The Westin Buffalo"} location={"Downtown Buffalo"} price={"$238"} rating={4.5} amenities={["Breakfast included", "Free WiFi Access"]}/>}
            {/* {loading === false ? (
                hotels.map((hotel) => <HotelCard 
                                        key={hotel.hotelId} 
                                        id={hotel.hotelId} 
                                        name={hotel.name}
                                        address={hotel.location.address.addressLine1}
                                        location={location}
                                        price={hotel.ratesSummary.minPrice} 
                                        amenities={hotel.hotelFeatures.hotelAmenityCodes}
                                        rating={hotel.starRating}
                                        image={hotel.media.url}
                                        departureDate={departureDate}
                                        returnDate={returnDate}
                                                 />)
            ) : <LoadingScreen />} */}
        </div>
     );
}