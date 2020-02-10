import React from 'react';

import './about.styles.scss';

const AboutPage = () => (
  <div className='about-page'>
    <div className='heading'>
      <p className='tagline'>01. About</p>
      <h1 className='headline'>Get to Know Me</h1>
    </div>
    <section className='about'>
      <p className='text'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut saepe
        perspiciatis tenetur optio excepturi accusamus sapiente est minima
        explicabo voluptas, dolorum dolore, exercitationem blanditiis expedita,
        ex ad eum ducimus? Itaque.
      </p>
      <ul className='skillset'>
        <li className='skill'>Javascript (ES6+)</li>
        <li className='skill'>React</li>
        <li className='skill'>Node.js</li>
        <li className='skill'>Express</li>
        <li className='skill'>HTML & (S)CSS</li>
        <li className='skill'>PostgreSQL</li>
        <li className='skill'>MongoDB</li>
      </ul>
      <div className='image'>
        <img src='https://i.ibb.co/JzTLtGV/headshot-square.jpg' alt='' />
      </div>
    </section>
  </div>
);

export default AboutPage;
