import React from 'react';
import '../styles/Header.css';

const Header = () => (
  <section className="header">
    <nav className="header-comp">
      <ul>
        <li><a href="#About">About</a></li>
        <li><a href="#Projects">Projects</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      <div className="humburger">
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
    </nav>
  </section>
);

export default Header;
