import React, { Component } from "react";

import Button from "../../components/button/button.component";

import "./home.styles.scss";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      adjectives: [
        "full-stack developer",
        "front-end developer",
        "back-end developer",
        "software engineer",
        "minimalist",
        "gamer",
        "level 120 orc shaman"
      ],
      current: 0
    };
  }

  handleOnClick = () => {
    this.props.history.push(`/about`);
  };

  cycleAdjectives = setInterval(() => {
    let next = this.state.current + 1;
    if (next > this.state.adjectives.length - 1) {
      this.setState({ current: 0 });
    } else {
      this.setState({ current: next });
    }
  }, 3000);

  render() {
    return (
      <div className="page--home">
        <section className="hero">
          <p className="hero__tag">Hey, my name is</p>
          <h1 className="hero__main">Orlando Arnosa.</h1>
          <h3 className="hero__sub">
            I am a{" "}
            <span className="hero__sub__adj">
              {this.state.adjectives[this.state.current]}
            </span>
            .
          </h3>
        </section>
        <Button onClick={this.handleOnClick}>Get to Know Me</Button>
      </div>
    );
  }
}

export default HomePage;
