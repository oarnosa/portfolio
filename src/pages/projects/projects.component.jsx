import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Showcase from "../../components/showcase/showcase.component";

import PROJECT_DATA from "./projects.data";

import "./projects.styles.scss";

const ProjectsPage = () => {
  // declare hooks
  const [current, setCurrent] = useState(0);

  // declare variables
  const projects = PROJECT_DATA;
  const { id, ...props } = projects[current];

  // event handlers
  const handleNext = () => {
    let next = current + 1;
    if (next <= projects.length - 1) setCurrent(next);
  };

  const handlePrev = () => {
    let prev = current - 1;
    if (prev >= 0) setCurrent(prev);
  };

  return (
    <div className="page--projects">
      <div className="heading">
        <span className="heading__tag">02. Projects</span>
        <h2 className="heading__main">Check Out My Work</h2>
      </div>
      <div className="carousel">
        <div className="carousel__prev">
          <FontAwesomeIcon
            className="arrow"
            icon={["fas", "chevron-left"]}
            size="lg"
            onClick={handlePrev}
          />
        </div>
        <div className="carousel__project">
          <Showcase key={id} {...props} />
        </div>
        <div className="carousel__next">
          <FontAwesomeIcon
            className="arrow"
            icon={["fas", "chevron-right"]}
            size="lg"
            onClick={handleNext}
          />
        </div>
      </div>
      <div className="indicators">
        {projects.map(project => (
          <div
            key={project.id}
            className={`indicators__indicator ${
              current === projects.indexOf(project) ? "current" : ""
            }`}
            onClick={() => {
              setCurrent(projects.indexOf(project));
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
