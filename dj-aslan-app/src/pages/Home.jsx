import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../assets/styles.css';

gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    gsap.to('.hero-left', {
      scrollTrigger: {
        trigger: '.hero-left',
        start: 'top center',  // Trigger when the top of .hero-left hits the center of the viewport
      },
      x: 0,
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <>
      <header className="mobile-header">
        <div className="mobile-logo">DJ ASLAN</div>
        <div className="mobile-menu-toggle" id="menuToggle">
          <span></span><span></span><span></span>
        </div>
        <nav className="mobile-nav" id="mobileNav">
          <a href="#projects">Projects</a>
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <div className="hero-container">
        <div className="hero-left">
          <div className="hero-content">
            <div className="hero-left-top">
              <h1>DJ ASLAN</h1>
            </div>
            <div className="hero-left-bottom">
              <p>A professional DJ for special events and restaurants ready to create an unforgettable experience.</p>
              <Link to="/booking" className="book-button">Book Now</Link>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="slider">
            <div className="slide"><img src="/images/djing-blur.jpg" alt="DJ ASLAN in action" /></div>
            <div className="slide"><img src="/images/djing-blur2.jpg" alt="DJ with the crowd" /></div>
            <div className="slide"><img src="/images/djing-blur3.jpg" alt="Lighting setup at event" /></div>
            <div className="slide"><img src="/images/djing-bracelet.jpg" alt="DJ bracelet and gear" /></div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator"><a href="#projects">Scroll ↓</a></div>

      <section id="projects" className="section">
        <h2>Featured Projects</h2>
        <div className="projects">
          <div className="project">Project One</div>
          <div className="project">Project Two</div>
          <div className="project">Project Three</div>
        </div>
      </section>

      <footer>
        <p style={{ maxWidth: '700px', margin: '0 auto 2rem auto', fontSize: '1rem', color: '#333' }}>
          A professional DJ for special events and restaurants ready to create an unforgettable experience.
        </p>
        <p>&copy; 2025 Okan Dodanli. All rights reserved.</p>
        <p>
          <a href="#">Instagram</a> | <a href="#">LinkedIn</a> | <a href="#">Contact</a>
        </p>
      </footer>
    </>
  );
}

export default Home;
