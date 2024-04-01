import React, { useEffect, useRef } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import Typed from 'typed.js';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// eslint-disable-next-line import/no-extraneous-dependencies
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Intro.css';

const Intro = () => {
  const typedText = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'a full-stack developer',
        'a front-end developer',
        'a back-end developer',
        'a software developer',
      ],
      typeSpeed: 80,
      loop: true,
      backSpeed: 30,
    };

    const typed = new Typed(typedText.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="homepage" id="home">
      <div className="homepage-content">
        <h1>Hi, I&apos;m Abdelhakim Zayan</h1>
        <p className="me">
          <span ref={typedText} />
        </p>
        <p className="about-me">
          A passionate Full Stack Developer, crafting seamless web applications.
          <br />
          I&apos;ve spent
          over 1300+ hours mastering JavaScript, React, Ruby on Rails, and more.
          <br />
          Collaborative and driven by learning, I&apos;m excited to tackle new
          challenges and elevate digital landscapes.
          <br />
          Explore my work and let&apos;s connect to shape innovative tech
          ventures!
        </p>
        <div className="socials">
          <a
            href="https://github.com/abdozayan12"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/abdozayan/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
