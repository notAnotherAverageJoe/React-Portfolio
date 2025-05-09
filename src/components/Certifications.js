import React, { useEffect, useState } from "react";
import Papa from "papaparse";
import "./styles/Certification.css";

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);

  useEffect(() => {
    // Load and parse the CSV file
    fetch("/certifications.csv")
      .then((response) => response.text())
      .then((data) => {
        Papa.parse(data, {
          header: true,
          delimiter: ",",
          complete: (result) => setCertifications(result.data), // praesd data
        });
      });
  }, []);

  return (
    <div>
      {/* <h1>My Certifications</h1> */}
      <div className="course-grid">
        {certifications.map((course, index) => (
          <div key={index} className="course-card">
            <img
              src={`/images/${course.image}`}
              alt={course.title}
              className="course-image"
            />
            <h2>{course.title}</h2>
            <p>
              <strong>{course.institution}</strong> ({course.year})
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
