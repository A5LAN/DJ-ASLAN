import React from "react";
import "../assets/DesktopNavbar.css"; // Adjust path if needed

const DesktopNavbar = () => {
  return (
    <div id="mainNavigation">
      {/* Logo Section removed */}

      {/* Nav Menu */}
      <div className="nav-wrapper">
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="https://www.instagram.com/_djaslan/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://www.mixcloud.com/aslangroup/" target="_blank" rel="noopener noreferrer">Mixes</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="#">Gallery</a></li>
        </ul>
      </div>
    </div>
  );
};

export default DesktopNavbar;
