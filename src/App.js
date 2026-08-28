import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Embedded from "./components/Embedded";
import DataVisual from "./components/DataVis";
import HemOverHeels from "./components/HemOverHeels";
import "./App.css";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/work/hem-over-heels" element={<HemOverHeels />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/embedded" element={<Embedded />} />
          <Route path="/datavisual" element={<DataVisual />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
