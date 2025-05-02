import { useEffect } from 'react';
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
        <div className="mobile-menu-toggle" id="menuToggle">
          <span></span><span></span><span></span>
        </div>
        <nav className="mobile-nav" id="mobileNav">
          <a href="#projects">Projects</a>
          <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <Link to="/Contact">Contact</Link>
        </nav>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection />

        <div className="scroll-indicator">
          <a href="#projects">Scroll ↓</a>
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
