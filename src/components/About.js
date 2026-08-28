import React from "react";
import { Link } from "react-router-dom";
import "./styles/About.css";

const experience = [
  {
    role: "Software Engineer",
    org: "Tempest Labs LLC",
    time: "2026 — Present",
    detail:
      "Custom software for small businesses: mobile products, internal tools, and customer experience work. Lead engineer on the Hem Over Heels app.",
  },
  {
    role: "Software Engineer",
    org: "Outlier",
    time: "2025 — Present",
    detail:
      "Front-end quality work in TypeScript and Next.js, plus prompt engineering used to evaluate design and code quality.",
  },
  {
    role: "Software Engineering",
    org: "Springboard",
    time: "2024",
    detail:
      "Career-track program covering full-stack development, testing, Git, and shipping complete applications.",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: "JavaScript, TypeScript, Python, C, C++, SQL, Erlang, Rust, COBOL",
  },
  {
    title: "Web & data",
    items: "React, Node.js, Express, Flask, PostgreSQL, REST APIs, Dash",
  },
  {
    title: "Systems",
    items: "Linux, Git, embedded C, assembly, RTOS, distributed Erlang",
  },
];

function About() {
  return (
    <div className="page">
      <div className="wrap">
        <header className="about-hero">
          <p className="kicker">About</p>
          <h1 className="display">Engineer first. Veteran always.</h1>
        </header>

        <div className="about-grid">
          <div className="about-copy">
            <p>
              I am a software engineer in West Palm Beach. I build software
              people actually use — not just portfolio demos. Through Tempest
              Labs I design and ship products for real businesses.
            </p>
            <p>
              The clearest example is{" "}
              <Link to="/work/hem-over-heels">Hem Over Heels</Link>: a live iOS
              and Android app for a Boynton Beach tailoring and repair shop that
              has been serving customers since 2009. Customers book services,
              track orders, and browse the shop from their phone.
            </p>
            <p>
              I still like the lower levels of the stack — C, shells, distributed
              Erlang — because I want to understand how things run, not only how
              they look. I am a United States Air Force veteran, and I am open
              to relocation.
            </p>
          </div>

          <div className="timeline">
            {experience.map((item) => (
              <article key={item.org}>
                <p className="kicker">{item.time}</p>
                <h3>
                  {item.role} · {item.org}
                </h3>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="skill-groups">
          {skillGroups.map((group) => (
            <article className="card skill-block" key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.items}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
