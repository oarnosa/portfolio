import React from "react";
import Fade from "react-reveal/Fade";

import "./about.styles.scss";

const AboutPage = () => (
  <div className="about--page" id="about">
    <Fade>
      <div className="heading">
        <p className="heading__tag">01. About</p>
        <h2 className="heading__main">Get to Know Me</h2>
      </div>
      <section className="about">
        <div className="about__content">
          <p className="about__content__info">
            Hey! I'm Orlando, a full-stack developer and computer science
            graduate from{" "}
            <span
              className="about__content__info__special"
              onClick={() => window.open("https://www.fiu.edu/")}
            >
              Florida International University
            </span>
            . I specialize in building high-quality, responsive, and performant
            websites and enjoy turning complex problems into simple, and
            intuitive solutions.
          </p>
          <p className="about__content__info">
            When I am not coding, you'll often find me in the gym, with friends
            and family, or in World of Warcraft where I play as an Orc Shaman.
          </p>
          <p className="about__content__info">
            Here are some technologies I've been working with lately:
          </p>
          <ul className="about__content__skillset">
            <li className="about__content__skillset__skill">
              Javascript (ES6+)
            </li>
            <li className="about__content__skillset__skill">HTML & (S)CSS</li>
            <li className="about__content__skillset__skill">React</li>
            <li className="about__content__skillset__skill">GraphQL</li>
            <li className="about__content__skillset__skill">Redux</li>
            <li className="about__content__skillset__skill">PostgreSQL</li>
            <li className="about__content__skillset__skill">Node.js</li>
            <li className="about__content__skillset__skill">MongoDB</li>
            <li className="about__content__skillset__skill">Express</li>
          </ul>
        </div>
        <div className="about__container">
          <img
            className="about__container__image"
            src="images/headshot-square.jpg"
            alt=""
          />
          <div className="about__container__decoration"></div>
        </div>
      </section>
    </Fade>
  </div>
);

export default AboutPage;
