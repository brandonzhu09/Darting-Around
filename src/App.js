// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar'
import FlightSearch from './pages/flight-search'
import FlightOffers from './pages/flight-offers'
import HotelSearch from './pages/hotel-search'
import HotelOffers from './pages/hotel-offers'
import RentalSearch from './pages/rental-search'
import RentalOffers from './pages/rental-offers'
import HomePage from './pages/home-page'
import ErrorPage from './pages/error'
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
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;