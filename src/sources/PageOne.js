import "./PageOne.css";
import React, { useEffect, useState } from "react";
import hand from "../asset/hand.svg";
import mouse from "../asset/mouse.svg";

export default function PageOne() {
  const expertiseList = [
    "a User interface",
    "a User experience",
    "a web & application",
    "a Graphic",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % expertiseList.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [expertiseList.length]);

  return (
    <div className="container">
      <div className="hand">
        <img src={hand} alt="" />
      </div>
      <div className="title">
        <h1>Hi there!</h1>
        <div>
          <h1> I am</h1>
          <h1 id="sinaDavir">Sina Davari</h1>
        </div>
      </div>

      <div className="expertise-container">
        <div className="line"></div>

        <div className="expertise-wrapper">
          {expertiseList.map((item, index) => (
            <h1
              key={index}
              className={`expertise ${index === currentIndex ? "visible" : ""}`}
            >
              {item}
            </h1>
          ))}
        </div>

        <div className="line"></div>
      </div>

      <h1>Designer</h1>
      <div className="pageOneBottom">
        <svg
          width="100%"
          height="100"
          viewBox="0 0 1920 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="curlyLine"
        >
          <path
            opacity="0.4"
            d="M0 3.75227C119.541 -23.5442 311.285 163.317 976.473 75.1841C1654.21 -14.6107 1720.32 31.0488 1920 53.8786"
            stroke="url(#paint0_linear_33_354)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_33_354"
              x1="0"
              y1="50"
              x2="1920"
              y2="50"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#323232" />
              <stop offset="0.500102" stop-color="#F2F2F2" />
              <stop offset="1" stop-color="#323232" />
            </linearGradient>
          </defs>
        </svg>

        <div className="mouse">
          <img src={mouse} alt="" />
        </div>

        <p>Get to know me more</p>
      </div>
    </div>
  );
}
