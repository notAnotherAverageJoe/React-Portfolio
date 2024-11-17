// src/Home.js
import React from "react";
import "./Home.css"; // Optional: for styling

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
              href="https://github.com/notAnotherAverageJoe/bit_buddy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/images/bitbuddy.png" alt="Bit Buddy Project" />
              <h3>Bit Buddy</h3>
              <p>
                A Cryptocurrency platform that allows you to buy, sell and stake
                cryptocurrencies in an educational environment.
              </p>
            </a>
          </div>

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
                cryptocurrencies in an educational environment.
              </p>
            </a>
          </div>

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
                cryptocurrencies in an educational environment.
              </p>
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
