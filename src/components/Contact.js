import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <p>
        You can reach me at:{" "}
        <a href="mailto:joeskokan20@gmail.com">joeskokan20@gmail.com</a>
      </p>
      <p>
        <strong>Phone number:</strong> 571-274-1493
      </p>

      <div className="social-links">
        <a
          href="https://github.com/notAnotherAverageJoe"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="social-icon"
        >
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/joseph-skokan/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn Profile"
          className="social-icon"
        >
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default Contact;
