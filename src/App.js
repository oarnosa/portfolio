import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/header.component';
import HomePage from './pages/home/home.component';
import AboutPage from './pages/about/about.component';
import ProjectsPage from './pages/projects/projects.component';
import ContactPage from './pages/contact/contact.component';

import './App.scss';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route path='/' exact component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route path='/projects' component={ProjectsPage} />
      <Route path='/contact' component={ContactPage} />
    </Switch>
  </Router>
);

export default App;
