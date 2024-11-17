// src/Home.js
import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I'm a passionate developer skilled in React, JavaScript, Python and
          more.
        </p>
        <a href="/portfolio" className="button-main">
          See My Work
        </a>
      </section>

      <section id="portfolio" className="portfolio">
        <h2>Featured Projects</h2>
        <p>Check out some of my recent work.</p>

        <div className="projects-container">
          <div className="project">
            <a
              href="https://github.com/notAnotherAverageJoe/Property-Preservation-Plus"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/PPP.png" alt="Property-Preservation-Plus" />
              <h3>Property-Preservation-Plus</h3>
              <p>
                Project Overview Property Preservation Plus is a full-featured
                property management application. It allows users to manage
                properties, tenants, maintenance requests, leases, and financial
                records. The system also includes role-based access control and
                integrates weather data from the OpenWeather API.
              </p>
              <h3>Click for source code!</h3>
            </a>
          </div>

          <div className="project">
            <a
              href="https://github.com/notAnotherAverageJoe/bit_buddy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/bb1.jpg" alt="Bit Buddy Project" />
              <h3>Bit Buddy</h3>
              <p>
                A Cryptocurrency platform that allows you to buy, sell and stake
                cryptocurrencies in an educational environment.<br></br>
                <strong>Features</strong>
                <br></br> User authentication and registration systems Dashboard
                to view user information and portfolio Real-time market data for
                Bitcoin and blockchain information Ability to buy and sell
                Bitcoin Transaction history tracking Staking calculator to
                estimate returns RESTful API for managing cryptocurrencies
                Crypto mining game
              </p>
              <h3>Click for source code!</h3>
            </a>
          </div>

          <div className="project">
            <a
              href="https://github.com/notAnotherAverageJoe/GG---GiggleGate-A-joke-paradise"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/gg.png" alt="GG giggle gate" />
              <h3>GG-Giggle Gate</h3>
              <p>
                HiSinatra is a lightweight web application built with the
                Sinatra framework. It features user authentication, joke
                categories fetched from an external API, and the ability to save
                and manage favorite jokes. The project uses ActiveRecord for
                database management and BCrypt for secure password storage.
              </p>
              <h3>Click for source code!</h3>
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Joseph Skokan</p>
      </footer>
    </div>
  );
}

export default Home;
