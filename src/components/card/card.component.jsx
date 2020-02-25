import React from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./card.styles.scss";

const Card = ({ project }) => {
  const {
    title,
    description,
    skills,
    githubUrl,
    serverUrl,
    previewUrl
  } = project;

  return (
    <Fade>
      <div className="card">
        <div className="content">
          <div className="content__heading">
            <h3 className="content__heading__title">{title}</h3>
            <FontAwesomeIcon
              className="content__heading__icon"
              icon={["far", "folder-open"]}
              size="2x"
              onClick={() => window.open(`${previewUrl}`)}
            />
          </div>
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
