import React from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./card.styles.scss";

const Card = ({ project }) => {
  const {
    title,
    description,
    skills,
    imageUrl,
    githubUrl,
    serverUrl,
    previewUrl
  } = project;

  return (
    <Fade>
      <div className="card" style={{ backgroundImage: `url(${imageUrl})` }}>
        <div className="color-overlay"></div>
        <div className="content">
          <h3
            className="content__title"
            onClick={() => window.open(`${previewUrl}`)}
          >
            {title}
          </h3>
          <p className="content__description">{description}</p>
          <p className="content__skills">
            {skills.map((skill, index) => (
              <span key={index} className="skill">
                {skill}
              </span>
            ))}
          </p>
          <div className="content__links">
            <FontAwesomeIcon
              className="link"
              icon={["fab", "github"]}
              size="lg"
              onClick={() => window.open(`${githubUrl}`)}
            />
            {serverUrl !== "" && (
              <FontAwesomeIcon
                className="link"
                icon={["fas", "server"]}
                size="lg"
                onClick={() => window.open(`${serverUrl}`)}
              />
            )}
            <FontAwesomeIcon
              className="link"
              icon={["fas", "external-link-alt"]}
              size="lg"
              onClick={() => window.open(`${previewUrl}`)}
            />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Card;
