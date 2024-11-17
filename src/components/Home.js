import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Greetings, Traveler! Explore the World of Joseph Skokan's Work</h1>
        <p>
          I'm a passionate developer skilled in React, JavaScript, Python, and
          more.
        </p>
        <Link to="/portfolio" className="button-main">
          See My Work
        </Link>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <h2>Featured Projects</h2>
        <p>Check out some of my recent work.</p>

        <div className="projects-container">
          {/* Project 1 */}
          <div className="project">
            <a
              href="https://github.com/notAnotherAverageJoe/Property-Preservation-Plus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/PPP.png"
                alt="Property Preservation Plus"
                className="project-image"
              />
              <h3>Property Preservation Plus</h3>
              <p>
                Project Overview: Property Preservation Plus is a full-featured
                property management application. It allows users to manage
                properties, tenants, maintenance requests, leases, and financial
                records. The system also includes role-based access control and
                integrates weather data from the OpenWeather API.
              </p>
              <h3>View source code!</h3>
            </a>
          </div>

          {/* Project 2 */}
          <div className="project">
            <a
              href="https://github.com/notAnotherAverageJoe/bit_buddy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/bb1.jpg"
                alt="Bit Buddy Project"
                className="project-image"
              />
              <h3>Bit Buddy</h3>
              <p>
                A cryptocurrency platform that allows you to buy, sell, and
                stake cryptocurrencies in an educational environment.
                <br />
                <strong>Features:</strong>
                <br />
                User authentication and registration systems. A dashboard to
                view user information and portfolio. Real-time market data for
                Bitcoin and blockchain information. The ability to buy and sell
                Bitcoin. Transaction history tracking. A staking calculator to
                estimate returns. A RESTful API for managing cryptocurrencies. A
                crypto mining game.
              </p>
              <h3>View source code!</h3>
            </a>
          </div>

          {/* Project 3 */}
          <div className="project">
            <a
              href="https://github.com/notAnotherAverageJoe/GG---GiggleGate-A-joke-paradise"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/gg.png"
                alt="GG Giggle Gate"
                className="project-image"
              />
              <h3>GG-Giggle Gate</h3>
              <p>
                GG-Giggle Gate is a lightweight web application built with the
                Sinatra framework. It features user authentication, joke
                categories fetched from an external API, and the ability to save
                and manage favorite jokes. The project uses ActiveRecord for
                database management and BCrypt for secure password storage.
              </p>
              <h3>View source code!</h3>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Joseph Skokan</p>
      </footer>
    </div>
  );
}

export default Home;
