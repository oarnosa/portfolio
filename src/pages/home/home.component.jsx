import React from "react";
import { useHistory } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import MediaQuery from "react-responsive";
import TextLoop from "react-text-loop";
import Fade from "react-reveal/Fade";

import Button from "../../components/button/button.component";

import "./home.styles.scss";

const HomePage = () => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push(`/about`);
  };

  return (
    <div className="home" id="home">
      <Fade>
        <section className="home__hero">
          <p className="home__kicker">Hey, my name is</p>
          <h1 className="home__headline">Orlando Arnosa.</h1>
          <h2 className="home__sub">
            <span className="home__sub__text">I am a </span>
            <span className="home__sub__text">
              <TextLoop
                children={[
                  "full-stack developer",
                  "front-end developer",
                  "back-end developer",
                  "software engineer",
                  "minimalist",
                  "gamer"
                ]}
                springConfig={{ stiffness: 250, damping: 15 }}
                mask
              />
              .
            </span>
          </h2>
        </section>
        <div className="home__button">
          <MediaQuery minWidth={951}>
            <Button onClick={handleOnClick}>Get to Know Me</Button>
          </MediaQuery>
          <MediaQuery maxWidth={950}>
            <Button>
              <ScrollLink
                className="home__button__text"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
              >
                Get to Know Me
              </ScrollLink>
            </Button>
          </MediaQuery>
        </div>
      </Fade>
    </div>
  );
};

export default HomePage;
