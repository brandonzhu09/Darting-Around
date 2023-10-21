import React from "react";
import airline_logo from "../../assets/airline_icon.png";

function FlightCard(props) {
  return (
    <div>
      <div class="bg-white mx-4 my-4 rounded max-w-lg overflow-hidden shadow-lg transition ease-in-out delay-150 hover:scale-110 duration-300">
        <div class="flex-wrap">
          {props.trips.map((trip) => (
            <div class="flex px-4 py-4">
              <img
                class="object-contain mr-4"
                src={trip.airlineLogo === "" ? airline_logo : trip.airlineLogo}
              />
              <div class="mr-4 mb-4">
                <h1>
                  {trip.departureTime} - {trip.arrivalTime}
                </h1>
                <h3 class="flex font-thin text-sm">{trip.airline}</h3>
              </div>
              <div>
                {trip.stops === 0 ? (
                  <h1>{trip.duration} (nonstop)</h1>
                ) : (
                  <h1>
                    {trip.duration} ({trip.stops} stops)
                  </h1>
                )}
                <h3 class="flex text-sm font-thin">
                  {trip.originLocationCode} - {trip.destinationLocationCode}
                </h3>
              </div>
            </div>
          ))}
          <div class="px-4 py-6 border-t text-end">
            <h1 class="text-lg font-bold">${props.price}</h1>
            <h3 class="block text-xs">{props.travelClass}</h3>
          </div>
        </div>
        {/* <ul>
                    <li>{props.origin} TO {props.destination}</li>
                    <li>Price: ${props.price}</li>
                    <li>Seats left: {props.seats}</li>
                </ul> */}
      </div>
    </div>
  );
}

export default FlightCard;
