import "./Card.css";
import React from "react";
import { useTransform, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Checked from "../asset/Checked.png";

export default function Card({ i, project, pickColorCard, progress, range, targetScale }) {
  const navigate = useNavigate();
  const backgroundColor = pickColorCard[i % pickColorCard.length];
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div className="cardsContainer" key={`p_${i}`}>
      <motion.div
        className="eachCard"
        style={{
          backgroundColor: backgroundColor,
          scale: scale,
          top: `calc(-17vh + ${i * 25}px)`,
        }}
      >
        <div className="CardsInfo">
          <div className="InfoDefine">
            <h2>{project.title}</h2>
            <p>{project.about}</p>
          </div>
          <div>
            {project.features.map((f, index) => (
              <div key={index} className="CardsInfoFeature">
                <img src={Checked} alt="" />
                <p>{f.feature}</p>
              </div>
            ))}
          </div>
          <span
            onClick={() =>
              navigate(`/works`, { state: { projectId: project.id } })
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
        <div className="cardsImage">
          {project.images.slice(0, 2).map((img, index) => (
            <div
              key={index}
              className="ImageCard"
              style={{ backgroundImage: `url(${img.image})` }}
            ></div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
