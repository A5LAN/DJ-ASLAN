import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Import components
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';
import "../public/assets/styles.css";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const [menuOpen, setMenuOpen] = useState(false); // State to track the menu's visibility

  // Toggle the menu when the hamburger icon is clicked
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState); // Toggle between open and closed
  };

  // Smooth scroll functionality
  const handleScroll = (event, targetId) => {
    event.preventDefault(); // Prevent default anchor link behavior
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    gsap.to('.hero-left', {
      scrollTrigger: {
        trigger: '.hero-left',
        start: 'top center',
      },
      x: 0,
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <>
      {/* Existing Mobile Header */}
      <header className="mobile-header md:hidden">
        <div className="mobile-logo">DJ ASLAN</div>
        <div className="mobile-menu-toggle" id="menuToggle" onClick={toggleMenu}>
          <span></span><span></span><span></span>
        </div>
        <nav className={`mobile-nav ${menuOpen ? 'active' : ''}`} id="mobileNav">
          <a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a>
          <a href="#form" onClick={(e) => handleScroll(e, 'form')}>Form</a>
          <a href="#mixes" onClick={(e) => handleScroll(e, 'mixes')}>Mixes</a>
          <a href="#gallery" onClick={(e) => handleScroll(e, 'gallery')}>Gallery</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <Link to="/Contact">Contact</Link>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection />

        <div className="scroll-indicator">
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Scroll ↓</a>
        </div>

        {/* Projects Section */}
        <ProjectsSection />
      </main>

      {/* Footer Section */}
      <Footer />
    </>
  );
}

export default Home;
