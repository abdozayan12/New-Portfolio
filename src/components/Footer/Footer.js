import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/My Logo.jpg';
import './Footer.css';

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <a href="#home" className="logo"><img src={logo} alt="Logo" className="logo" /></a>
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
          <div className="footer-copy">
            <p>&copy; 2024 Abdo Zayan. All rights reserved.</p>
          </div>
        </div>

      </footer>

    </div>
  );
}

export default Footer;
