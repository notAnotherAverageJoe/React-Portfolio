import React from "react";
import { certifications } from "../data/projects";
import "./styles/Certification.css";

function Certifications() {
  return (
    <div className="page">
      <div className="wrap">
        <header className="certs-intro">
          <p className="kicker">Credentials</p>
          <h1 className="display">Certifications</h1>
          <p className="lede">
            Formal coursework across software engineering, systems languages,
            and embedded development.
          </p>
        </header>

        <div className="course-grid">
          {certifications.map((course) => (
            <article className="card course-card" key={course.title}>
              <img src={`/images/${course.image}`} alt="" />
              <h2>{course.title}</h2>
              <p>
                {course.institution} · {course.year}
              </p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Certifications;
