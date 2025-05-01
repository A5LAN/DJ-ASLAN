import React from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import 'src/assets/styles.css';


// Import GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  // Add GSAP animation inside the component
  React.useEffect(() => {
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
    <section className="hero-container">
      <div className="hero-left">
        <div className="hero-content">
          <div className="hero-left-top">
            <h1>DJ ASLAN</h1>
          </div>
          <div className="hero-left-bottom">
            <p>
              A professional DJ for special events and restaurants ready to create an unforgettable experience.
            </p>
            <Link to="/Booking" className="book-button">Book Now</Link>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="slider">
          <div className="slide">
            <img src="public/images/djing-blur.jpg" alt="DJ ASLAN in action" />
          </div>
          <div className="slide">
            <img src="public/images/djing-blur2.jpg" alt="DJ with the crowd" />
          </div>
          <div className="slide">
            <img src="public/images/djing-blur3.jpg" alt="Lighting setup at event" />
          </div>
          <div className="slide">
            <img src="public/images/djing-bracelet.jpg" alt="DJ bracelet and gear" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
