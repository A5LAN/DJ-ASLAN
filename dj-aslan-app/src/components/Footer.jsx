import React from 'react';
import { Link } from 'react-router-dom';
import "../public/assets/styles.css";


const Footer = () => {
  return (
    <footer>
      <div style={{ maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1rem', color: '#333', textAlign: 'center' }}>
        <p>
          A professional DJ for special events and restaurants ready to create an unforgettable experience.
        </p>
        <p>&copy; 2025 Okan Dodanli. All rights reserved.</p>
        <p>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a> |{' '}
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{' '}
          <Link to="/Contact">Contact</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
