import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import RentalCard from '../components/RentalCard';
import LoadingScreen from '../components/LoadingScreen';

export default function RentalOffers() {
    const [searchParams, setSearchParams] = useSearchParams()
    const [rentals, setRentals] = useState([])
    const [loading, setLoading] = useState(true)

    const location = searchParams.get("location") 
    const departureDate = searchParams.get("departureDate")
    const departureTime = searchParams.get("departureTime")
    const returnDate = searchParams.get("returnDate")
    const returnTime = searchParams.get("returnTime")

    useEffect(()=>{
        axios.get(`http://localhost:5000/rentals/${location}/${departureDate}/${departureTime}/${returnDate}/${returnTime}`).then(response => {
            console.log("SUCCESS", response)
            setRentals(JSON.parse(JSON.stringify(response.data.vehicleRates)))
            setLoading(false)
        }).catch(error => {
            console.log(error)
        })

    }, [location, departureDate, departureTime, returnDate, returnTime])

    return ( 
        <div class="mt-32">
            {loading === false ? (
                <>
                {rentals.length > 0 ?
                <div class="flex flex-wrap justify-center">
                    {rentals.map((rental) => <RentalCard 
                        key={rental.id} 
                        id={rental.id} 
                        name={rental.vehicleInfo.vehicleExample}
                        description={rental.vehicleInfo.description}
                        price={rental.rates.USD.basePrices.TOTAL} 
                        pickUpLocation={rental.pickUpLocation.address}
                        returnLocation={rental.returnLocation.address}
                        images={rental.vehicleInfo.images}
                        peopleCapacity={rental.vehicleInfo.peopleCapacity}
                        bagCapacity={rental.vehicleInfo.bagCapacity}
                        departureDate={departureDate}
                        returnDate={returnDate} 
                        partnerImg={rental.partnerImg}/>)
                    }
                </div>
                :
                <div class="flex flex-col">
                    <h1 class="m-auto text-3xl text-center">No rentals found.</h1>
                </div>}
                </>
            ) : <LoadingScreen /> }
        </div>
     );
}