import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./Portfolio.css";

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
      <h2>Joseph Skokans Portfolio</h2>
      <p>Here are some of the projects I've worked on:</p>
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
