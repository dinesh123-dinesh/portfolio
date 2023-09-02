// Function to toggle the navigation menu on small screens
function toggleMenu() {
    const navigationMenu = document.querySelector('.navigation-menu .menu');
    navigationMenu.classList.toggle('show');
}

// Function to handle smooth scrolling
function scrollToSection(targetId) {
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
        const navHeight = document.querySelector('.navigation-menu').offsetHeight;
        window.scrollTo({
            top: targetSection.offsetTop - navHeight,
            behavior: 'smooth'
        });
    }
}

// Event listener for menu toggle button
const menuToggle = document.querySelector('.menu-toggle');
if (menuToggle) {
    menuToggle.addEventListener('click', toggleMenu);
}

// Event listeners for navigation links
const navigationLinks = document.querySelectorAll('.menu a');
navigationLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});
