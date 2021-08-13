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
    <div className="projects" id="projects">
      <Fade>
        <div className="projects__heading">
          <p className="projects__kicker">02. Projects</p>
          <h2 className="projects__headline">Check Out My Work</h2>
        </div>
        <MediaQuery minWidth={951}>
          <div className="projects__carousel">
            <div className="projects__carousel__prev">
              <FontAwesomeIcon
                className="projects__arrow"
                icon={["fas", "chevron-left"]}
                size="lg"
                onClick={handlePrev}
              />
            </div>
            <div className="projects__carousel__project">
              {projects
                .filter((project, index) => index === current)
                .map(project => (
                  <Showcase key={project.id} project={project} />
                ))}
            </div>
            <div className="projects__carousel__next">
              <FontAwesomeIcon
                className="projects__arrow"
                icon={["fas", "chevron-right"]}
                size="lg"
                onClick={handleNext}
              />
            </div>
          </div>
          <div className="projects__indicators">
            {projects.map(project => (
              <div
                key={project.id}
                className={`projects__indicator ${
                  current === projects.indexOf(project)
                    ? "projects__indicator--current"
                    : ""
                }`}
                onClick={() => {
                  setCurrent(projects.indexOf(project));
                }}
              ></div>
            ))}
          </div>
        </MediaQuery>
        <MediaQuery maxWidth={950}>
          <div className="projects__cards">
            {projects.map(project => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        </MediaQuery>
        <div className="projects__button">
          <Button
            onClick={() =>
              window.open("https://github.com/oarnosa")
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
