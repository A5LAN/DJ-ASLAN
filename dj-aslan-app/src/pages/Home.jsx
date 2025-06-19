import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import MobileNavBar from '../components/MobileNavBar';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

import "../assets/styles.css";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  // Add 'home' class to <body> on mount, remove on unmount
  useEffect(() => {
    document.body.classList.add('home');
    document.body.style.background = '';
    document.body.style.backgroundAttachment = '';

    return () => {
      document.body.classList.remove('home');
    };
  }, []);

  // Handle Home link click from MobileNavBar (reload if on home)
  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      navigate('/');
    }
  };

  return (
    <>
      <MobileNavBar onHomeClick={handleHomeClick} />
      <main className="pt-20">
        <HeroSection />
        <ProjectsSection />
      </main>
      <Footer />
    </>
  );
}

export default Home;
