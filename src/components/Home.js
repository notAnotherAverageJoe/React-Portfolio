import React, { useRef } from "react";
import "./styles/Home.css";
import { Link } from "react-router-dom";

document.addEventListener("mousemove", (event) => {
  const eyes = document.querySelectorAll(".eye");

  eyes.forEach((eye) => {
    const pupil = eye.querySelector(".pupil");
    const rect = eye.getBoundingClientRect();

    const eyeX = rect.left + rect.width / 2;
    const eyeY = rect.top + rect.height / 2;

    const angle = Math.atan2(event.clientY - eyeY, event.clientX - eyeX);

    const pupilDistance = rect.width / 4; // Maximum distance the pupil can move
    const pupilX = Math.cos(angle) * pupilDistance;
    const pupilY = Math.sin(angle) * pupilDistance;

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});

const Home = () => {
  const audioRef = useRef(null);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <h1 className="rubik-moonrocks-regular">Greetings, Traveler!</h1>
        <div class="eye-container">
          <div class="eye">
            <div class="pupil"></div>
          </div>
          <div class="eye">
            <div class="pupil"></div>
          </div>
        </div>

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
              Software engineer skilled in React, JavaScript, Python, and low
              level languages.
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
        <div class="grid">
          <div class="left-side">
            <h2>Low Level Programming</h2>
            <hr></hr>

            <Link to="/embedded" className="link-box">
              <p>ASM Emulator - Virtual CPU</p>
            </Link>
            <Link to="/embedded" className="link-box">
              <p>🚦Traffic Lights - Real-Time Operating System🚦</p>
            </Link>
          </div>
          <div class="right-side">
            <h2>Data Engineering & Analysis Projects</h2>
            <hr></hr>

            <Link to="/datavisual" className="link-boxv">
              <p>SQL-Financial Transactions System 💳</p>
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
};

export default Home;
