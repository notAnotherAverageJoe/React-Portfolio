import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./styles/Portfolio.css";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Load and parse CSV file
    fetch("/data.csv")
      .then((response) => response.text())
      .then((data) => {
        Papa.parse(data, {
          header: true,
          delimiter: ";",
          complete: (result) => setProjects(result.data),
        });
      });
  }, []);

  return (
    <div className="portfolio">
      <h2>My Portfolio</h2>
      <p>Main project secion</p>
      <Link to="/embedded" className="link-boxv">
        <p>Low Level / Embedded Projects</p>
      </Link>{" "}
      <Link to="/datavisual" className="link-boxv">
        <p>Data Analytics / Data Engineering</p>
      </Link>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img
              src={`/images/${project.image}`}
              alt={project.title}
              className="project-image"
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
