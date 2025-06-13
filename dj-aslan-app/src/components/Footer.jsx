import React from 'react';
import { Link } from 'react-router-dom';
import "../assets/styles.css";


const Footer = () => {
  return (
    <footer>
      <div style={{ maxWidth: '700px', margin: '0 auto 2rem', fontSize: '1rem', color: '#333', textAlign: 'center' }}>
        <p>
          Professional DJ services for special events and venues, crafting unforgettable experiences every time.
        </p>
        <p>&copy; 2025 Okan Dodanli. All rights reserved.</p>
        <p>
          <a href="https://www.instagram.com/_djaslan/" target="_blank" rel="noopener noreferrer">Instagram</a> |{' '}
          <a href="https://www.mixcloud.com/aslangroup/" target="_blank" rel="noopener noreferrer">MixCloud</a> |{' '}
          <a href="https://linktr.ee/aslangroup" target="_blank" rel="noopener noreferrer">Contact</a> |{' '}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
