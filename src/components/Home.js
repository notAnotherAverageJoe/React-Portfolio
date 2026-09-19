import React from "react";
import { Link } from "react-router-dom";
import {
  featuredProject,
  selectedProjects,
  bitBuddyProject,
} from "../data/projects";
import PhoneMock from "./PhoneMock";
import ProjectCard from "./ProjectCard";
import "./styles/Home.css";

const skills = [
  {
    title: "Languages",
    items: "JavaScript, TypeScript, Python, C, C++, SQL, Erlang, Rust",
  },
  {
    title: "Product",
    items: "React, mobile shipping, REST APIs, PostgreSQL, Node.js",
  },
  {
    title: "Systems",
    items: "Linux, Git, embedded C, distributed services, COBOL",
  },
  {
    title: "Practice",
    items: "Client delivery, UI polish, testing, documentation",
  },
];

function Home() {
  return (
    <div className="page">
      <div className="wrap">
        <section className="hero">
          <div>
            <p className="kicker">Software engineer · Tempest Labs</p>
            <h1 className="display hero-title">Joseph Skokan</h1>
            <p className="lede">
              I build production software for real businesses — customer-facing
              mobile apps, full-stack systems, and the operational tools that
              keep a shop running.
            </p>
            <div className="hero-meta">
              <span>West Palm Beach, Florida</span>
              <span>USAF Veteran</span>
              <span>Open to relocation</span>
            </div>
            <div className="btn-row">
              <Link to="/portfolio" className="btn btn-primary">
                View work
              </Link>
              <Link to="/contact" className="btn btn-ghost">
                Contact
              </Link>
            </div>
          </div>

          <aside className="hero-aside">
            <article className="card skill-block">
              <p className="kicker">Currently</p>
              <h3>Hem Over Heels</h3>
              <p>Official customer app for a Boynton Beach shop, live on the App Store and Google Play.</p>
            </article>
            <article className="card skill-block">
              <p className="kicker">Studio</p>
              <h3>Tempest Labs</h3>
              <p>Custom software for small businesses — shipping, not pitching.</p>
            </article>
            <article className="card skill-block">
              <p className="kicker">Background</p>
              <h3>USAF Veteran</h3>
              <p>Discipline from service, then software — Springboard, systems work, and client delivery.</p>
            </article>
          </aside>
        </section>

        <section className="featured">
          <div className="section-head">
            <div>
              <p className="kicker">Featured</p>
              <h2>A live product for a real shop</h2>
            </div>
            <Link to="/work/hem-over-heels" className="btn btn-ghost">
              Case study
            </Link>
          </div>

          <article className="card featured-card">
            <div className="featured-visual">
              <PhoneMock />
            </div>
            <div className="featured-copy">
              <p className="kicker">{featuredProject.tag}</p>
              <h3>{featuredProject.title}</h3>
              <p>{featuredProject.longDescription}</p>
              <ul className="featured-list">
                {featuredProject.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="btn-row">
                <Link to="/work/hem-over-heels" className="btn btn-primary">
                  Read the story
                </Link>
                <a
                  className="btn btn-ghost"
                  href={featuredProject.links[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  App Store
                </a>
              </div>
            </div>
          </article>
        </section>

        <section className="spotlight" aria-labelledby="bitbuddy-spotlight-title">
          <h2 className="sr-only">Also shipping</h2>
          <article className="card spotlight-card">
            <div className="spotlight-visual">
              <img
                src={`/images/${bitBuddyProject.image}`}
                alt="BitBuddy classroom hero"
              />
            </div>
            <div className="spotlight-copy">
              <p className="kicker">Also shipping</p>
              <h3 id="bitbuddy-spotlight-title">{bitBuddyProject.title}</h3>
              <p>{bitBuddyProject.description}</p>
              <p className="spotlight-note">
                A Tempest Labs owned product, not client work.
              </p>
              <div className="btn-row">
                <a
                  className="btn btn-primary"
                  href={bitBuddyProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open BitBuddy
                </a>
              </div>
            </div>
          </article>
        </section>

        <section className="selected">
          <div className="section-head">
            <div>
              <p className="kicker">Selected work</p>
              <h2>Applications and systems</h2>
            </div>
            <Link to="/portfolio" className="btn btn-ghost">
              All projects
            </Link>
          </div>
          <div className="project-grid">
            {selectedProjects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </section>

        <section className="skills">
          <div className="section-head">
            <div>
              <p className="kicker">Capabilities</p>
              <h2>What I work with</h2>
            </div>
          </div>
          <div className="skill-grid">
            {skills.map((skill) => (
              <article className="card skill-block" key={skill.title}>
                <h3>{skill.title}</h3>
                <p>{skill.items}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="card home-cta">
          <p className="kicker">Contact</p>
          <h2>Have a product that needs to ship?</h2>
          <p>
            I work with businesses that need custom software — and I am open to
            engineering roles that want someone who has already delivered to
            production.
          </p>
          <div className="btn-row">
            <Link to="/contact" className="btn btn-primary">
              Get in touch
            </Link>
            <a
              className="btn btn-ghost"
              href="https://www.linkedin.com/in/joseph-skokan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
