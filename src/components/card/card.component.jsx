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
        <div className="card__overlay"></div>
        <div className="card__content">
          <h3
            className="card__title"
            onClick={() => window.open(`${previewUrl}`)}
          >
            {title}
          </h3>
          <p className="card__description">{description}</p>
          <p className="card__skills">
            {skills.map((skill, index) => (
              <span key={index} className="card__skill">
                {skill}
              </span>
            ))}
          </p>
          <div className="card__links">
            <FontAwesomeIcon
              className="card__link"
              icon={["fab", "github"]}
              size="lg"
              onClick={() => window.open(`${githubUrl}`)}
            />
            {serverUrl !== "" && (
              <FontAwesomeIcon
                className="card__link"
                icon={["fas", "server"]}
                size="lg"
                onClick={() => window.open(`${serverUrl}`)}
              />
            )}
            <FontAwesomeIcon
              className="card__link"
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
