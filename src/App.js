import "./App.css";
import React, { useRef } from "react";
import logo from "./asset/siuinx.svg";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

function App() {
  
  const workRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App">
      <header>
        <div className="webName">
          <img id="logo" src={logo} alt="Logo" />
          <span>Sina Davari</span>
        </div>
        <div className="headerOption">
          <span onClick={() => scrollToSection(workRef)}>Work</span>
          <span>About me</span>
          <span>Resume</span>
          <span>Contact</span>
        </div>
      </header>

      <PageOne />

      <section ref={workRef}>
        <PageTwo />
      </section>

    </div>
  );
}

export default App;
