import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MediaQuery from "react-responsive";
import Fade from "react-reveal/Fade";

import Showcase from "../../components/showcase/showcase.component";
import Button from "../../components/button/button.component";

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
    if (next <= projects.length - 1) {
      setCurrent(next);
    }
  };

  const handlePrev = () => {
    let prev = current - 1;
    if (prev >= 0) setCurrent(prev);
  };

  return (
    <div className="page--projects">
      <Fade>
        <div className="heading">
          <p className="heading__tag">02. Projects</p>
          <h2 className="heading__main">Check Out My Work</h2>
        </div>
        <MediaQuery minWidth={1200}>
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
        </MediaQuery>
        <MediaQuery maxWidth={1200}>
          <div className="cards">
            <div>Card Component</div>
            <div>Card Component</div>
            <div>Card Component</div>
          </div>
        </MediaQuery>
        <div className="button__container">
          <Button
            onClick={() =>
              window.open("https://github.com/oarnosa?tab=repositories")
            }
          >
            View More
          </Button>
        </div>
      </Fade>
    </div>
  );
};

export default ProjectsPage;
