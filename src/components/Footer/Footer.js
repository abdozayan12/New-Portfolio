import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/My Logo.jpg';

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <a href="#home" className="logo"><img src={logo} alt="Logo" className="logo" /></a>
          </div>
          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#portfolio">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-socials">
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
      </footer>

    </div>
  );
}

export default Footer;
