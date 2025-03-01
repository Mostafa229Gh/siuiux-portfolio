import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Work.css";

const ITEMS_PER_PAGE = 6;

export default function Work() {
  const [projectsData, setProjectsData] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_WORKS_URL, {
          headers: {
            Authorization: `Token ${process.env.REACT_APP_API_KEY}`,
          },
        });
        setProjectsData(response.data);
        if (response.data.length > 0) {
          setSelectedProject(response.data[0]);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const totalPages = Math.ceil(projectsData.length / ITEMS_PER_PAGE);
  const currentProjects = projectsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (currentProjects.length > 0) {
      setSelectedProject(currentProjects[0]);
    }
  }, [currentPage]);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    const handleScroll = () => {
      const asideMenu = document.querySelector(".asideMenu");
      if (asideMenu) {
        if (window.scrollY > 45) {
          asideMenu.classList.add("fixed");
        } else {
          asideMenu.classList.remove("fixed");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [projectsData]);

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  if (loading) return <div className="container">Loading...</div>;

  if (error) return <div className="container">Error: {error.message}</div>;

  if (!selectedProject)
    return <div className="container">No project data available.</div>;

  return (
    <div className="containerWork">
      <aside>
        <div className="asideMenu">
          <div className="projects">
            <p>PROJECTS</p>
            <ul>
              {currentProjects.map((project, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelectedProject(project);
                    scrollToTop();
                  }}
                  className={
                    selectedProject.id === project.id ? "activeProject" : ""
                  }
                >
                  {selectedProject.id === project.id && (
                    <div className={`selectMark`}></div>
                  )}
                  {project.title}
                  <span
                    className={`lineSet ${
                      selectedProject.id === project.id ? "expanded" : ""
                    }`}
                  ></span>
                </li>
              ))}
            </ul>
          </div>
          <div className="pagination">
            <button onClick={handlePrev} disabled={currentPage === 1}>
              <svg
                className={`${currentPage === 1 ? "disable" : "active"}`}
                width="14"
                height="26"
                viewBox="0 0 14 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12.4999 26.005C12.2149 26.005 11.9299 25.9 11.7049 25.675L1.92492 15.895C0.334922 14.305 0.334922 11.695 1.92492 10.105L11.7049 0.324999C12.1399 -0.110001 12.8599 -0.110001 13.2949 0.324999C13.7299 0.759999 13.7299 1.48 13.2949 1.915L3.51492 11.695C2.79492 12.415 2.79492 13.585 3.51492 14.305L13.2949 24.085C13.7299 24.52 13.7299 25.24 13.2949 25.675C13.0699 25.885 12.7849 26.005 12.4999 26.005Z" />
              </svg>
            </button>
            <span>{currentPage}</span>
            <button onClick={handleNext} disabled={currentPage === totalPages}>
              <svg
                className={`${
                  currentPage === totalPages ? "disable" : "active"
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
        </div>
      </aside>
      <main>
        <div className="headOfWorksPage">
          <div className="TitleOfProject">
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.sentence}</p>
          </div>
          <div className="WorksButton">
            <button>
              <a href={selectedProject.ui_kit_link} target="_blank" rel="noreferrer">
                See UI Kit
              </a>
            </button>
            <button>
              <a href={selectedProject.case_study_pdf_file} target="_blank" rel="noreferrer">
                Case Study
              </a>
            </button>
          </div>
        </div>
        <div className="imageSectionProject">
          {selectedProject.images.map((image, index) => (
            <div
              key={index}
              className="imageSmallCard"
              style={{ backgroundImage: `url(${image.image})` }}
            ></div>
          ))}
        </div>
        <div className="definitionSection">
          <h2>About</h2>
          <p>{selectedProject.about}</p>

          <h2>Goals</h2>
          <p>{selectedProject.goals}</p>

          <h2>Problems And Challenges</h2>
          <p>{selectedProject.problem_and_challenge}</p>

          <h2>Features</h2>
          <p>{selectedProject.features}</p>

          <h2>Project Duration</h2>
          <p>{selectedProject.project_duration}</p>
          <div
            className="imageLargeCard"
            style={{
              backgroundImage: `url(${selectedProject.project_duration_image})`,
            }}
          ></div>

          <h2>Interview With Users</h2>
          <p>{selectedProject.interview_with_user}</p>
          <div
            className="imageLargeCard"
            style={{
              backgroundImage: `url(${selectedProject.interview_with_user_image})`,
            }}
          ></div>

          <h2>User Research</h2>
          <p>{selectedProject.user_research}</p>
          <div
            className="imageLargeCard"
            style={{
              backgroundImage: `url(${selectedProject.user_research_image})`,
            }}
          ></div>

          <h2>User Personal</h2>
          <div className="userPersonal">
            <div>
              <p>{selectedProject.user_personal_needs}</p>
              <p>{selectedProject.user_personal_scenario}</p>
            </div>
            <div className="userPersonalLeftSide">
              <div
                className="imageSmallCard PersonalImagecard"
                style={{
                  backgroundImage: `url(${selectedProject.user_personal_image})`,
                }}
              ></div>
              <div>
                <p className="userPersonalP">
                  {selectedProject.user_personal_name}
                </p>
                <p className="userPersonalP">
                  {selectedProject.user_personal_job}
                </p>
                <p className="userPersonalP">
                  <span>{selectedProject.user_personal_age}</span>
                  <span>{selectedProject.user_personal_married}</span>
                </p>
                <p className="userPersonalP">
                  {selectedProject.user_personal_location}
                </p>
              </div>
            </div>
          </div>

          <h2>Empathy Map</h2>
          <p>{selectedProject.empathy_map}</p>
          <div
            className="imageLargeCard"
            style={{
              backgroundImage: `url(${selectedProject.empathy_map_image})`,
            }}
          ></div>

          <h2>User flow</h2>
          <p>{selectedProject.user_flow}</p>
          <div
            className="imageLargeCard"
            style={{
              backgroundImage: `url(${selectedProject.user_flow_image})`,
            }}
          ></div>

          <h2>Card Sorting</h2>
          <p>{selectedProject.card_sorting}</p>
          <div
            className="imageLargeCard"
            style={{
              backgroundImage: `url(${selectedProject.card_sorting_image})`,
            }}
          ></div>

          <h2>Information Architecture</h2>
          <p>{selectedProject.information_architecture}</p>
          <div
            className="imageLargeCard"
            style={{
              backgroundImage: `url(${selectedProject.information_architecture_image})`,
            }}
          ></div>

          <div className="TypoColor">
            <div>
              <h2>Typography</h2>
              <div
                className="imageSmallCard TypoColorImage"
                style={{
                  backgroundImage: `url(${selectedProject.typography_image})`,
                }}
              ></div>
            </div>
            <div>
              <h2>Colors</h2>
              <div
                className="imageSmallCard TypoColorImage"
                style={{
                  backgroundImage: `url(${selectedProject.colors_image})`,
                }}
              ></div>
            </div>
          </div>

          <h2>Icons</h2>
          <div
            className="imageLargeCard iconImagesSection"
            style={{ backgroundImage: `url(${selectedProject.icons_image})` }}
          ></div>

          <h2>Wireframe</h2>
          <div
            className="imageLargeCard"
            style={{
              backgroundImage: `url(${selectedProject.wireframe_image})`,
            }}
          ></div>
        </div>
      </main>

      <button className="BackToTopButton" onClick={scrollToTop}>
        <svg className="BackToTopSvgIcon" viewBox="0 0 384 512">
          <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path>
        </svg>
      </button>
    </div>
  );
}
