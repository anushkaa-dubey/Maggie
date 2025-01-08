// script.js

document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a');
    const heroText = document.querySelector('.hero-text h1');

    // Hover animation for nav links
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)';
        });

        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });

    // Hero text animation
    heroText.style.opacity = '0';
    heroText.style.transform = 'translateY(20px)';

    setTimeout(() => {
        heroText.style.transition = 'all 1s ease';
        heroText.style.opacity = '1';
        heroText.style.transform = 'translateY(0)';
    }, 500);
});
//STUDENT RECIPES 
// Adding smooth scroll animation for navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

