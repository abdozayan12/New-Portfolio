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
      <a href="#contact">Contact</a>
    </div>
    <button type="button" className="CV">
      <a href="https://drive.google.com/file/d/1gnCYa93ft0sJdpm4BpnEwZ6ZBRhK8wqJ/view?usp=sharing" target="_blank" rel="noreferrer">Get my CV</a>
    </button>
  </nav>
);

export default Header;
