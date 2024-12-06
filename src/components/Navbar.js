// src/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="Certifications">Certifications</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
