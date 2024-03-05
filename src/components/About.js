import React from 'react';
import '../styles/About.css';
import aboutImage from '../assets/aboutImage.png';

const About = () => (
  <div className="container">
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
        <div className="about-buttons">
          <button type="button" className="skills-button">skills</button>
          <ul>
            <li>JavaScript</li>
            <li>React</li>
            <li>Redux</li>
            <li>Ruby</li>
            <li>Rails</li>
            <li>PostgreSQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
          </ul>
          <button type="button" className="Education-button">Education</button>
          <ul>
            <li>Microverse (Remote Full Stack Development program)</li>
            <li>FreeCodeCamp</li>
            <li>Faculity of Engineering</li>
            <li>Codecademy</li>
          </ul>
        </div>
      </div>
    </section>
  </div>

);

export default About;
