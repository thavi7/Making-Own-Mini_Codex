// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        // Close mobile menu after clicking a link
        if (window.innerWidth <= 992) {
            const navList = document.querySelector('nav ul');
            const burgerMenu = document.querySelector('.burger-menu');
            navList.classList.remove('active');
            burgerMenu.classList.remove('active');
        }
    });
});

// Burger menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const burgerMenu = document.querySelector('.burger-menu');
    const navList = document.querySelector('nav ul');

    burgerMenu.addEventListener('click', () => {
        navList.classList.toggle('active');
        burgerMenu.classList.toggle('active');
    });

    // Close the menu if clicked outside on mobile
    document.addEventListener('click', (event) => {
        if (window.innerWidth <= 992 && !navList.contains(event.target) && !burgerMenu.contains(event.target)) {
            navList.classList.remove('active');
            burgerMenu.classList.remove('active');
        }
    });

    // Close menu when resizing from mobile to desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth > 992) {
            navList.classList.remove('active');
            burgerMenu.classList.remove('active');
        }
    });

    // Add intersection observer for fade-in effect on sections
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Trigger when 15% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.classList.add('hidden'); // Add hidden class initially
        sectionObserver.observe(section);
    });

    // Add a simple active class for burger menu bars for animation
    // This will be handled purely with CSS for transform animations
});

// Add CSS for fade-in effect in style.css
/*
.hidden {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.fade-in {
    opacity: 1;
    transform: translateY(0);
}
*/