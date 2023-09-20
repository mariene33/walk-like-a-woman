
import React from 'react';
import './Footer.css';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-social">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="social-icon" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="social-icon" />
          </a>
        </div>
        <div className="footer-text">
          <p>&copy; 2023 Walk Like a Woman</p>
          <p>Contacto: www.walklikeawomen.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
