import React from 'react';

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-logo">
            <img src="url(./images/logo.png)" alt="logo" />
          </div>
          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#portfolio">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-social">
            <ul>
              <li><a href="https://github.com/abdozayan12" aria-label="Github"><i className="fab fa-Github" /></a></li>
              <li><a href="https://www.linkedin.com/in/abdozayan/" aria-label="LinkedIn"><i className="fab fa-linkedin" /></a></li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Footer;
