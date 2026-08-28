import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { featuredProject, projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import PhoneMock from "./PhoneMock";
import "./styles/Home.css";
import "./styles/Portfolio.css";

const filters = [
  { id: "all", label: "All" },
  { id: "apps", label: "Applications" },
  { id: "systems", label: "Systems" },
  { id: "data", label: "Data" },
];

function Portfolio() {
  const [filter, setFilter] = useState("all");

  const visible = useMemo(
    () =>
      projects.filter((project) => {
        if (project.category === "featured") return false;
        return filter === "all" || project.category === filter;
      }),
    [filter]
  );

  return (
    <div className="page">
      <div className="wrap">
        <header className="work-intro">
          <p className="kicker">Work</p>
          <h1 className="display">Selected projects</h1>
          <p className="lede">
            Production work first, then the systems and applications behind it.
            The Hem Over Heels app is the current flagship — a live product for
            a real Florida business.
          </p>
        </header>

        <article className="card featured-card work-featured">
          <div className="featured-visual">
            <PhoneMock />
          </div>
          <div className="featured-copy">
            <p className="kicker">{featuredProject.tag}</p>
            <h3>{featuredProject.title}</h3>
            <p>{featuredProject.longDescription}</p>
            <div className="btn-row">
              <Link to="/work/hem-over-heels" className="btn btn-primary">
                Case study
              </Link>
              <a
                className="btn btn-ghost"
                href={featuredProject.links[1].href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Play
              </a>
            </div>
          </div>
        </article>

        <div className="filters" role="tablist" aria-label="Project filters">
          {filters.map((item) => (
            <button
              key={item.id}
              type="button"
              className={`filter-btn${filter === item.id ? " active" : ""}`}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="project-grid">
          {visible.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
