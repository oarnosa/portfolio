import React from "react";
import Fade from "react-reveal/Fade";

import "./about.styles.scss";

const AboutPage = () => (
  <div className="about" id="about">
    <Fade>
      <div className="about__heading">
        <p className="about__kicker">01. About</p>
        <h2 className="about__headline">Get to Know Me</h2>
      </div>
      <section className="about__section">
        <div className="about__content">
          <p className="about__info">
            Hey! I'm Orlando, a full-stack developer and computer science
            graduate from{" "}
            <span
              className="about__info--special"
              onClick={() => window.open("https://www.fiu.edu/")}
            >
              Florida International University
            </span>
            . I specialize in building high-quality, responsive, and performant
            websites and enjoy turning complex problems into simple, and
            intuitive solutions.
          </p>
          <p className="about__info">
            When I am not coding, you'll often find me in the gym, with friends
            and family, or in World of Warcraft where I play as an Orc Shaman.
          </p>
          <p className="about__info">
            Here are some technologies I've been working with lately:
          </p>
          <ul className="about__skills">
            <li className="about__skill">TypeScript</li>
            <li className="about__skill">JavaScript (ES6+)</li>
            <li className="about__skill">Next.js</li>
            <li className="about__skill">HTML & (S)CSS</li>
            <li className="about__skill">React</li>
            <li className="about__skill">Tailwind CSS</li>
            <li className="about__skill">Node.js</li>
            <li className="about__skill">Express</li>
            <li className="about__skill">Python</li>
            <li className="about__skill">Django / Flask</li>
            <li className="about__skill">PHP</li>
            <li className="about__skill">Wordpress</li>
            <li className="about__skill">SQL</li>
            <li className="about__skill">MongoDB</li>
          </ul>
        </div>
        <div className="about__container">
          <img
            className="about__image"
            src="images/headshot-square.jpg"
            alt="headshot"
          />
          <div className="about__decoration"></div>
        </div>
      </section>
    </Fade>
  </div>
);

export default AboutPage;
