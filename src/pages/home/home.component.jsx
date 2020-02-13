import React from "react";
import { useHistory } from "react-router-dom";
import TextLoop from "react-text-loop";

import Button from "../../components/button/button.component";

import "./home.styles.scss";

const HomePage = () => {
  const history = useHistory();

  const handleOnClick = () => {
    history.push(`/about`);
  };

  return (
    <div className="page--home">
      <section className="hero">
        <p className="hero__tag">Hey, my name is</p>
        <h1 className="hero__main">Orlando Arnosa.</h1>
        <h2 className="hero__sub">
          I am a{" "}
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
        </h2>
      </section>
      <Button onClick={handleOnClick}>Get to Know Me</Button>
    </div>
  );
};

export default HomePage;
