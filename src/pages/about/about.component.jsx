import React from "react";

import "./about.styles.scss";

const AboutPage = () => (
  <div className="page--about">
    <div className="heading">
      <p className="heading__tag">01. About</p>
      <h2 className="heading__main">Get to Know Me</h2>
    </div>
    <section className="about">
      <div className="about__content">
        <p className="about__content__info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          blanditiis neque illo quae ex provident inventore delectus vel
          repellendus! Eligendi alias eius illo, unde exercitationem laborum
          debitis obcaecati deserunt. Veritatis perspiciatis iusto accusamus
          repudiandae? Cupiditate.
        </p>
        <p className="about__content__info">
          Lorem ipsum dolor, sit consectetur adipisicing elit:
        </p>
        <ul className="about__content__skillset">
          <li className="about__content__skillset__skill">Javascript (ES6+)</li>
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
          src="https://i.ibb.co/JzTLtGV/headshot-square.jpg"
          alt=""
        />
        <div className="about__container__decoration"></div>
      </div>
    </section>
  </div>
);

export default AboutPage;
