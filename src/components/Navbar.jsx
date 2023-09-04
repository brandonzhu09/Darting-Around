import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {
  return (
    <nav class="font-body text-gray-300 text-lg list-none opacity-70">
      <Link to="/">
        <img class="ml-4" src={logo}></img>
      </Link>
      <div class="left-links">
        <li class="links">
          <Link to="/flights" class="pl-10">
            {" "}
            Flights{" "}
          </Link>
        </li>
        <li class="links">
          <Link to="/hotels" class="pl-10">
            {" "}
            Hotels{" "}
          </Link>
        </li>
        <li class="links">
          <Link to="/rentals" class="pl-10">
            {" "}
            Rentals{" "}
          </Link>
        </li>
        <li class="links">
          <Link to="/travel/form" class="pl-10">
            {" "}
            Play Darts{" "}
          </Link>
        </li>
      </div>
      <div class="right-links mr-10">
        <li class="links cta">
          <Link to="/about" class="px-4">
            {" "}
            Contact Us{" "}
          </Link>
        </li>
        <li class="links">
          <Link to="/profile" class="pl-10">
            {" "}
            Profile{" "}
          </Link>
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
