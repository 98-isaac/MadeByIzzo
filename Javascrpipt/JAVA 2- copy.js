// js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Set active navigation based on current page
    function setActiveNav() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }
    
    setActiveNav();
    
    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.event-card, .mix-card, .skill-card, .portfolio-item, .project-card, .category, .cert-card, .step');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    }
    
    // Set initial state for animation
    document.querySelectorAll('.event-card, .mix-card, .skill-card, .portfolio-item, .project-card, .category, .cert-card, .step').forEach(element => {
        element.style.opacity = "0";
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });
    
    // Run animation on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    setTimeout(animateOnScroll, 100);
    
    // Form handling
    const bookingForm = document.querySelector('.booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your booking request! We will get back to you soon.');
            this.reset();
        });
    }
    
    // Play button functionality for DJ page
    const playButtons = document.querySelectorAll('.play-btn');
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const mixTitle = this.closest('.mix-card').querySelector('h3').textContent;
            const isPlaying = this.textContent === '❚❚';
            
            if (isPlaying) {
                this.textContent = '▶';
                alert(`Paused: ${mixTitle}`);
            } else {
                this.textContent = '❚❚';
                alert(`Now playing: ${mixTitle}`);
            }
        });
    });
    
    // Contact button functionality for design page
    const contactButton = document.querySelector('.contact-button');
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            alert('Please email us at: contact@designstudio.com');
        });
    }
    
    // GitHub button functionality for web page
    const githubButton = document.querySelector('.github-button');
    if (githubButton) {
        githubButton.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Redirecting to GitHub profile...');
            // In a real implementation, this would be: window.location.href = 'https://github.com/username';
        });
    }
    
    // Network visualization animation
    const networkVisual = document.querySelector('.network-visual');
    if (networkVisual) {
        setInterval(() => {
            const connections = document.querySelectorAll('.connection::before');
            connections.forEach(conn => {
                conn.style.animation = 'none';
                setTimeout(() => {
                    conn.style.animation = 'dataFlow 2s linear infinite';
                }, 10);
            });
        }, 2000);
    }
    
    // Code typing effect for web page
    const codeContent = document.querySelector('.code-content');
    if (codeContent) {
        const code = codeContent.textContent;
        codeContent.textContent = '';
        let i = 0;
        
        function typeCode() {
            if (i < code.length) {
                codeContent.textContent += code.charAt(i);
                i++;
                setTimeout(typeCode, 20);
            }
        }
        
        // Start typing after a short delay
        setTimeout(typeCode, 1000);
    }
});