// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import FlightSearch from './flights/pages/flight-search'
import FlightOffers from './flights/pages/flight-offers'
import HotelSearch from './hotels/pages/hotel-search'
import HotelOffers from './hotels/pages/hotel-offers'
import RentalSearch from './rentals/pages/rental-search'
import RentalOffers from './rentals/pages/rental-offers'
import HomePage from './pages/home-page'
import ErrorPage from './pages/error'
import TravelQuestionnaire from './pages/travel-questionnaire'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/flights" element={<FlightSearch />}/>
        <Route path="/flights/offers" element={<FlightOffers />} />
        <Route path="/hotels" element={<HotelSearch />}/>
        <Route path="/hotels/offers" element={<HotelOffers />} />
        <Route path="/rentals" element={<RentalSearch />} />
        <Route path="/rentals/offers" element={<RentalOffers />} />
        <Route path="/travel/form" element={<TravelQuestionnaire />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;