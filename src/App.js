import "./App.css";
import React, { useRef } from "react";
import logo from "./asset/siuinx.svg";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

function App() {
  const homeRef = useRef(null);
  const workRef = useRef(null);
  const aboutMeRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref, event) => {
    ref.current.scrollIntoView({ behavior: "smooth" });

    document.querySelectorAll(".headerOption span").forEach((item) => {
      item.style.fontWeight = "normal";
      item.style.color = "#1e1e1e";
    });

    if (ref != homeRef) {
      event.target.style.fontWeight = "bold";
      event.target.style.color = "#fca311";
    }
  };

  return (
    <div className="App">
      <header>
        <div className="webName" onClick={(e) => scrollToSection(homeRef, e)}>
          <img id="logo" src={logo} alt="Logo" />
          <span>Sina Davari</span>
        </div>
        <div className="headerOption">
          <span onClick={(e) => scrollToSection(workRef, e)}>Work</span>
          <span onClick={(e) => scrollToSection(aboutMeRef, e)}>About me</span>
          <span onClick={(e) => scrollToSection(resumeRef, e)}>Resume</span>
          <span onClick={(e) => scrollToSection(contactRef, e)}>Contact</span>
        </div>
      </header>

      <section ref={homeRef}>
        <PageOne />
      </section>

      <section ref={workRef}>
        <PageTwo />
      </section>
    </div>
  );
}

export default App;
