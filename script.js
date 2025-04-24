document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // Scroll Animation for all sections
  gsap.utils.toArray("section").forEach(section => {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out"
    });
  });

  // Mobile menu toggle logic with accessibility
  const menuToggle = document.getElementById('menuToggle');
  const mobileNav = document.getElementById('mobileNav');

  if (menuToggle && mobileNav) {
    menuToggle.setAttribute('aria-expanded', 'false');

    menuToggle.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('active');
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Hero Slider Animation
  const slides = gsap.utils.toArray(".slide");
  let currentSlideIndex = 0;

  slides.forEach(slide => gsap.set(slide, { x: "100%", opacity: 0 }));
  gsap.set(slides[0], { x: "0%", opacity: 1 });

  function showSlide(index) {
    const previous = slides[(index - 1 + slides.length) % slides.length];
    const current = slides[index];

    gsap.to(previous, {
      x: "-100%",
      opacity: 0,
      duration: 0.5,
      ease: "power1.inOut"
    });

    gsap.fromTo(current,
      { x: "100%", opacity: 0 },
      {
        x: "0%",
        opacity: 1,
        duration: 1.2,
        ease: "power2.inOut"
      }
    );
  }

  function advanceSlide() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    showSlide(currentSlideIndex);
  }

  const sliderInterval = setInterval(advanceSlide, 4000);

  window.addEventListener('beforeunload', () => clearInterval(sliderInterval));

  // Hero Content Animation
  const h1 = document.querySelector('.hero-left-top h1');
  const paragraph = document.querySelector('.hero-left-bottom p');
  const bookButton = document.querySelector('.book-button');

  if (h1) {
    gsap.from(h1, {
      x: -100,
      opacity: 0,
      duration: 2.2,
      ease: "power3.out",
      delay: 1.4
    });
  }

  if (paragraph) {
    gsap.from(paragraph, {
      opacity: 0,
      duration: 2.2,
      ease: "power2.out",
      delay: 1.4
    });
  }

  if (bookButton) {
    gsap.fromTo(bookButton,
      {
        y: 50,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.4,
        ease: "power2.out",
        delay: 1.2
      }
    );
  }

  // Remove splash screen after animation
  setTimeout(() => {
    const splash = document.querySelector('.splash-screen');
    splash && splash.remove();
  }, 3500);
});
