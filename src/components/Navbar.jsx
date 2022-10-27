import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
    return ( 
            
        <nav class="font-body text-gray-300 text-lg list-none">
            <Link to="/"><img class="ml-4" src={logo}></img></Link>
            <div class="nav-links">
                <ul>
                    <li><Link to="/flights" class="ml-10"> Flights </Link></li>
                    <li><Link to="/hotels" class="ml-10"> Hotels </Link></li>
                    <li><Link to="/rentals" class="ml-10"> Rentals </Link></li>
                    <li><Link to="/about" class="ml-10"> About Us </Link></li>
                    <li><Link to="/profile" class="ml-10"> Profile </Link></li>
                </ul>
            </div>
        </nav>

        
     );
}

export default Navbar;