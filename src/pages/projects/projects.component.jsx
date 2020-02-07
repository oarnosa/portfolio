import React, { Component } from 'react';

import Showcase from '../../components/showcase/showcase.component';
import PROJECT_DATA from './projects.data';

import './projects.styles.scss';

class ProjectsPage extends Component {
  constructor() {
    super();
    this.state = {
      projects: PROJECT_DATA
    };
  }

  render() {
    return (
      <div className='projects-page'>
        <span className='tagline'>02. Check Out My Work</span>
        <h1 className='heading'>Projects</h1>
        {this.state.projects.map(
          ({ id, title, description, imageUrl, skills }) => (
            <Showcase
              key={id}
              title={title}
              description={description}
              imageUrl={imageUrl}
              skills={skills}
            />
          )
        )}
      </div>
    );
  }
}

export default ProjectsPage;
