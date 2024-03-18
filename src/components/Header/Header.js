import React from 'react';
import './Header.css';
import logo from '../assets/My Logo.jpg';

const Header = () => (
  <nav className="navBar">
    <img src={logo} alt="Logo" className="logo" />
    <div className="menu" />
    <button type="button" className="Contact">Contact Me</button>
  </nav>
);

export default Header;
