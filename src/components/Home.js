// src/Home.js
import React from "react";
import "./Home.css"; // Optional: for styling
import "./Portfolio.css";

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I'm a passionate developer skilled in React, JavaScript, Python and
          more.
        </p>
        <a href="#portfolio" className="button-main">
          See My Work
        </a>
      </section>

      <section id="portfolio" className="portfolio">
        <h2>Featured Projects</h2>
        <p>Check out some of my recent work.</p>

        <div className="project">
          <a
            href="https://github.com/notAnotherAverageJoe/bit_buddy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="/images/bitbuddy.png" alt="Bit Buddy Project" />
            <h3>Bit Buddy</h3>
            <p>
              A Cryptocurrency platform that allows you to buy, sell and stake
              cryptocurrencies in a educational environment.
            </p>
          </a>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <p>A brief biography or overview of your skills and experience.</p>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <p>
          You can reach me at:{" "}
          <a href="mailto:joeskokan20@gmail.com">joeskokan20@gmail.com</a>
        </p>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Joseph Skokan</p>
      </footer>
    </div>
  );
}

export default Home;
