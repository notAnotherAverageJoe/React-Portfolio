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
      <p>project's section</p>
      <Link to="/embedded" className="xtraBTN">
        Low Level / Embedded Projects
      </Link>
      <Link to="/datavisual" className="xtraBTN">
        Data Analytics / Data Engineering Projects
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
