import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import DesktopNavbar from '../components/DesktopNavbar';  // Desktop navigation
import MobileNavBar from '../components/MobileNavBar';    // Mobile navigation
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import Footer from '../components/Footer';

import "../assets/styles.css";
import "../assets/DesktopNavbar.css";

gsap.registerPlugin(ScrollTrigger);

function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add('home');
    document.body.style.background = '';
    document.body.style.backgroundAttachment = '';

    return () => {
      document.body.classList.remove('home');
    };
  }, []);

  // Reloads home page if already on it
  const handleHomeClick = () => {
    if (location.pathname === '/') {
      window.location.reload();
    } else {
      navigate('/');
    }
  };

  return (
    <>
      {/* Desktop and mobile navbars */}
      <DesktopNavbar />                                {/* Visible on desktop via CSS */}
      <MobileNavBar onHomeClick={handleHomeClick} />   {/* Visible on mobile via CSS */}
        <HeroSection />
        <ProjectsSection />

      <Footer />
    </>
  );
}

export default Home;
