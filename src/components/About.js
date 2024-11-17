import React, { useState } from "react";
import Confetti from "react-confetti";
import "./About.css";

function About() {
  const [showConfetti, setShowConfetti] = useState(false);

  // Function to handle mouse movement and set confetti state
  const handleMouseMove = (event) => {
    const threshold = 300; // Stop confetti after this many pixels (adjust as needed)
    if (event.clientY <= threshold) {
      setShowConfetti(true);
    } else {
      setShowConfetti(false);
    }
    <Confetti
      numberOfPieces={150}
      gravity={0.2}
      colors={["#a6c1ee", "#ffb6c1", "#fdfd96", "#c3fdb8"]}
    />;
  };

  return (
    <div className="about-page-container" onMouseMove={handleMouseMove}>
      {showConfetti && <Confetti />}
      <h1>About Me!</h1>
      <p>
        As a proud veteran and dedicated junior software engineer, I bring a
        unique blend of discipline, critical thinking, and problem-solving
        skills to every project I undertake. My journey has equipped me with a
        solid foundation in various programming languages, including Python,
        Rust, and JavaScript, and a passion for continuous learning and
        innovation.
      </p>
      <br />
      <p>
        <strong>Project Highlight:</strong> BitBuddy Cryptocurrency Platform
        BitBuddy is a cryptocurrency platform I developed using Flask, enabling
        users to buy, sell, and stake cryptocurrencies while providing real-time
        market data. This project showcases my skills in both frontend and
        backend development, as well as my ability to integrate external APIs
        for real-time data retrieval.
      </p>
      <p>
        <strong>Key Features:</strong> User authentication and portfolio
        management Real-time market data integration Cryptocurrency transactions
        and staking calculator RESTful API for cryptocurrency management Crypto
        mining game for user engagement Technologies Used:
      </p>
      <p>
        Flask, SQLAlchemy, PostgreSQL HTML, CSS, JavaScript External APIs for
        market data Git, Linux, CMD.
        <br />
        <strong>
          <em>Technical Skills Programming Languages:</em>
        </strong>
        <ul>
          <li>Python</li>
          <li>JavaScript</li>
          <li>Python</li>
          <li>HTML</li>
          <li>Ruby</li>
          <li>CSS</li>
          <li>Flask</li>
          <li>SQLAlchemy</li>
          <li>SQL</li>
          <li>Rust</li>
          <li>PostgreSQL</li>
          <li>mySQL</li>
        </ul>
        <strong>Tools:</strong> Git, Linux, Command Line Software Development:
        Data structures, algorithms, debugging, testing
        <strong>
          {" "}
          Soft Skills
          <br />
        </strong>
        Collaboration and teamwork Effective communication Problem-solving and
        critical thinking Time management Attention to detail Adaptability and
        creativity
      </p>
      <p>
        <strong>veteran</strong> As a Veteran, I have honed my skills in
        discipline, leadership, and adaptability, which I now apply to my career
        in software engineering. I am eager to bring my diverse background and
        technical expertise to a dynamic development team, contributing to
        innovative projects and continuously advancing my skills in the field.
      </p>
    </div>
  );
}

export default About;
