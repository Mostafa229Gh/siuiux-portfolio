import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./sources/Home";
import Work from "./sources/Work";
import logo from "./asset/siuinx.svg";

function Header({ scrollToSection, homeRef, workRef, aboutMeRef, contactRef, resume }) {
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
    <header className={`${window.location.pathname === "/works" ? "unFinxed" : ""}`}>
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
          <a className="downloadResume" href={resume}>
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
  const cardRef = React.useRef(null);
  const aboutMeRef = React.useRef(null);
  const contactRef = React.useRef(null);
  const [resume, setResume] = useState("");

  useEffect(() => {
    const fetchResumeData = async () => {
      const response = await axios.get(process.env.REACT_APP_API_RESUME_URL, {
        headers: {
          Authorization: `Token ${process.env.REACT_APP_API_KEY}`,
        },
      });
      setResume(response.data[0].resume);
    };

    fetchResumeData();
  }, []);

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
        resume={resume}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              homeRef={homeRef}
              workRef={workRef}
              cardRef={cardRef}
              aboutMeRef={aboutMeRef}
              contactRef={contactRef}
              resume={resume}/>
          }
        />
        <Route path="/works" element={<Work />} />
      </Routes>
    </Router>
  );
}

export default App;
