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
      // Scroll-triggered fade-ups
      gsap.utils.toArray('section').forEach((section) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
        });
      });

      // Hero content animations
      gsap.from('.hero-left-top h1', {
        x: -100,
        opacity: 0,
        duration: 2.2,
        ease: 'power3.out',
        delay: 1.4,
      });

      gsap.from('.hero-left-bottom p', {
        opacity: 0,
        duration: 2.2,
        ease: 'power2.out',
        delay: 1.4,
      });

      gsap.fromTo(
        '.book-button',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: 'power2.out',
          delay: 1.2,
        }
      );

      // Slider animation
      const slides = gsap.utils.toArray('.slide');
      let currentSlideIndex = 0;

      gsap.set(slides, { opacity: 0 });
      gsap.set(slides[0], { x: '100%', opacity: 1 }); // Start the first image from the right

      let isFirstTransition = true;

      function showSlide(index) {
        const prev = slides[(index - 1 + slides.length) % slides.length];
        const current = slides[index];

        if (isFirstTransition) {
          gsap.to(prev, {
            x: '-100%',
            opacity: 0,
            duration: 0.6,
            ease: 'power2.inOut',
          });
          gsap.fromTo(
            current,
            { x: '100%', opacity: 0 },
            {
              x: '0%',
              opacity: 1,
              duration: 1.2,
              ease: 'power2.out',
            }
          );
          isFirstTransition = false;
        } else {
          gsap.to(prev, {
            opacity: 0,
            duration: 1.4,
            ease: 'power1.out',
          });
          gsap.to(current, {
            opacity: 1,
            duration: 1.4,
            ease: 'power1.out',
          });
        }
      }

      const interval = setInterval(() => {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        showSlide(currentSlideIndex);
      }, 4000);

      return () => clearInterval(interval);
    }, heroRef);

    return () => ctx.revert();
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
              A professional DJ for special events and restaurants ready to
              create an unforgettable experience.
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
            <div className="slide">
              <img
                src="../src/assets/images/djing-blur.jpg"
                alt="DJ ASLAN in action"
                loading="lazy"
              />
            </div>
            <div className="slide">
              <img
                src="../src/assets/images/djing-blur2.jpg"
                alt="DJ with the crowd"
                loading="lazy"
              />
            </div>
            <div className="slide">
              <img
                src="../src/assets/images/djing-blur3.jpg"
                alt="Lighting setup at event"
                loading="lazy"
              />
            </div>
            <div className="slide">
              <img
                src="../src/assets/images/djing-bracelet.jpg"
                alt="DJ bracelet and gear"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
