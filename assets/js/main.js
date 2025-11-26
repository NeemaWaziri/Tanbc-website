// TanBC Website - Main JavaScript

/**
 * Initialize Lucide Icons
 * Lucide icons are loaded from CDN and need to be initialized
 */
function initIcons() {
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
}

/**
 * Setup smooth scrolling for anchor links
 * All links starting with # will smoothly scroll to their target
 */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
}

/**
 * Setup Intersection Observer for fade-in animations
 * Elements will fade in when they come into view
 */
function setupScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all section children
  document.querySelectorAll('section > div').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });
}

/**
 * Initialize all functionality when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function() {
  initIcons();
  setupSmoothScroll();
  setupScrollAnimations();
});
