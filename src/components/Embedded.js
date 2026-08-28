import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import "./styles/Home.css";
import "./styles/Portfolio.css";

function Embedded() {
  const embedded = projects.filter((project) => project.category === "systems");

  return (
    <div className="page">
      <div className="wrap">
        <header className="work-intro">
          <p className="kicker">Systems</p>
          <h1 className="display">Low-level and embedded</h1>
          <p className="lede">
            C, C++, assembly, Rust, and Erlang — shells, emulators, RTOS
            simulations, and distributed services.
          </p>
          <div className="btn-row">
            <Link to="/portfolio" className="btn btn-ghost">
              Back to work
            </Link>
          </div>
        </header>
        <div className="project-grid">
          {embedded.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Embedded;
