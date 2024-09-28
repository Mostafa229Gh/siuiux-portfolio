import "./App.css";
import React from "react";
import logo from "./asset/siuinx.svg";
import PageOne from "./PageOne";
import PageTwo from "./PageTwo";

function App() {
  return (
    <div className="App">
      <header>
        <div className="webName">
          <img id="logo" src={logo} alt="Logo" />
          <span>Sina Davari</span>
        </div>
        <div className="headerOption">
          <span>Work</span>
          <span>About me</span>
          <span>Resume</span>
          <span>Contact</span>
        </div>
      </header>

      <PageOne />
      <PageTwo />
    </div>
  );
}

export default App;
