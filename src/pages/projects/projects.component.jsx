import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MediaQuery from "react-responsive";
import Fade from "react-reveal/Fade";

import Button from "../../components/button/button.component";
import Showcase from "../../components/showcase/showcase.component";
import Card from "../../components/card/card.component";

import PROJECT_DATA from "./projects.data";

import "./projects.styles.scss";

const ProjectsPage = () => {
  const [projects] = useState(PROJECT_DATA);
  const [current, setCurrent] = useState(0);

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
    <div id="projects">
      <Fade>
        <div className="heading">
          <p className="heading__tag">02. Projects</p>
          <h2 className="heading__main">Check Out My Work</h2>
        </div>
        <MediaQuery minWidth={951}>
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
              {projects
                .filter((project, index) => index === current)
                .map(project => (
                  <Showcase key={project.id} project={project} />
                ))}
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
        <MediaQuery maxWidth={950}>
          <div className="cards">
            {projects.map(project => (
              <Card key={project.id} project={project} />
            ))}
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
