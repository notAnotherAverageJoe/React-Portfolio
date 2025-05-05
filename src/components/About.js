import React, { useState } from "react";
import "./styles/About.css";

function About() {
  return (
    <div className="about-page-container">
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
        <ul class="no-dot">
          <li>Python</li>
          <li>JavaScript</li>
          <li>C & C++</li>
          <li>ASM 86/64 AT&T / Intel Syntax</li>
          <li>Erlang</li>
          <li>SQL</li>
          <li>COBOL</li>
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
        <strong>Veteran</strong> As a Veteran, I have honed my skills in
        discipline, leadership, and adaptability, which I now apply to my career
        in software engineering. I am eager to bring my diverse background and
        technical expertise to a dynamic development team, contributing to
        innovative projects and continuously advancing my skills in the field.
      </p>
    </div>
  );
}

export default About;
