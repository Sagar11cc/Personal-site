// Mobile menu toggle
function toggleMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
        console.log('Toggle menu clicked'); // For debugging
    }
}

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
        }
    });
});

// Parallax effect
window.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.bg-fixed');
    parallaxElements.forEach(element => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.3;
        element.style.transform = `translate3d(0px, ${rate}px, 0px)`;
    });
});

// Enhanced intersection observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            if (entry.target.classList.contains('skill-card')) {
                entry.target.style.transitionDelay = `${Math.random() * 0.5}s`;
            }
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .skill-card, .project-card').forEach((element) => {
    observer.observe(element);
}); 