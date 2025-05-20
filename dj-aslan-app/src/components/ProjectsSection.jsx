import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../public/assets/styles.css';

gsap.registerPlugin(ScrollTrigger);

const restaurantImages = [
  '/DJ-ASLAN/images/chef-hall.jpg',
  '/DJ-ASLAN/images/jacks.jpg',
  '/DJ-ASLAN/images/jacks-eaton.jpg',
  '/DJ-ASLAN/images/jacks-vaughan.jpg',
  '/DJ-ASLAN/images/pub-on-king.jpg',
];

const projects = [
  {
    title: 'Weddings',
    description: 'Capturing timeless moments.',
    video: '/DJ-ASLAN/videos/wedding.mp4',
    link: '/weddings-gallery',
  },
  {
    title: 'Restaurants',
    description: 'Setting the vibe at top dining locations.',
    isSlider: true,
    link: '/restaurants-gallery',
  },
  {
    title: 'Night Clubs',
    description: 'Spinning at vibrant nightlife venues.',
    video: '/DJ-ASLAN/videos/night-club.mp4',
    link: '/night-clubs-gallery',
  },
  {
    title: 'Special Events',
    description: 'Making special moments unforgettable.',
    image: '/DJ-ASLAN/images/special-event.jpg',
    link: '/special-events-gallery',
  },
  {
    title: 'Concerts / Raves',
    description: 'Bringing energy to massive crowds.',
    image: '/DJ-ASLAN/images/rave.jpg',
    link: '/concerts-raves-gallery',
  },
];

const ProjectsSection = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    let ctx;
    if (sliderRef.current) {
      ctx = gsap.context(() => {
        const slides = gsap.utils.toArray('.slide');
        let current = 0;

        const showSlide = (index) => {
          gsap.to(slides[current], {
            opacity: 0,
            duration: 1,
            zIndex: 0,
          });

          gsap.to(slides[index], {
            opacity: 1,
            duration: 1,
            zIndex: 1,
          });

          current = index;
        };

        const nextSlide = () => {
          const next = (current + 1) % slides.length;
          showSlide(next);
        };

        const interval = setInterval(nextSlide, 3000); // Change image every 3s

        return () => clearInterval(interval);
      }, sliderRef);
    }

    return () => ctx && ctx.revert();
  }, []);

  return (
    <section className="section projects" id="projects">
      {projects.map((project, index) => (
        <Link to={project.link} key={index} className="project">
          <div className="project-media">
            {project.isSlider ? (
              <div className="slider" ref={sliderRef}>
                <div className="slide-track">
                  {restaurantImages.map((imgSrc, i) => (
                    <div
                      className="slide"
                      key={i}
                      style={{ opacity: i === 0 ? 1 : 0 }}
                    >
                      <img
                        src={imgSrc}
                        alt={`Restaurant ${i + 1}`}
                        className="project-image"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : project.video ? (
              <video
                src={project.video}
                className="project-image"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            )}
          </div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </Link>
      ))}
    </section>
  );
};

export default ProjectsSection;