// Initialize AOS (Animate On Scroll)
AOS.init({
  offset: 120,
  delay: 0,
  duration: 700,
  easing: 'ease-in-out',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

// Theme Switch Functionality
document.addEventListener('DOMContentLoaded', function() {
  // Check for saved theme preference or use default dark theme
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.body.classList.toggle('light-theme', savedTheme === 'light');
  
  // Update checkbox state based on current theme
  document.getElementById('theme-switch').checked = savedTheme === 'light';
  
  // Theme switch event listener
  document.getElementById('theme-switch').addEventListener('change', function() {
    if (this.checked) {
      document.body.classList.add('light-theme');
      localStorage.setItem('theme', 'light');
      
      // Update particles color for light theme
      if (window.pJSDom && window.pJSDom[0]) {
        window.pJSDom[0].pJS.particles.color.value = '#7c3aed';
        window.pJSDom[0].pJS.particles.line_linked.color = '#7c3aed';
        window.pJSDom[0].pJS.fn.particlesRefresh();
      }
    } else {
      document.body.classList.remove('light-theme');
      localStorage.setItem('theme', 'dark');
      
      // Update particles color for dark theme
      if (window.pJSDom && window.pJSDom[0]) {
        window.pJSDom[0].pJS.particles.color.value = '#8b5cf6';
        window.pJSDom[0].pJS.particles.line_linked.color = '#8b5cf6';
        window.pJSDom[0].pJS.fn.particlesRefresh();
      }
    }
  });
  
  // Initialize particles.js
  if (document.getElementById('particles-js')) {
    // Load particles with appropriate colors based on theme
    const particleColor = document.body.classList.contains('light-theme') ? '#7c3aed' : '#8b5cf6';
    
    particlesJS("particles-js", {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": particleColor
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          }
        },
        "opacity": {
          "value": 0.5,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": true,
            "speed": 2,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": particleColor,
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 2,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": true,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true
    });
  }
  
  // Set up typing animation
  if (document.querySelector('.typing-animation')) {
    const options = {
      strings: ['SOFTWARE DEVELOPER', 'DATA ANALYST', 'WEB DESIGNER', 'ML ENTHUSIAST'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 2000,
      startDelay: 500,
      loop: true,
    };
    
    new Typed('.typing-animation', options);
  }
  
  // Initialize skill progress bars animation
  const progressBars = document.querySelectorAll('.progress-bar');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        const width = progressBar.getAttribute('data-value');
        progressBar.style.width = width;
      }
    });
  }, { threshold: 0.2 });
  
  progressBars.forEach(bar => {
    observer.observe(bar);
  });
  
  // Custom cursor effect
  const cursor = document.createElement('div');
  cursor.className = 'cursor-effect';
  document.body.appendChild(cursor);
  
  document.addEventListener('mousemove', function(e) {
    cursor.classList.add('active');
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  
  document.addEventListener('mouseout', function() {
    cursor.classList.remove('active');
  });
  
  // Add hover effect to all links and buttons
  const interactiveElements = document.querySelectorAll('a, button, .nav-link, .card-custom');
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
      cursor.classList.add('hover');
    });
    element.addEventListener('mouseleave', function() {
      cursor.classList.remove('hover');
    });
  });
  
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
        
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(navLink => {
          navLink.classList.remove('active');
        });
        this.classList.add('active');
      }
    });
  });
  
  // Navbar active state on scroll
  window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navHeight = 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop - navHeight;
      const sectionHeight = section.offsetHeight;
      
      if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    document.querySelectorAll('.nav-link').forEach(navLink => {
      navLink.classList.remove('active');
      if (navLink.getAttribute('href') === '#' + current) {
        navLink.classList.add('active');
      }
    });
    
    // Add parallax effect to profile image
    const profileImg = document.querySelector('.profilepic');
    if (profileImg) {
      const scrollPosition = window.pageYOffset;
      profileImg.style.transform = `translateY(${scrollPosition * 0.03}px) rotate(${scrollPosition * 0.01}deg)`;
    }
  });
  
  // Add 3D tilt effect to project cards
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const cardRect = this.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      
      const angleX = (e.clientY - cardCenterY) / 15;
      const angleY = (cardCenterX - e.clientX) / 15;
      
      this.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  });
  
  // Initialize contact form with validation and animation
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Add success animation
      const submitBtn = this.querySelector('button[type="submit"]');
      submitBtn.innerHTML = '<i class="las la-check"></i> Message Sent!';
      submitBtn.classList.add('btn-success');
      
      // Reset form fields
      setTimeout(() => {
        this.reset();
        submitBtn.innerHTML = 'Send Message';
        submitBtn.classList.remove('btn-success');
      }, 3000);
    });
  }
});