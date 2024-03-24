import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
import logo from '../assets/My Logo.jpg';

function Header() {
  const menuIcon = useRef();

  return (
    <section className="fixed">
      <nav className="navBar" ref={menuIcon}>
        <div>
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Projects</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="CV">
          <a href="https://drive.google.com/file/d/1gnCYa93ft0sJdpm4BpnEwZ6ZBRhK8wqJ/view?usp=sharing" target="_blank" rel="noreferrer">Get my CV</a>
        </div>
        <button type="button" className="menu-icon" aria-label="close menu">
          <FaTimes />
        </button>
      </nav>
      <button type="button" className="menu-icon" aria-label="Open menu"><FaBars /></button>
    </section>

  );
}
export default Header;
