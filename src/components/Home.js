import React, { useState, useEffect } from "react";
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
  const [typedText, setTypedText] = useState("");
  const fullText = "Joseph Skokan";
  const typingSpeed = 150; // Speed in milliseconds

  useEffect(() => {
    let i = 0;
    setTypedText(""); // Ensure it starts empty

    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText((prev) => fullText.slice(0, i + 1)); // Correctly slice text
        i++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

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
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio">
        <h2>WHOAMI?</h2>
        <p className=" type-me">Hi, my name is</p>
        <h1 id="myName">{typedText}</h1>
        <div className="projects-container">
          <div>
            <h4>Location: 🌊West Palm Beach, Florida🌴</h4>
            <h4>Open for relocation</h4>
            <p>
              Software engineer skilled in Fullstack development & distributed
              systems.
            </p>
            <Link to="/portfolio" className="button-main">
              See My Work
            </Link>
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
        <p>&copy; 2025 Joseph Skokan</p>
      </footer>
    </div>
  );
};

export default Home;
