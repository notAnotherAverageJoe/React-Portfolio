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
                property management application.
              </p>
              <h3>Source Code</h3>
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
              </p>
              <h3>Source Code</h3>
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
                src="/images/SQLfinance.png"
                alt="Sql finance"
                className="project-image"
              />
              <h3>SQL Financial System</h3>
              <p>
                Welcome to the Financial Transactions System! This project is a
                robust and efficient solution for managing financial
                transactions, deposits, withdrawals, transfers, and interest
                calculations.
              </p>
              <h3>Source Code</h3>
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
