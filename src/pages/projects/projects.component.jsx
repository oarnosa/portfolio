import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Showcase from "../../components/showcase/showcase.component";
import Button from "../../components/button/button.component";

import PROJECT_DATA from "./projects.data";

import "./projects.styles.scss";

class ProjectsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: PROJECT_DATA,
      current: 0
    };
  }

  render() {
    const { id, ...props } = this.state.projects[this.state.current];

    const handlePrev = () => {
      let prev = this.state.current - 1;
      if (prev >= 0) this.setState({ current: prev });
    };

    const handleNext = () => {
      let next = this.state.current + 1;
      if (next <= this.state.projects.length - 1)
        this.setState({ current: next });
    };

    return (
      <div className="page--projects">
        <div className="heading">
          <span className="heading__tag">02. Projects</span>
          <h1 className="heading__main">Check Out My Work</h1>
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
          {this.state.projects.map(project => (
            <div
              key={project.id}
              className={`indicators__indicator ${
                this.state.current === this.state.projects.indexOf(project)
                  ? "current"
                  : ""
              }`}
              onClick={() => {
                this.setState({
                  current: this.state.projects.indexOf(project)
                });
              }}
            ></div>
          ))}
        </div>
        <Button
          style={{
            alignSelf: "center"
          }}
          onClick={() =>
            window.open("https://github.com/oarnosa?tab=repositories")
          }
        >
          View More
        </Button>
      </div>
    );
  }
}

export default ProjectsPage;
