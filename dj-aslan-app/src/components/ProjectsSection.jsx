import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import '../assets/styles.css';

gsap.registerPlugin(ScrollTrigger);

const restaurantImages = [
  '/images/chef-hall.jpg',
  '/images/jacks.jpg',
  '/images/jacks-eaton.jpg',
  '/images/jacks-vaughan.jpg',
  '/images/pub-on-king.jpg',
];

const projects = [
  {
    title: 'Weddings',
    description: 'Capturing timeless moments.',
    video: '/videos/wedding.mp4',
    link: '/Booking', // will get updated to /weddings-gallery
  },
  {
    title: 'Restaurants',
    description: 'Setting the vibe at top dining locations.',
    isSlider: true,
    link: '/Booking', // will get updated to /restaurants-gallery
  },
  {
    title: 'Night Clubs',
    description: 'Spinning at vibrant nightlife venues.',
    video: '/videos/night-club.mp4',
    link: '/Booking', // will get updated to /night-clubs-gallery
  },
  {
    title: 'Special Events',
    description: 'Making moments unforgettable.',
    image: '/images/special-event.jpg',
    link: '/Booking/', // will get updated to special-events-gallery
  },
  {
    title: 'Concerts / Raves',
    description: 'Bringing energy to massive crowds.',
    image: '/images/rave.jpg',
    link: '/Booking', // will get updated to /concerts-raves-gallery
  },
];

const ProjectsSection = () => {
  const sliderRef = useRef(null);
  const videoRefs = useRef([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect if mobile on mount
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

    // Try to play videos programmatically
    videoRefs.current.forEach((video) => {
      if (video) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            video.muted = true;
            video.play().catch(() => {});
          });
        }
      }
    });

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
              // Replace Night Clubs video with image on mobile only
              project.title === 'Night Clubs' && isMobile ? (
                <img
                  src="/images/the-zoo.png"
                  alt={project.title}
                  className="project-image"
                />
              ) : (
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={project.video}
                  className="project-image"
                  autoPlay
                  loop
                  muted
                  playsInline
                  disableRemotePlayback // 👈 This disables Chromecast
                />
              )
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
