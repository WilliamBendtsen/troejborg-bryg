const toggleButton = document.querySelector('.toggle-button');
const navbarLinks = document.querySelectorAll('.navbar-links');

toggleButton.addEventListener('click', () => {
    navbarLinks.forEach((links) => {
        links.classList.toggle('active');
    });
});