import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import "../assets/styles.css";

function MobileNavBar({ onHomeClick }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(prev => !prev);
  };

  const handleHomeLinkClick = (e) => {
    setMenuOpen(false);
    if (location.pathname === '/') {
      e.preventDefault();
      if (onHomeClick) onHomeClick();
    } else {
      if (onHomeClick) onHomeClick();
    }
  };

  return (
    <header className="mobile-header md:hidden">
      <div className="mobile-logo">DJ ASLAN</div>
      <div className="mobile-menu-toggle" id="menuToggle" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav className={`mobile-nav ${menuOpen ? 'active' : ''}`} id="mobileNav">
        <Link to="/" onClick={handleHomeLinkClick}>
          Home
        </Link>
        <Link to="/Booking" onClick={() => setMenuOpen(false)}>
          Book Now
        </Link>
        <a href="https://www.instagram.com/_djaslan/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
          Instagram
        </a>
        <a href="https://www.mixcloud.com/aslangroup/" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
          MixCloud
        </a>
        <a href="https://aslangroup.ca/contact" target="_blank" rel="noopener noreferrer" onClick={() => setMenuOpen(false)}>
          Contact
        </a>
      </nav>
    </header>
  );
}

export default MobileNavBar;
