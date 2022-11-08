import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'
import HotelCard from '../components/HotelCard'
import HotelSearchBar from '../components/HotelSearchBar';
import LoadingScreen from '../components/LoadingScreen';

export default function HotelOffers() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [hotels, setHotels] = useState([])
    const [loading, setLoading] = useState(true)

    const location = searchParams.get("location") 
    const departureDate = searchParams.get("departureDate")
    const returnDate = searchParams.get("returnDate")
    const rooms = searchParams.get("rooms") === "" ? 1 : searchParams.get("rooms")

    const hotelImage = "https://mobileimg.pclncdn.com/htlimg/master/48/5/1/4851305/master_4851305"

    const amenitiesCode = {
        "FINTRNT": "Free Internet Access",
        "HEALTHSVCS": "Health Services",
        "RESTRNT": "Restaurant",
        "NSMKFAC": "No Smoking Rooms/Facitilies",
        "FITSPA": "Fitness Center",
        "SPA": "Spa", 
        "PETALLOW": "Pets Allowed",
        "HANDFAC": "Handicapped Rooms/Facilities"
    }

    useEffect(()=>{
        axios.get(`http://localhost:5000/hotels/${location}/${departureDate}/${returnDate}`).then(response => {
            console.log("SUCCESS", response)
            setHotels(JSON.parse(JSON.stringify(response.data.hotels)))
            setLoading(false)
        }).catch(error => {
            console.log(error)
        })

    }, [location, departureDate, returnDate])

    return ( 
        <div class="mt-32">
            {/* <HotelCard key={1} name={"The Westin Buffalo"} location={"Downtown Buffalo"} image={hotelImage} price={"$238"} rating={4.5} amenities={["Breakfast included", "Free WiFi Access"]}/> */}
            {loading === false ? (
                <>
                <div class="flex justify-center my-10">
                    <HotelSearchBar />
                </div>
                <div class="flex flex-wrap items-stretch">
                    {hotels.map((hotel) => <HotelCard 
                                            key={hotel.hotelId} 
                                            id={hotel.hotelId} 
                                            name={hotel.name}
                                            address={hotel.location.address.addressLine1}
                                            location={hotel.location.address.cityName+", "+hotel.location.address.countryName}
                                            price={hotel.ratesSummary.minPrice} 
                                            amenities={hotel.hotelFeatures.hotelAmenityCodes ? hotel.hotelFeatures.hotelAmenityCodes.slice(0,2).map(hotelCode => hotelCode in amenitiesCode ? amenitiesCode[hotelCode] : "") : []}
                                            rating={hotel.starRating}
                                            image={hotel.media ? hotel.media.url : ""}
                                            departureDate={departureDate}
                                            returnDate={returnDate}
                                            rooms={rooms}
                                                    />)}
                </div></>
            ) : <LoadingScreen />}
        </div>
     );
}