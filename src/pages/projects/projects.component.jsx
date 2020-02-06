import React from 'react';

import Showcase from '../../components/showcase/showcase.component';

import './projects.styles.scss';

const ProjectsPage = () => (
  <div className="projects-page">
    <p className="section">02. Check Out My Work</p>
    <Showcase />
    <Showcase inverted />
    <Showcase />
  </div>
);

export default ProjectsPage;
