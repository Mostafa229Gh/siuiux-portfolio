import "./PageTwo.css";
import circles from './asset/circles.png';
import React from "react";
export default function PageTwo() {
    let componentArray = [
        <div key="example-key-1" className="Sample1" >First Sample</div>,
        <div key="example-key-2" className="Sample2" >Second Sample</div>,
        ];
  return (
    <div className="container">
      <div className="Explore">
        <h1 className="header">Explore my projects</h1>
        <div className="expAllButton">
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
      <div className="cards">
       <div className="eachCard">
        {componentArray}
       </div>
      </div>
      <div className="circlesContainer">
            <img src={circles} className="Circles"/>
      </div>
    </div>
  );
}
