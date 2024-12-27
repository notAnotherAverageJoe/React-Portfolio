import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import Embedded from "./components/Embedded";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/Certifications" element={<Certifications />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/embedded" element={<Embedded />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
