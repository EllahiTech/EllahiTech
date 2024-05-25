import React, { useState } from 'react';
import LightDarkModeToggle from './Light&Dark';
import { FaBars, FaTimes } from 'react-icons/fa';

import './Navbar.css';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleClick = (e, id) => {
    e.preventDefault();
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const additionalSpace = 20;
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - navbarHeight - additionalSpace,
        behavior: 'smooth'
      });
      setShowMobileMenu(false);
    }
  };

  return (
    <nav className="navbar">
      {showMobileMenu && (
        <FaTimes
          className="mobile-menu-icon"
          onClick={() => setShowMobileMenu(false)}
        />
      )}
      {!showMobileMenu && (
        <FaBars
          className="mobile-menu-icon"
          onClick={() => setShowMobileMenu(true)}
        />
      )}
        <a className='homepage' href='#home' onClick={(e) => handleClick(e, 'home')}>
          <div className="navbar-logo">
            {/* <img src="/logo.png" alt="Logo" /> */}
              <span>EllahiTech</span>
          </div>
        </a>
      <div className={`navbar-links ${showMobileMenu ? 'mobile-menu-open' : ''}`}>
        <a href="#offers" onClick={(e) => handleClick(e, 'offers')}>Offers</a>
        <a href="#Why Us" onClick={(e) => handleClick(e, 'Why Us')}>Why Us</a>
        <a href="#services" onClick={(e) => handleClick(e, 'services')}>Our Services</a>
        <a href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contact</a>
      </div>
      <div className='theme-toggle'>
        <LightDarkModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
