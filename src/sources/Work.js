import React, { useState, useEffect } from "react";
import "./Work.css";

const ITEMS_PER_PAGE = 6;

const mockProjects = [
  "Almas Sazan",
  "Menu on",
  "Diera",
  "Fidar felez",
  "kolioo",
  "Cascavel",
  "Project 7",
  "Project 8",
  "Project 9",
  "Project 10",
  "Project 11",
  "Project 12",
];

const test = ["./Test.png", "./Test.png", "./Test.png"];

export default function Work() {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedProject, setSelectedProject] = useState("");

  const totalPages = Math.ceil(mockProjects.length / ITEMS_PER_PAGE);
  const currentProjects = mockProjects.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  useEffect(() => {
    if (currentProjects.length > 0) {
      setSelectedProject(currentProjects[0]);
    }
  }, [currentPage]);

  return (
    <div className="containerWork">
      <aside>
        <div className="projects">
          <p>PROJECTS</p>
          <ul>
            {currentProjects.map((project, index) => (
              <li
                key={index}
                onClick={() => setSelectedProject(project)}
                className={selectedProject === project ? "activeProject" : ""}
              >
                {selectedProject === project && (
                  <div className={`selectMark`}></div>
                )}
                {project}
                <span
                  className={`lineSet ${
                    selectedProject === project ? "expanded" : ""
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
              className={`${currentPage === totalPages ? "disable" : "active"}`}
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
      </aside>
      <main>
        <div className="headOfWorksPage">
          <div className="TitleOfProject">
            <h2>Title of project</h2>
            <p>
              Title of projectTitle of projectTitle of projectTitle of project
            </p>
          </div>
          <div className="WorksButton">
            <button>See UI Kit</button>
            <button>Case Study</button>
          </div>
        </div>
        <div className="imageSectionOne">
          {test.map((image, index) => (
            <div
              key={index}
              className="SectionImageCard"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          ))}
        </div>
        <div className="definitionSection">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus tincidunt nullam
            nullam ultrices lacus amet semper auctor. Sed massa porta interdum
            in. Eget ac ut purus tortor massa id pharetra. Mi augue quam nam vel
            sed erat volutpat phasellus. Placerat neque sed ut pellentesque
            malesuada.Lorem ipsum dolor sit amet consectetur. Lectus tincidunt
            nullam nullam ultrices lacus amet semper auctor. Sed massa porta
            interdum in. Eget ac ut purus tortor massa id pharetra. Mi augue
            quam nam vel sed erat volutpat phasellus. Placerat neque sed ut
            pellentesque malesuada.
          </p>

          <h2>Goals</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus tincidunt nullam
            nullam ultrices lacus amet semper auctor. Sed massa porta interdum
            in. Eget ac ut purus tortor massa id pharetra. Mi augue quam nam vel
            sed erat volutpat phasellus. Placerat neque sed ut pellentesque
            malesuada.Lorem ipsum dolor sit amet consectetur. Lectus tincidunt
            nullam nullam ultrices lacus amet semper auctor. Sed massa porta
            interdum in. Eget ac ut purus tortor massa id pharetra. Mi augue
            quam nam vel sed erat volutpat phasellus. Placerat neque sed ut
            pellentesque malesuada.
          </p>

          <h2>Problems And Challanges</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus tincidunt nullam
            nullam ultrices lacus amet semper auctor. Sed massa porta interdum
            in. Eget ac ut purus tortor massa id pharetra. Mi augue quam nam vel
            sed erat volutpat phasellus. Placerat neque sed ut pellentesque
            malesuada.Lorem ipsum dolor sit amet consectetur. Lectus tincidunt
            nullam nullam ultrices lacus amet semper auctor. Sed massa porta
            interdum in. Eget ac ut purus tortor massa id pharetra. Mi augue
            quam nam vel sed erat volutpat phasellus. Placerat neque sed ut
            pellentesque malesuada.
          </p>

          <h2>Features</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus tincidunt nullam
            nullam ultrices lacus amet semper auctor. Sed massa porta interdum
            in. Eget ac ut purus tortor massa id pharetra. Mi augue quam nam vel
            sed erat volutpat phasellus. Placerat neque sed ut pellentesque
            malesuada.Lorem ipsum dolor sit amet consectetur. Lectus tincidunt
            nullam nullam ultrices lacus amet semper auctor. Sed massa porta
            interdum in. Eget ac ut purus tortor massa id pharetra. Mi augue
            quam nam vel sed erat volutpat phasellus. Placerat neque sed ut
            pellentesque malesuada.
          </p>

          <h2>Project Duration</h2>
          <p>
            Start : 2023   December  22 , The duration of the project : 10 weeks
          </p>
          <div
            className="definitionImages"
            style={{ backgroundImage: `url(${"./Test.png"})` }}
          ></div>

          <h2>Interview With Users</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Lectus tincidunt nullam
            nullam ultrices lacus amet semper auctor. Sed massa porta interdum
            in. Eget ac ut purus tortor massa id pharetra. Mi augue quam nam vel
            sed erat volutpat phasellus. Placerat neque sed ut pellentesque
            malesuada.Lorem ipsum dolor sit amet consectetur. Lectus tincidunt
            nullam nullam ultrices lacus amet semper auctor. Sed massa porta
            interdum in. Eget ac ut purus tortor massa id pharetra. Mi augue
            quam nam vel sed erat volutpat phasellus. Placerat neque sed ut
            pellentesque malesuada.
          </p>
          <div
            className="definitionImages"
            style={{ backgroundImage: `url(${"./Test.png"})` }}
          ></div>

          <h2>User Research</h2>
          <p>
            Start : 2023   December  22 , The duration of the project : 10 weeks
          </p>
          <div
            className="definitionImages"
            style={{ backgroundImage: `url(${"./Test.png"})` }}
          ></div>
          <div
            className="definitionImages"
            style={{ backgroundImage: `url(${"./Test.png"})` }}
          ></div>

          <h2>User Personal</h2>
          <div className="userPersonal">
            <div>
              <p>
                Lorem ipsum dolor sit amet consectetur. Lectus tincidunt nullam
                nullam ultrices lacus amet semper auctor. Sed massa porta
                interdum in. Eget ac ut purus tortor massa id pharetra. Mi augue
                quam nam vel sed erat volutpat phasellus. Placerat neque sed ut
                pellentesque malesuada.Lorem ipsum dolor sit amet consectetur.
                Lectus tincidunt nullam nullam ultrices lacus amet semper
                auctor. Sed massa porta interdum in. Eget ac ut purus tortor
                massa id pharetra. Mi augue quam nam vel sed erat volutpat
                phasellus. Placerat neque sed ut pellentesque malesuada.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur. Lectus tincidunt nullam
                nullam ultrices lacus amet semper auctor. Sed massa porta
                interdum in. Eget ac ut purus tortor massa id pharetra. Mi augue
                quam nam vel sed erat volutpat phasellus. Placerat neque sed ut
                pellentesque malesuada.Lorem ipsum dolor sit amet consectetur.
                Lectus tincidunt nullam nullam ultrices lacus amet semper
                auctor. Sed massa porta interdum in. Eget ac ut purus tortor
                massa id pharetra. Mi augue quam nam vel sed erat volutpat
                phasellus. Placerat neque sed ut pellentesque malesuada.
              </p>
            </div>
            <div className="userPersonalLeftSide">
              <div
                className="SectionImageCard"
                style={{ backgroundImage: `url(${"./Test.png"})` }}
              ></div>
              <p className="userPersonalP">
                Lorem ipsum dolor sit amet consectetur. Lectus tincidunt nullam
                nullam ultrices lacus amet semper auctor. Sed massa porta
                interdum in. Eget ac ut purus tortor massa id pharetra. Mi augue
                quam nam
              </p>
            </div>
          </div>

          <h2>Empathy Map</h2>
          <p>
            Start : 2023   December  22 , The duration of the project : 10 weeks
          </p>
          <div
            className="definitionImages"
            style={{ backgroundImage: `url(${"./Test.png"})` }}
          ></div>

          <h2>User flow</h2>
          <div
            className="definitionImages"
            style={{ backgroundImage: `url(${"./Test.png"})` }}
          ></div>

          <h2>Card Sorting</h2>
          <div
            className="definitionImages"
            style={{ backgroundImage: `url(${"./Test.png"})` }}
          ></div>

          <h2>Information Architecture</h2>
          <div
            className="definitionImages"
            style={{ backgroundImage: `url(${"./Test.png"})` }}
          ></div>

          <div className="TypoColor">
            <div>
              <h2>Typography</h2>
              <div
                className="TypoColorImage"
                style={{ backgroundImage: `url(${"./Test.png"})` }}
              ></div>
            </div>
            <div>
              <h2>Colors</h2>
              <div
                className="TypoColorImage"
                style={{ backgroundImage: `url(${"./Test.png"})` }}
              ></div>
            </div>
          </div>

          <h2>Icons</h2>
          <div
            className="iconImagesSection"
            style={{ backgroundImage: `url(${"./Test.png"})` }}
          ></div>
          
          <h2>Wireframe</h2>
          <div
            className="definitionImages"
            style={{ backgroundImage: `url(${"./Test.png"})` }}
          ></div>
        </div>
      </main>
    </div>
  );
}
