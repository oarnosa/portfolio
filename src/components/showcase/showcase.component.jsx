import React from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./showcase.styles.scss";

const Showcase = ({ project }) => {
  const {
    title,
    description,
    imageUrl,
    skills,
    githubUrl,
    serverUrl,
    previewUrl,
  } = project;

  return (
    <div className="showcase">
      <Fade>
        <div className="showcase__container">
          <img
            className="showcase__image"
            src={imageUrl}
            alt=""
            onClick={() => window.open(`${previewUrl}`)}
          />
        </div>
        <div className="showcase__content">
          <h3
            className="showcase__title"
            onClick={() => window.open(`${previewUrl}`)}
          >
            {title}
          </h3>
          <div className="showcase__description">{description}</div>
          <div className="showcase__skills">
            {skills.map((skill, index) => (
              <span key={index} className="showcase__skill">
                {skill}
              </span>
            ))}
          </div>
          <div className="showcase__links">
            <FontAwesomeIcon
              className="showcase__link"
              icon={["fab", "github"]}
              size="lg"
              onClick={() => window.open(`${githubUrl}`)}
            />
            {serverUrl !== "" && (
              <FontAwesomeIcon
                className="showcase__link"
                icon={["fas", "server"]}
                size="lg"
                onClick={() => window.open(`${serverUrl}`)}
              />
            )}
            <FontAwesomeIcon
              className="showcase__link"
              icon={["fas", "external-link-alt"]}
              size="lg"
              onClick={() => window.open(`${previewUrl}`)}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Showcase;
