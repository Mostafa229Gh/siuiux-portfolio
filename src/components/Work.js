import "./Work.css";
import React, { useState, useEffect } from "react";
import { fetchProjects } from "./api";
import Loading from "./Loading";
import { useLocation } from "react-router-dom";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/dist/photoswipe.css";

const ITEMS_PER_PAGE = 6;

export default function Work() {
  const [projectsData, setProjectsData] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isProjectsButton, setIsProjectsButton] = useState(false);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const loadData = async () => {
      const { data, loading, error } = await fetchProjects();
      setProjectsData(data);
      setLoading(loading);
      setError(error);
      if (data.length > 0) {
        const projectId = location.state?.projectId;
        const project = projectId
          ? data.find((p) => p.id === projectId)
          : data[0];
        setSelectedProject(project);
      }
    };
    loadData();
  }, [location.state]);

  const totalPages = Math.ceil(projectsData.length / ITEMS_PER_PAGE);
  const currentProjects = projectsData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  useEffect(() => {
    if (currentProjects.length > 0) {
      setSelectedProject(currentProjects[0]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };
  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  if (loading)
    return (
      <div className="container">
        <Loading />
      </div>
    );

  if (error) return <div className="container">Error: {error.message}</div>;

  if (!selectedProject)
    return <div className="container">No project data available.</div>;

  return (
    <div className="containerWork">
      <aside style={isProjectsButton ? { display: "flex" } : {}}>
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
                    setTimeout(() => {
                      setIsProjectsButton(false);
                    }, 550);
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
            <h2>
              {selectedProject.title}
              <button
                className="mobileProjectsListButton"
                onClick={() => {
                  setIsProjectsButton(true);
                }}
              >
                Projects list
                <span>
                  <svg
                    width="18"
                    height="14"
                    viewBox="0 0 18 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.5 0C5.94772 0 5.5 0.447715 5.5 1C5.5 1.55228 5.94772 2 6.5 2H15.5C16.0523 2 16.5 1.55228 16.5 1C16.5 0.447715 16.0523 0 15.5 0H6.5Z"
                      fill="white"
                    />
                    <path
                      d="M6.5 6C5.94772 6 5.5 6.44772 5.5 7C5.5 7.55228 5.94772 8 6.5 8H16.5C17.0523 8 17.5 7.55228 17.5 7C17.5 6.44772 17.0523 6 16.5 6H6.5Z"
                      fill="white"
                    />
                    <path
                      d="M5.5 13C5.5 12.4477 5.94772 12 6.5 12H12.5C13.0523 12 13.5 12.4477 13.5 13C13.5 13.5523 13.0523 14 12.5 14H6.5C5.94772 14 5.5 13.5523 5.5 13Z"
                      fill="white"
                    />
                    <path
                      d="M2.00017 0.134142C1.52187 -0.142001 0.910284 0.0218744 0.634142 0.500167C0.357999 0.97846 0.521874 1.59005 1.00017 1.86619L1.00883 1.87119C1.48712 2.14733 2.09871 1.98346 2.37485 1.50517C2.65099 1.02687 2.48712 0.415284 2.00883 0.139142L2.00017 0.134142Z"
                      fill="white"
                    />
                    <path
                      d="M0.634142 6.50017C0.910284 6.02187 1.52187 5.858 2.00017 6.13414L2.00883 6.13914C2.48712 6.41528 2.65099 7.02687 2.37485 7.50517C2.09871 7.98346 1.48712 8.14734 1.00883 7.87119L1.00017 7.86619C0.521874 7.59005 0.357999 6.97846 0.634142 6.50017Z"
                      fill="white"
                    />
                    <path
                      d="M2.00017 12.1341C1.52187 11.858 0.910284 12.0219 0.634142 12.5002C0.357999 12.9785 0.521874 13.59 1.00017 13.8662L1.00883 13.8712C1.48712 14.1473 2.09871 13.9835 2.37485 13.5052C2.65099 13.0269 2.48712 12.4153 2.00883 12.1391L2.00017 12.1341Z"
                      fill="white"
                    />
                  </svg>
                </span>
              </button>
            </h2>
            <p>{selectedProject.sentence}</p>
          </div>
          <div className="WorksButton">
            <button>
              <a
                href={selectedProject.ui_kit_link}
                target="_blank"
                rel="noreferrer"
              >
                See UI Kit
              </a>
            </button>
            <button>
              <a
                href={selectedProject.case_study_pdf_file}
                target="_blank"
                rel="noreferrer"
              >
                Case Study
              </a>
            </button>
          </div>
        </div>
        <div className="imageSectionProject">
          <Gallery>
            {selectedProject.images.map((image, index) => (
              <Item
                key={index}
                original={image.image}
                thumbnail={image.image}
                width="1024"
                height="768"
              >
                {({ ref, open }) => (
                  <img
                    ref={ref}
                    onClick={open}
                    src={image.image}
                    alt={`Project ${index + 1}`}
                    className="imageSectionImages"
                  />
                )}
              </Item>
            ))}
          </Gallery>
        </div>
        <div className="definitionSection">
          <h2>About</h2>
          <p>{selectedProject.about}</p>

          <h2>Goals</h2>
          <p>{selectedProject.goals}</p>

          <h2>Problems And Challenges</h2>
          <p>{selectedProject.problem_and_challenge}</p>

          <h2>Features</h2>
          <p>{selectedProject.the_features}</p>

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
        <div className="mobileWorksButton">
          <button>
            <a
              href={selectedProject.ui_kit_link}
              target="_blank"
              rel="noreferrer"
            >
              See UI Kit
            </a>
          </button>
          <button>
            <a
              href={selectedProject.case_study_pdf_file}
              target="_blank"
              rel="noreferrer"
            >
              Case Study
            </a>
          </button>
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
