import React from "react";
import "./styles/Contact.css";

const contacts = [
  {
    label: "Email",
    title: "joeskokan20@gmail.com",
    href: "mailto:joeskokan20@gmail.com",
    note: "Best way to reach me.",
  },
  {
    label: "LinkedIn",
    title: "joseph-skokan",
    href: "https://www.linkedin.com/in/joseph-skokan/",
    note: "Work history and recommendations.",
  },
  {
    label: "GitHub",
    title: "notAnotherAverageJoe",
    href: "https://github.com/notAnotherAverageJoe",
    note: "Source for selected projects.",
  },
];

function Contact() {
  return (
    <div className="page contact-page">
      <div className="wrap">
        <p className="kicker">Contact</p>
        <h1 className="display">Let’s talk.</h1>
        <p className="lede">
          I am available for engineering roles and for custom software through
          Tempest Labs. West Palm Beach, Florida — open to relocation.
        </p>

        <div className="contact-grid">
          {contacts.map((item) => (
            <a
              key={item.label}
              className="card contact-item"
              href={item.href}
              {...(item.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              <p className="kicker">{item.label}</p>
              <h2>{item.title}</h2>
              <p>{item.note}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
