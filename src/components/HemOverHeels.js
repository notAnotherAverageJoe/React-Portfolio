import React from "react";
import { featuredProject } from "../data/projects";
import PhoneMock from "./PhoneMock";
import "./styles/Home.css";
import "./styles/Portfolio.css";

function HemOverHeels() {
  return (
    <div className="page case-page">
      <div className="wrap">
        <p className="kicker">Case study · 2026</p>
        <h1 className="display">Hem Over Heels</h1>
        <p className="lede">{featuredProject.longDescription}</p>

        <div className="case-grid">
          <div>
            <dl className="case-facts">
              <div>
                <dt>Client</dt>
                <dd>{featuredProject.client}</dd>
              </div>
              <div>
                <dt>Role</dt>
                <dd>{featuredProject.role}</dd>
              </div>
              <div>
                <dt>Status</dt>
                <dd>Live on iOS and Android</dd>
              </div>
              <div>
                <dt>Company</dt>
                <dd>Tempest Labs LLC</dd>
              </div>
            </dl>

            <h2 className="display" style={{ fontSize: "2rem" }}>
              The problem
            </h2>
            <p className="muted">
              Hem Over Heels is a working shop, not a startup. Customers needed
              a simple way to book services, check on orders, and see what the
              team actually does — alterations, shoe repair, leather, embroidery,
              and sharpening — without relying only on phone calls.
            </p>

            <h2 className="display" style={{ fontSize: "2rem", marginTop: 32 }}>
              What shipped
            </h2>
            <ul className="featured-list">
              {featuredProject.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <p className="muted" style={{ marginTop: 24 }}>
              The app is listed under my developer account on both stores and
              is the official customer app for the Boynton Beach location. It is
              the kind of work I want more of: useful software for a real
              business, maintained after launch.
            </p>

            <div className="btn-row">
              {featuredProject.links.map((link) => (
                <a
                  key={link.label}
                  className="btn btn-ghost"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="case-visual featured-visual" style={{ borderRadius: 18 }}>
            <PhoneMock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HemOverHeels;
