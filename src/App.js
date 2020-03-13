import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
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
  faBars,
  faList
} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import Header from "./components/header/header.component";
import Social from "./components/social/social.component";
import Spinner from "./components/spinner/spinner.component";
import Footer from "./components/footer/footer.component";

import "./App.scss";

const Home = lazy(() => import("./pages/home/home.component"));
const About = lazy(() => import("./pages/about/about.component"));
const Projects = lazy(() => import("./pages/projects/projects.component"));
const Contact = lazy(() => import("./pages/contact/contact.component"));

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
  faList
);

const App = () => (
  <Router>
    <Header />
    {/* laptop & desktop view */}
    <MediaQuery minWidth={951}>
      <Switch>
        <Suspense fallback={<Spinner />}>
          <div className="wrapper">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/contact" component={Contact} />
            <Redirect to="/" />
          </div>
        </Suspense>
      </Switch>
      <MediaQuery minWidth={1250}>
        <Social />
      </MediaQuery>
    </MediaQuery>
    {/* mobile & tablet view */}
    <MediaQuery maxWidth={950}>
      <Suspense fallback={<Spinner />}>
        <div className="wrapper">
          <Home />
          <About />
          <Projects />
          <Contact />
        </div>
      </Suspense>
    </MediaQuery>
    <Footer />
  </Router>
);

export default App;
