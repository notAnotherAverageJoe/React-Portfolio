import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./styles/Home.css";
import "./styles/Portfolio.css";

function DataVis() {
  const dataProjects = projects.filter(
    (project) => project.category === "data"
  );

  return (
    <div className="page">
      <div className="wrap">
        <header className="work-intro">
          <p className="kicker">Data</p>
          <h1 className="display">Analytics and engineering</h1>
          <p className="lede">
            SQL systems, dashboards, and document generation — the reporting
            layer around the applications.
          </p>
          <div className="btn-row">
            <Link to="/portfolio" className="btn btn-ghost">
              Back to work
            </Link>
          </div>
        </header>
        <div className="project-grid">
          {dataProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default DataVis;
