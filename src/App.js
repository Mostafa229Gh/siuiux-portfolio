import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import logo from "./asset/siuinx.svg";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";

function App() {
  const homeRef = useRef(null);
  const workRef = useRef(null);
  const aboutMeRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (ref, event) => {
    ref.current.scrollIntoView({ behavior: "smooth" });

    document.querySelectorAll(".headerOption span").forEach((item) => {
      item.style.fontWeight = "normal";
      item.style.color = "#1e1e1e";
    });

    if (ref !== homeRef) {
      event.target.style.fontWeight = "bold";
      event.target.style.color = "#fca311";
    }
  };

  useEffect(() => {
    const sections = [
      { ref: homeRef, id: "home" },
      { ref: workRef, id: "work" },
      { ref: aboutMeRef, id: "aboutMe" },
      { ref: resumeRef, id: "resume" },
      { ref: contactRef, id: "contact" },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const section = sections.find(
              (section) => section.ref.current === entry.target
            );
            if (section) {
              setActiveSection(section.id);
            }
          }
        });
      },
      { threshold: 0.6 } // Adjust as needed to detect when 60% of the section is visible
    );

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, []);

  useEffect(() => {
    document.querySelectorAll(".headerOption span").forEach((item) => {
      item.style.fontWeight = "normal";
      item.style.color = "#1e1e1e";
    });

    const activeElement = document.querySelector(
      `.headerOption span[data-section="${activeSection}"]`
    );

    if (activeElement) {
      activeElement.style.fontWeight = "bold";
      activeElement.style.color = "#fca311";
    }
  }, [activeSection]);

  return (
    <div className="App">
      <header>
        <div className="webName" onClick={(e) => scrollToSection(homeRef, e)}>
          <img id="logo" src={logo} alt="Logo" />
          <span>Sina Davari</span>
        </div>
        <div className="headerOption">
          <span data-section="work" onClick={(e) => scrollToSection(workRef, e)} >
            Work
          </span>
          <span data-section="aboutMe" onClick={(e) => scrollToSection(aboutMeRef, e)} >
            About me
          </span>
          <span data-section="resume" onClick={(e) => scrollToSection(resumeRef, e)} >
            Resume
          </span>
          <span data-section="contact" onClick={(e) => scrollToSection(contactRef, e)} >
            Contact
          </span>
        </div>
      </header>

      <section ref={homeRef}>
        <PageOne />
      </section>

      <section ref={workRef}>
        <PageTwo />
      </section>

      <section ref={aboutMeRef}>
        <PageThree />
      </section>
      
    </div>
  );
}

export default App;
