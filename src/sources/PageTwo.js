import "./PageTwo.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import circles from "../asset/circles.png";

export default function PageTwo() {
  const navigate = useNavigate();


  return (
    <div className="containerTwo">
      <div className="Explore">
        <h1 className="headerPageTwo">Explore my projects</h1>
        <div className="expAllButton" onClick={() => navigate("/works")}>
          <p>Explore All</p>
          <div className="arrowButton">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              width="25px"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="cardsPlace"></div>
      <img src={circles} className="Circles" alt="" />
    </div>
  );
}
