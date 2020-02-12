import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Button from "../../components/button/button.component";

import "./home.styles.scss";

const HomePage = () => {
  // declare hooks
  const [current, setCurrent] = useState(0);
  const history = useHistory();

  // declare variables
  const adjectives = [
    "full-stack developer",
    "front-end developer",
    "back-end developer",
    "software engineer",
    "minimalist",
    "gamer"
  ];

  // event handlers
  const handleOnClick = () => {
    history.push(`/about`);
  };

  // lifecycle method to handle interval
  useEffect(() => {
    const interval = setInterval(() => {
      let next = current + 1;
      if (next > adjectives.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(next);
      }
    }, 2500);
    return () => clearInterval(interval);
  }, [current, adjectives]);

  return (
    <div className="page--home">
      <section className="hero">
        <p className="hero__tag">Hey, my name is</p>
        <h1 className="hero__main">Orlando Arnosa.</h1>
        <h3 className="hero__sub">
          I am a <span className="hero__sub__adj">{adjectives[current]}</span>.
        </h3>
      </section>
      <Button onClick={handleOnClick}>Get to Know Me</Button>
    </div>
  );
};

export default HomePage;
