import React, { useEffect, useState } from 'react';
import axios from 'axios'
import DestinationCard from '../components/DestinationCard';

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
        <div className="search-page">
            <div className="flight-search">
                <form action="flights/offers">
                    <div>
                        <input type="radio" value="oneWay" name="flight_type" /> One Way
                        <input type="radio" value="roundTrip" name="flight_type" /> Roundtrip
                    </div>
                    <input type="text" name="originLocationCode" placeholder="Origin Location Code" required></input>
                    <input type="text" name="destinationLocationCode" placeholder="Destination Location Code" required></input>
                    <input type="date" name="departureDate" placeholder="Departure Date" required></input>
                    <input type="date" name="returnDate" placeholder="Return Date" required></input>
                    <input type="text" name="travelClass" placeholder="Travel Class"></input>
                    <button>Search</button>
                </form>
            </div>
            <div className="travel-recommendations">
                <h3>Explore the World from {location.region_name}!</h3>
                <h3 className="text-3xl font-bold underline">Most Booked Flights near you</h3>
                <div>
                    {/* {recommendations.map(destination => 
                        <DestinationCard 
                            key={destination.id}
                            id={destination.id}
                            destination={destination.destination}
                            rating={destination.analytics.flights}
                        />
                    )} */}
                </div>
            </div>
        </div>
     );
}

export default FlightSearch;