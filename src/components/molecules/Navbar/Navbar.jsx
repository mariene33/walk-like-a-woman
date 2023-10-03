// Navbar.js
import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">WLW</div>
      <div className="nav-links">
        <ul className={`nav-list ${isOpen ? 'open' : ''}`}>
          <li><a href="/">Aventurate</a></li>
          <li><a href="/Ispirate">Inspirate</a></li>
          <li><a href="/Walk Like a Woman PROJECT">Mi vuelta al mundo</a></li>
          <li><a href="/Mi perfil">Mi perfil</a></li>
          <li><a href="/Cerrar sesión">Cerrar sesión</a></li>
        </ul>
        <div className={`menu-button ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


