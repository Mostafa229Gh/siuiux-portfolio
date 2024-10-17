import "./App.css";
import React, { useRef, useEffect, useState } from "react";
import logo from "./asset/siuinx.svg";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import Menu from "./Menu";

function App() {
  const homeRef = useRef(null);
  const workRef = useRef(null);
  const aboutMeRef = useRef(null);
  const contactRef = useRef(null);

  const [activeSection, setActiveSection] = useState("home");
  const [menuText, setMenuText] = useState("Home");

  const resetHeaderStyles = () => {
    document.querySelectorAll(".headerOption span").forEach((item) => {
      item.style.fontWeight = "normal";
      item.style.color = "#1e1e1e";
    });
  };

  const applyActiveStyles = (
    element,
    color = "#fca311",
    fontWeight = "bold"
  ) => {
    if (element) {
      element.style.fontWeight = fontWeight;
      element.style.color = color;
    }
  };

  const scrollToSection = (ref, event) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
    resetHeaderStyles();
    if (ref !== homeRef) {
      applyActiveStyles(event.target);
    }
  };

  useEffect(() => {
    const sections = [
      { ref: homeRef, id: "home", name: "Home" },
      { ref: workRef, id: "work", name: "Work" },
      { ref: aboutMeRef, id: "aboutMe", name: "About Me" },
      { ref: contactRef, id: "contact", name: "Contact" },
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
              setMenuText(section.name);  // Update menu text here
            }
          }
        });
      },
      { threshold: 0.6 }
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
    resetHeaderStyles();

    const activeElement = document.querySelector(
      `.headerOption span[data-section="${activeSection}"]`
    );

    const webNameText = document.querySelector(".webName span");
    const logo = document.getElementById("logo");

    if (activeSection === "aboutMe") {
      document.querySelectorAll(".headerOption span").forEach((item) => {
        item.style.color = "#ffffff";
      });
      applyActiveStyles(activeElement);
      if (webNameText && logo) {
        webNameText.style.color = "#ffffff";
        logo.style.filter = "invert(1)";
      }
    } else {
      applyActiveStyles(activeElement);
      if (webNameText && logo) {
        webNameText.style.color = "#1e1e1e";
        logo.style.filter = "invert(0)";
      }
    }
  }, [activeSection]);

  //-- Updated wheel navigation logic
  useEffect(() => {
    let currentSection = 0;
    const allSections = document.querySelectorAll("section");
    const totalSections = allSections.length;
    let isScrolling = false;

    function scrollToSectionWheel(index) {
      if (index >= 0 && index < totalSections) {
        isScrolling = true;
        allSections[index].scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
          isScrolling = false;
        }, 200);
      }
    }

    const handleWheel = (event) => {
      if (isScrolling) return;

      if (event.deltaY > 0 && currentSection < totalSections - 1) {
        currentSection++;
        scrollToSectionWheel(currentSection);
      } else if (event.deltaY < 0 && currentSection > 0) {
        currentSection--;
        scrollToSectionWheel(currentSection);
      }
    };

    window.addEventListener("wheel", handleWheel);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentSection = Array.from(allSections).indexOf(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    allSections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("wheel", handleWheel);
      allSections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="App">
      <header>
        <div className="webName" onClick={(e) => scrollToSection(homeRef, e)}>
          <img id="logo" src={logo} alt="Logo" />
          <span>Sina Davari</span>
        </div>
        <div className="headerOption">
          <span
            data-section="work"
            onClick={(e) => scrollToSection(workRef, e)}
          >
            Work
          </span>
          <span
            data-section="aboutMe"
            onClick={(e) => scrollToSection(aboutMeRef, e)}
          >
            About me
          </span>
          <span>
            <a className="downloadResume" href="http://localhost:3000">
              Resume
            </a>
          </span>
          <span
            data-section="contact"
            onClick={(e) => scrollToSection(contactRef, e)}
          >
            Contact
          </span>
        </div>
        <div className="Menu">
          <p>{menuText}</p> {/* Display dynamic text here */}
          <Menu/>
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

      <section ref={contactRef}>
        <PageFour />
      </section>
    </div>
  );
}

export default App;
