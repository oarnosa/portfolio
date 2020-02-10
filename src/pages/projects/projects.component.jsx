import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Showcase from '../../components/showcase/showcase.component';
import Button from '../../components/button/button.component';

import PROJECT_DATA from './projects.data';

import './projects.styles.scss';

class ProjectsPage extends Component {
  constructor() {
    super();
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
      <div className='projects-page'>
        <span className='tagline'>02. Projects</span>
        <h1 className='heading'>Check Out My Work</h1>
        <hr className='line' />
        <div className='carousel'>
          <div className='prev'>
            <FontAwesomeIcon
              className='arrow'
              icon={['fas', 'chevron-left']}
              size='lg'
              onClick={handlePrev}
            />
          </div>
          <div className='projects'>
            <Showcase key={id} {...props} />
          </div>
          <div className='next'>
            <FontAwesomeIcon
              className='arrow'
              icon={['fas', 'chevron-right']}
              size='lg'
              onClick={handleNext}
            />
          </div>
        </div>
        <div className='indicators'>
          {this.state.projects.map(project => (
            <div
              key={project.id}
              className={`indicator ${
                this.state.current === this.state.projects.indexOf(project)
                  ? 'current'
                  : ''
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
            marginTop: '20px'
          }}
          onClick={() =>
            window.open('https://github.com/oarnosa?tab=repositories')
          }
        >
          View More
        </Button>
      </div>
    );
  }
}

export default ProjectsPage;
