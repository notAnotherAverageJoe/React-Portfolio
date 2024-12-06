import React, { useRef } from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";

function Home() {
  const audioRef = useRef(null); // Create a ref to hold the audio instance
  const isPlayingRef = useRef(false); // Track if the sound is already playing

  const playShakeSound = () => {
    if (audioRef.current && !isPlayingRef.current) {
      audioRef.current
        .play()
        .then(() => {
          // Set isPlayingRef to true after the play action completes
          isPlayingRef.current = true;
        })
        .catch((error) => {
          // Handle any errors related to the play attempt
          console.error("Audio play error:", error);
        });
    }
  };

  const stopShakeSound = () => {
    if (audioRef.current && isPlayingRef.current) {
      audioRef.current.pause(); // Stop the sound
      audioRef.current.currentTime = 0; // Reset the sound to the start
      isPlayingRef.current = false; // Mark the sound as stopped
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1>Greetings, Traveler! Explore my works!</h1>
        <h4>Location: 🌊West Palm Beach, Florida🌴</h4>
        <p>Software engineer skilled in React, JavaScript, Python, and more.</p>
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
          <div
            className="project"
            onMouseOver={playShakeSound} // Play sound on mouse over
            onMouseOut={stopShakeSound} // Stop sound on mouse out
          >
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
              <h3>🔍</h3>
            </a>
          </div>

          {/* Project 2 */}
          <div
            className="project"
            onMouseOver={playShakeSound} // Play sound on mouse over
            onMouseOut={stopShakeSound} // Stop sound on mouse out
          >
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
              <h3>🔍</h3>
            </a>
          </div>

          {/* Project 3 */}
          <div
            className="project"
            onMouseOver={playShakeSound} // Play sound on mouse over
            onMouseOut={stopShakeSound} // Stop sound on mouse out
          >
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
              <h3>🔍</h3>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Joseph Skokan</p>
      </footer>

      {/* Audio element, hidden */}
      <audio ref={audioRef} src={process.env.PUBLIC_URL + "/assets/woo.mp3"} />
    </div>
  );
}

export default Home;
