import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Mi Sitio</div>
      <div className={`menu-toggle ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <li><a href="/">Aventurate</a></li>
        <li><a href="/acerca">Inspirate</a></li>
        <li><a href="/servicios">Ayudame</a></li>
        <li><a href="/contacto">Cerrar sesión</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
