import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../assets/styles.css';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const heroRef = useRef(null);
  const slideRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hero-left',
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          scrollTrigger: {
            trigger: '.hero-left',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Simple auto slider effect
  useEffect(() => {
    const slides = slideRef.current?.children;
    if (!slides || slides.length === 0) return;

    let current = 0;
    const interval = setInterval(() => {
      slides[current].style.opacity = 0;
      current = (current + 1) % slides.length;
      slides[current].style.opacity = 1;
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-container" ref={heroRef}>
      <div className="hero-left">
        <div className="hero-content">
          <div className="hero-left-top">
            <h1>DJ ASLAN</h1>
          </div>
          <div className="hero-left-bottom">
            <p>
              A professional DJ for special events and restaurants ready to create an unforgettable experience.
            </p>
            <Link to="/Booking" className="book-button">
              Book Now
            </Link>
          </div>
        </div>
      </div>

      <div className="hero-right">
        <div className="slider">
          <div className="slide-track" ref={slideRef}>
            <div className="slide" style={{ opacity: 1 }}>
              <img src="/images/djing-blur.jpg" alt="DJ ASLAN in action" />
            </div>
            <div className="slide">
              <img src="/images/djing-blur2.jpg" alt="DJ with the crowd" />
            </div>
            <div className="slide">
              <img src="/images/djing-blur3.jpg" alt="Lighting setup at event" />
            </div>
            <div className="slide">
              <img src="/images/djing-bracelet.jpg" alt="DJ bracelet and gear" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
