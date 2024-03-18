import React from 'react';
import './Header.css';

const Header = () => (
  <nav className="navBar">
    <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" alt="Docplanner Group" />
    <div className="menu" />
    <button type="button" className="Contact">Contact Me</button>
  </nav>
);

export default Header;
