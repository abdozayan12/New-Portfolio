import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
import logo from '../assets/My Logo.jpg';

function Header() {
  const menu = useRef();

  const toggleMenu = () => {
    menu.current.classList.toggle('active');
  };

  return (
    <section className="fixed">
      <nav className="navBar" ref={menu}>
        <div>
          <a href="#home" className="logo"><img src={logo} alt="Logo" className="logo" /></a>

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
