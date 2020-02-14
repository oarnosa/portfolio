import React from "react";
import Fade from "react-reveal/Fade";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./showcase.styles.scss";

const Showcase = ({
  title,
  description,
  imageUrl,
  skills,
  githubUrl,
  serverUrl,
  previewUrl
}) => (
  <div className="showcase">
    <Fade>
      <img className="showcase__image" src={imageUrl} alt="" />
      <div className="showcase__content">
        <h3 className="showcase__content__title">{title}</h3>
        <div className="showcase__content__description">{description}</div>
        <div className="showcase__content__skills">
          {skills.map((skill, index) => (
            <span key={index} className="showcase__content__skills__skill">
              {skill}
            </span>
          ))}
        </div>
        <div className="showcase__content__links">
          <FontAwesomeIcon
            className="showcase__content__links__link"
            icon={["fab", "github"]}
            size="lg"
            onClick={() => window.open(`${githubUrl}`)}
          />
          {serverUrl !== "" && (
            <FontAwesomeIcon
              className="showcase__content__links__link"
              icon={["fas", "server"]}
              size="lg"
              onClick={() => window.open(`${serverUrl}`)}
            />
          )}
          <FontAwesomeIcon
            className="showcase__content__links__link"
            icon={["fas", "external-link-alt"]}
            size="lg"
            onClick={() => window.open(`${previewUrl}`)}
          />
        </div>
      </div>
    </Fade>
  </div>
);

export default Showcase;
