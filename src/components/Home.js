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
        <h1>Greetings, Traveler!</h1>
        <div class="dragon-container">
          🐉
          <span class="fire">🔥</span>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <h2>WHOAMI?</h2>
        {/* <p>Check out some of my recent work.</p> */}

        <div className="projects-container">
          {/* Project 1 */}
          <div>
            <h3>Joseph Skokan</h3>
            <h4>Location: 🌊West Palm Beach, Florida🌴</h4>
            <p>
              Software engineer skilled in React, JavaScript, Python, and more.
            </p>
            <Link to="/portfolio" className="button-main">
              See My Work
            </Link>
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
