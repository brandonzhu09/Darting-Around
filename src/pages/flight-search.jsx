import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from '../components/Navbar';
import FlightSearchBar from '../components/FlightSearchBar';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function FlightSearch() {

    const [location, setLocation] = useState({})
    const [recommendations, setRecommendations] = useState([])

    // useEffect(()=>{
    //     const fetchData = async () => {
    //         const getLocation = await axios(
    //             `http://localhost:5000/location`
    //         )
    //         const getRecommendations = await axios(
    //             `http://localhost:5000/flights/travel_recommendations/LAX/2017-11`
    //         )
    //         setLocation(JSON.parse(JSON.stringify(getLocation.data)))
    //         console.log(getLocation)
    //         console.log(getRecommendations)
    //         setRecommendations(JSON.parse(JSON.stringify(getRecommendations.data.data)))
    //     }
    //     fetchData()
    // }, [])

    return ( 
        <div class="bg-flight-header opacity-70 bg-cover h-screen font-body">
            <img class="object-fill" />
            <div class="pt-36 px-8">
                <h1 class="text-4xl mb-10 font-bold">Pick a place and let's fly.</h1>
                <FlightSearchBar />
            </div>
        </div>
     );
}

export default FlightSearch;