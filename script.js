// JavaScript to toggle navigation menu on small screens
const menuToggle = document.querySelector('.menu-toggle');
const navigationMenu = document.querySelector('.navigation-menu .menu');

menuToggle.addEventListener('click', () => {
    navigationMenu.classList.toggle('show');
});

// JavaScript for smooth scrolling when clicking on navigation links
document.querySelectorAll('.menu a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop - document.querySelector('.navigation-menu').offsetHeight,
            behavior: 'smooth'
        });
    });
});





