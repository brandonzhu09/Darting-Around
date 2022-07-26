import React, { useEffect, useState } from 'react';
import axios from 'axios';
import FlightSearchBar from '../components/FlightSearchBar';

function FlightSearch() {

    const [location, setLocation] = useState({})
    const [recommendations, setRecommendations] = useState([])

    useEffect(()=>{
        const fetchData = async () => {
            const getLocation = await axios(
                `http://localhost:5000/location`
            )
            const getRecommendations = await axios(
                `http://localhost:5000/flights/travel_recommendations/LAX/2017-11`
            )
            setLocation(JSON.parse(JSON.stringify(getLocation.data)))
            console.log(getLocation)
            console.log(getRecommendations)
            setRecommendations(JSON.parse(JSON.stringify(getRecommendations.data.data)))
        }
        fetchData()
    }, [])

    return ( 
        <div class="bg-flight-header opacity-70 bg-cover h-screen font-body px-8 py-16">
            <img class="object-fill" />
            <h1 class="text-4xl mb-12 font-bold">Pick a place and let's fly.</h1>
            <FlightSearchBar />
        </div>
     );
}

export default FlightSearch;