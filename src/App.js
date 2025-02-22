import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./sources/Home";
import Work from "./sources/Work";
import logo from "./asset/siuinx.svg";

function Header({ scrollToSection, homeRef, workRef, aboutMeRef, contactRef }) {
  const navigate = useNavigate();

  const handleHeaderClick = (ref, event) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        if (ref.current) {
          ref.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      scrollToSection(ref, event);
    }
  };

  return (
    <header>
      <div className="webName" onClick={(e) => handleHeaderClick(homeRef, e)}>
        <img id="logo" src={logo} alt="Logo" />
        <span>Sina Davari</span>
      </div>
      <div className="headerOption">
        <span data-section="work" onClick={(e) => handleHeaderClick(workRef, e)}>
          Work
        </span>
        <span data-section="aboutMe" onClick={(e) => handleHeaderClick(aboutMeRef, e)}>
          About me
        </span>
        <span>
          <a className="downloadResume" href="http://localhost:3000">
            Resume
          </a>
        </span>
        <span data-section="contact" onClick={(e) => handleHeaderClick(contactRef, e)}>
          Contact
        </span>
      </div>
    </header>
  );
}

function App() {
  const homeRef = React.useRef(null);
  const workRef = React.useRef(null);
  const aboutMeRef = React.useRef(null);
  const contactRef = React.useRef(null);

  const scrollToSection = (ref, event) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router>
      <Header
        scrollToSection={scrollToSection}
        homeRef={homeRef}
        workRef={workRef}
        aboutMeRef={aboutMeRef}
        contactRef={contactRef}
      />
      <Routes>
        <Route
          path="/"
          element={<Home homeRef={homeRef} workRef={workRef} aboutMeRef={aboutMeRef} contactRef={contactRef} />}
        />
        <Route path="/works" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;