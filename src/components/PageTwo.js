import "./PageTwo.css";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchProjects } from "./api";
import Loading from "./Loading";
import Checked from "../asset/Checked.png";
// import circles from "../asset/circles.png";

export default function PageTwo({ isMobile }) {
  const navigate = useNavigate();
  const [isFixed, setIsFixed] = useState(false);

  const [mainPageProjects, setMainPageProjects] = useState([]);
  const [currentProjectNum, setCurrentProjectNum] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isMobile) {
      const loadData = async () => {
        const { data, loading, error } = await fetchProjects();
        if (error) {
          setError(error);
        } else {
          const filteredData = data.filter(
            (project) => project.category.name === "Main Page"
          );
          setMainPageProjects(filteredData);
        }
        setLoading(loading);
      };
      loadData();
    }
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) {
      const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const start = window.innerHeight * 1.2;
        const end = window.innerHeight * 3.3;

        if (scrollPosition >= start && scrollPosition <= end) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [isMobile]);

  const handlePrev = () => {
    setCurrentProjectNum((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleNext = () => {
    setCurrentProjectNum((prev) =>
      prev < mainPageProjects.length - 1 ? prev + 1 : prev
    );
  };

  if (isMobile) {
    if (loading)
      return (
        <div className="container">
          <Loading />
        </div>
      );

    if (error) return <div className="container">Error: {error.message}</div>;
  }

  const currentProject = mainPageProjects[currentProjectNum];
  return (
    <div className="containerTwo">
      <div className={`Explore ${isFixed ? "fixed" : ""}`}>
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
      <div className="cardsPlace">
        {isMobile && currentProject && (
          <div
            className="mobileCard"
            style={{
              backgroundColor: ["#b1b0c9", "#7FB685", "#4EB1D2", "#edc4b3"][
                currentProjectNum % 4
              ],
            }}
          >
            <>
              {currentProject.images.slice(0, 1).map((img, index) => (
                <div
                  key={index}
                  className="mobileImageCard"
                  style={{ backgroundImage: `url(${img.image})` }}
                ></div>
              ))}
            </>
            <div className="mobileCardsInfo">
              <div className="mobileInfoDefine">
                <h2>{currentProject.title}</h2>
                <p>{currentProject.about}</p>
              </div>
              <div className="mobileCardsFeature">
                {currentProject.features.slice(0, 4).map((f, index) => (
                  <div key={index} className="mobileCardsInfoFeature">
                    <img src={Checked} alt="" />
                    <p>{f.feature}</p>
                  </div>
                ))}
              </div>
              <span
                onClick={() =>
                  navigate(`/works`, {
                    state: { projectId: currentProject.id },
                  })
                }
              >
                View project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width="20px"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </span>
            </div>
          </div>
        )}
      </div>
      {isMobile && (
        <div className="mobileCardsPagination">
          <button onClick={handlePrev} disabled={currentProjectNum === 0}>
            <svg
              className={`${currentProjectNum === 0 ? "disable" : "active"}`}
              width="14"
              height="26"
              viewBox="0 0 14 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.4999 26.005C12.2149 26.005 11.9299 25.9 11.7049 25.675L1.92492 15.895C0.334922 14.305 0.334922 11.695 1.92492 10.105L11.7049 0.324999C12.1399 -0.110001 12.8599 -0.110001 13.2949 0.324999C13.7299 0.759999 13.7299 1.48 13.2949 1.915L3.51492 11.695C2.79492 12.415 2.79492 13.585 3.51492 14.305L13.2949 24.085C13.7299 24.52 13.7299 25.24 13.2949 25.675C13.0699 25.885 12.7849 26.005 12.4999 26.005Z" />
            </svg>
          </button>
          <button
            onClick={handleNext} disabled={currentProjectNum === mainPageProjects.length - 1}>
            <svg
              className={`${
                currentProjectNum === mainPageProjects.length - 1
                  ? "disable"
                  : "active"
              }`}
              width="14"
              height="26"
              viewBox="0 0 14 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.36539 26.005C1.08039 26.005 0.795391 25.9 0.570391 25.675C0.135391 25.24 0.135391 24.52 0.570391 24.085L10.3504 14.305C11.0704 13.585 11.0704 12.415 10.3504 11.695L0.570391 1.915C0.135391 1.48 0.135391 0.759999 0.570391 0.324999C1.00539 -0.110001 1.72539 -0.110001 2.16039 0.324999L11.9404 10.105C12.7054 10.87 13.1404 11.905 13.1404 13C13.1404 14.095 12.7204 15.13 11.9404 15.895L2.16039 25.675C1.93539 25.885 1.65039 26.005 1.36539 26.005Z" />
            </svg>
          </button>
        </div>
      )}
      {/* <img src={circles} className="Circles" alt="" /> */}
    </div>
  );
}
