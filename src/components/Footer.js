import React from 'react';
import { FaHeart } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>
            Made with <FaHeart className="heart-icon" /> by{' '}
            <span className="gradient-text">Shivam Sharma</span>
          </p>
          <p>&copy; 2024 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
