import { useState, useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
import logo from '../assets/My Logo.jpg';

function Header() {
  const menu = useRef();
  const [activeLink, setActiveLink] = useState('#home');

  const toggleMenu = (e) => {
    setActiveLink(e.target.getAttribute('href'));
    menu.current.classList.toggle('active');
  };

  return (
    <section className="fixed">
      <nav className="navBar" ref={menu}>
        <div>
          <a href="#home" className="logo"><img src={logo} alt="Logo" className="logo" /></a>

        </div>
        <div className="menu">
          <div className="menu">
            <a href="#home" className={`menu-link ${activeLink === '#home' ? 'active' : ''}`} onClick={toggleMenu}>Home</a>
            <a href="#about" className={`menu-link ${activeLink === '#about' ? 'active' : ''}`} onClick={toggleMenu}>About</a>
            <a href="#Projects" className={`menu-link ${activeLink === '#Projects' ? 'active' : ''}`} onClick={toggleMenu}>Projects</a>
            <a href="#contact" className={`menu-link ${activeLink === '#contact' ? 'active' : ''}`} onClick={toggleMenu}>Contact</a>
          </div>
        </div>
        <div className="CV">
          <a href="https://drive.google.com/file/d/1gnCYa93ft0sJdpm4BpnEwZ6ZBRhK8wqJ/view?usp=sharing" target="_blank" rel="noreferrer">Get my CV</a>
        </div>
        <div className="menu-icon">
          <button type="button" className="menuIcon" aria-label="Open menu" onClick={toggleMenu}>
            <FaBars />
          </button>
          <button type="button" className="closeIcon" aria-label="close menu" onClick={toggleMenu}>
            <FaTimes />
          </button>
        </div>

      </nav>

    </section>
  );
}
export default Header;
