import "./PageTwo.css";
import circles from "../asset/circles.png";
import Checked from "../asset/Checked.png";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function PageTwo() {
  const navigate = useNavigate();
  // Mock data to simulate API response
  const mockData = [
    {
      id: 1,
      title: "Almas Sazan (portfolio)",
      description:
        "Designing the user interface of a corporate portfolio in the field of construction in order to introduce the company, display engineers' resumes, display work samples, communicate with the employer and place orders.",
      features: ["In both English and Persian languages", "Full responsive", "Three responsive"],
      images: ["./Test.png", "./Test.png"],
      link: "http://localhost:3000",
    },
    {
      id: 2,
      title: "Project Two",
      description: "Description for project two.",
      features: ["Feature one for project two", "Feature two for project two"],
      images: ["./Test.png", "./Test.png"],
      link: "http://localhost:3000",
    },
    {
      id: 3,
      title: "Project Three",
      description: "Description for project three.",
      features: [
        "Feature one for project three",
        "Feature two for project three",
      ],
      images: ["./Test.png", "./Test.png"],
      link: "http://localhost:3000",
    },
    {
      id: 4,
      title: "Project Four",
      description: "Description for project four.",
      features: [
        "Feature one for project four",
        "Feature two for project four",
      ],
      images: ["./Test.png", "./Test.png"],
      link: "http://localhost:3000",
    },
  ];

  const [projects, setProjects] = useState([]);

  // Simulate API call with useEffect
  useEffect(() => {
    // Replace this with actual API call later
    setProjects(mockData);
  }, []);

  return (
    <div className="containerTwo">
      <div className="Explore">
        <h1 className="header">Explore my projects</h1>
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
      <div className="cards">
        {projects.map((project) => (
          <div key={project.id} className="eachCard">
            <div className="CardsInfo">
              <div className="InfoDefine">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div>
                {project.features.map((feature, index) => (
                  <div key={index} className="CardsInfoFeature">
                    <img src={Checked} alt="-" />
                    <p>{feature}</p>
                  </div>
                ))}
              </div>
              <a href={project.link}>
                View project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="20px"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>
            <div className="cardsImage">
              {project.images.map((image, index) => (
                <div
                  key={index}
                  className="ImageCard"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <img src={circles} className="Circles" alt="-" />
    </div>
  );
}
