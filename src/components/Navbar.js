import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styles/Navbar.css";

const links = [
  { to: "/portfolio", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/Certifications", label: "Certifications" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={close}>
          <span className="brand-mark">JS</span>
          <span>
            <span className="brand-name">Joseph Skokan</span>
            <span className="brand-role">Software Engineer</span>
          </span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>

        <nav className={`nav-links${open ? " open" : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              onClick={close}
            >
              {link.label}
            </NavLink>
          ))}
          <a
            className="btn btn-primary nav-cta"
            href={`${process.env.PUBLIC_URL}/assets/resume.pdf`}
            download
            onClick={close}
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
