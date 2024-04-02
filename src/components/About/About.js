import React from 'react';
import './About.css';

const About = () => (
  <section className="about" id="about">
    <div className="about-cards">
      <div className="skill-card">
        <h3>Frontend</h3>
        <ul className="list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
        </ul>
      </div>
      <div className="skill-card">
        <h3>Backend</h3>
        <ul className="list">
          <li>Node.js</li>
          <li>Express</li>
          <li>Python</li>
          <li>Flask</li>
          <li>RESTful APIs</li>
        </ul>
      </div>
      <div className="skill-card">
        <h3>Professional</h3>
        <ul className="list">
          <li>Remote Pair-Programming</li>
          <li>Teamwork</li>
          <li>Collaboration</li>
          <li>Dev Tools</li>
          <li>Git&Github</li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;
