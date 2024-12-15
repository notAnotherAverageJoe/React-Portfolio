import React, { useRef } from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const audioRef = useRef(null);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="rubik-moonrocks-regular">Greetings, Traveler!</h1>
        <span className="material-symbols-outlined">home</span>
        <span className="material-symbols-outlined">home</span>
        <span className="material-symbols-outlined">home</span>
        <div className="dragon-container">
          🐉
          <span className="fire">🔥</span>
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
            {/* Download Resume Section */}
            <section className="download-resume">
              <a
                href={process.env.PUBLIC_URL + "/assets/resume.pdf"}
                download
                className="button-main"
              >
                Download My Resume
              </a>
            </section>
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
};

export default Home;
