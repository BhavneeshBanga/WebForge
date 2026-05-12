document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    }
  });

  // Smooth Scroll for Anchor Links
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.offsetTop - headerHeight - 20;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Scroll-triggered Animations (IntersectionObserver)
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe elements for animation
  const animateElements = document.querySelectorAll('.feature-card, .model-card, .tech-item, .testimonial-card, .impact-counter');
  animateElements.forEach(el => observer.observe(el));

  // Animated Counters for Sustainability Metrics
  const counters = document.querySelectorAll('.impact-number');
  const animateCounter = (counter) => {
    const target = +counter.getAttribute('data-target');
    const increment = target / 50;
    let current = 0;
    
    const updateCounter = () => {
      current += increment;
      if (current < target) {
        counter.textContent = Math.floor(current).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        counter.textContent = target.toLocaleString();
      }
    };
    updateCounter();
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
        animateCounter(entry.target);
        entry.target.classList.add('counted');
      }
    });
  }, observerOptions);

  counters.forEach(counter => counterObserver.observe(counter));

  // Testimonial Carousel
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.querySelector('.testimonial-prev');
  const nextBtn = document.querySelector('.testimonial-next');
  let currentSlide = 0;

  const initCarousel = () => {
    testimonialCards.forEach(card => card.style.display = 'none');
    testimonialCards[currentSlide].style.display = 'block';
    
    setInterval(() => {
      testimonialCards[currentSlide].style.display = 'none';
      currentSlide = (currentSlide + 1) % testimonialCards.length;
      testimonialCards[currentSlide].style.display = 'block';
    }, 5000);
  };

  prevBtn.addEventListener('click', () => {
    testimonialCards[currentSlide].style.display = 'none';
    currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
    testimonialCards[currentSlide].style.display = 'block';
  });

  nextBtn.addEventListener('click', () => {
    testimonialCards[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % testimonialCards.length;
    testimonialCards[currentSlide].style.display = 'block';
  });

  // Parallax Effect for Hero Section
  const heroVisual = document.querySelector('.hero-visual');
  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (heroVisual) {
      heroVisual.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
  });

  // Form Validation for Test Drive Booking
  const bookingForm = document.querySelector('.test-drive-form');
  if (bookingForm) {
    const inputs = bookingForm.querySelectorAll('input');
    
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        if (input.value) {
          if (input.type === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
              input.classList.add('error');
            } else {
              input.classList.remove('error');
            }
          } else if (input.type === 'tel') {
            const phoneRegex = /^[\d\s\-\+\(\)]+$/;
            if (!phoneRegex.test(input.value) || input.value.replace(/\D/g, '').length < 10) {
              input.classList.add('error');
            } else {
              input.classList.remove('error');
            }
          }
        }
      });
    });

    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const isValid = Array.from(inputs).every(input => !input.classList.contains('error'));
      if (isValid) {
        // Show success message
        const successMsg = document.createElement('div');
        successMsg.className = 'success-message';
        successMsg.textContent = 'Booking confirmed! We\'ll contact you shortly.';
        bookingForm.appendChild(successMsg);
        setTimeout(() => successMsg.remove(), 5000);
      } else {
        // Show error message
        const errorMsg = document.createElement('div');
        errorMsg.className = 'error-message';
        errorMsg.textContent = 'Please fill in all fields correctly.';
        bookingForm.appendChild(errorMsg);
        setTimeout(() => errorMsg.remove(), 5000);
      }
    });
  }

  // CTA Countdown Timer
  const countdownTimer = document.querySelector('.countdown-timer');
  if (countdownTimer) {
    const targetDate = new Date().getTime() + (30 * 24 * 60 * 60 * 1000); // 30 days from now
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;
      
      if (distance < 0) {
        countdownTimer.textContent = '00:00:00';
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        countdownTimer.textContent = 
          `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      }
    };
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // Dynamic Active Navigation Link
  const sections = document.querySelectorAll('section[id]');
  const navLinksList = document.querySelectorAll('.nav-links a');
  
  const highlightActiveLink = () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinksList.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };
  
  window.addEventListener('scroll', highlightActiveLink);
  highlightActiveLink(); // Call once on load

  // Vehicle Showcase Animation
  const vehicleModels = document.querySelectorAll('.vehicle-model');
  const animateVehicles = () => {
    vehicleModels.forEach((vehicle, index) => {
      const rotation = (index * 45) % 360;
      vehicle.style.transform = `rotate(${rotation}deg)`;
      vehicle.style.animation = `shimmer 3s ease-in-out infinite`;
    });
  };
  
  animateVehicles();
  setInterval(animateVehicles, 5000);
});