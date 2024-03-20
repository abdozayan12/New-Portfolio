import React from 'react';
import './Header.css';
import logo from '../assets/My Logo.jpg';

const Header = () => (
  <nav className="navBar">
    <img src={logo} alt="Logo" className="logo" />
    <div className="menu">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#portfolio">Projects</a>
    </div>
    <button type="button" className="Contact">Contact Me</button>
  </nav>
);

export default Header;
