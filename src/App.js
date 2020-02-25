import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MediaQuery from "react-responsive";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedinIn,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";
import {
  faServer,
  faExternalLinkAlt,
  faChevronLeft,
  faChevronRight,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faFolderOpen } from "@fortawesome/free-regular-svg-icons";

import Header from "./components/header/header.component";
import Social from "./components/social/social.component";
import Spinner from "./components/spinner/spinner.component";
import Footer from "./components/footer/footer.component";

import "./App.scss";

const HomePage = lazy(() => import("./pages/home/home.component"));
const AboutPage = lazy(() => import("./pages/about/about.component"));
const ProjectsPage = lazy(() => import("./pages/projects/projects.component"));
const ContactPage = lazy(() => import("./pages/contact/contact.component"));

library.add(
  faGithub,
  faLinkedinIn,
  faInstagram,
  faServer,
  faExternalLinkAlt,
  faChevronLeft,
  faChevronRight,
  faEnvelope,
  faBars,
  faFolderOpen
);

const App = () => (
  <Router>
    {/* laptop & desktop view */}
    <MediaQuery minWidth={951}>
      <Switch>
        <Suspense fallback={<Spinner />}>
          <Header />
          <div className="wrapper">
            <Route path="/" exact component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/contact" component={ContactPage} />
          </div>
          <Footer />
        </Suspense>
      </Switch>
      <Social />
    </MediaQuery>

    {/* mobile & tablet view */}
    <MediaQuery maxWidth={950}>
      <Suspense fallback={<Spinner />}>
        <Header />
        <div className="wrapper">
          <HomePage />
          <AboutPage />
          <ProjectsPage />
          <ContactPage />
        </div>
        <Footer />
      </Suspense>
    </MediaQuery>
  </Router>
);

export default App;
