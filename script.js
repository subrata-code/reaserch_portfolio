// script.js

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
  
  // Reveal sections on scroll
  const sections = document.querySelectorAll('section');
  function revealSections() {
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        sec.classList.add('visible');
      }
    });
  }
  window.addEventListener('scroll', revealSections);
  // Initial reveal on page load
  window.addEventListener('load', revealSections);
  