import React from 'react';
import '../styles/About.css';
import aboutImage from '../assets/aboutImage.png';

const About = () => (
  <section id="About" className="about">
    <div className="about-image">
      <img src={aboutImage} alt="about" />
    </div>
    <div className="about-text">
      <h1>About Me</h1>
      <p>
        I am a full stack web developer with a passion for
        creating interactive and responsive web applications.
        I have experience working with
        JavaScript, React, Redux, Ruby, Rails, PostgreSQL, HTML, CSS, and Git.
        I am a quick learner and I am always looking to expand my knowledge and skill set.
        I am a team player and I am excited to work with others to create amazing applications.
      </p>
    </div>
  </section>
);

export default About;
