import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomePage from './pages/home/home.component';
import AboutPage from './pages/about/about.component';
import ProjectsPage from './pages/projects/projects.component';
import ContactPage from './pages/contact/contact.component';

const App = () => (
  <Router>
    <Route path='/' exact component={HomePage} />
    <Route path='/about' component={AboutPage} />
    <Route path='/projects' component={ProjectsPage} />
    <Route path='/contact' component={ContactPage} />
  </Router>
);

export default App;
