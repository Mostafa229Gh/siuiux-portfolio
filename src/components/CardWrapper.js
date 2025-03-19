import "./Card.css";
import React, { useState, useEffect, useRef } from "react";
import { fetchProjects } from "./api";
import { useScroll } from "framer-motion";
import Card from "./Card";
import Loading from "./Loading";

const pickColorCard = ["#b1b0c9", "#7FB685", "#4EB1D2", "#edc4b3"];

export default function CardWrapper() {
  const [mainPageProjects, setMainPageProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
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
  }, []);

  if (loading)
    return (
      <div className="cardLoading">
        <Loading />
      </div>
    );

  if (error) return <div className="container">Error: {error.message}</div>;

  return (
    <div ref={container} className="cards">
      {mainPageProjects.map((project, i) => {
        const targetScale = 1 - (mainPageProjects.length - i) * 0.065;
        return (
          <Card
            key={`p_${i}`}
            i={i}
            project={project}
            pickColorCard={pickColorCard}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}
