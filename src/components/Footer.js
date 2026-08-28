import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-inner">
        <p>© {new Date().getFullYear()} Joseph Skokan</p>
        <div className="footer-links">
          <a
            href="https://github.com/notAnotherAverageJoe"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-skokan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
