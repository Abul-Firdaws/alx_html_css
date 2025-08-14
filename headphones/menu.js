document.addEventListener('DOMContentLoaded', () => {
    const menuOpen = document.getElementById('menu-open');
    const menuClose = document.getElementById('menu-close');
    const navLinks = document.querySelector('#main-nav ul');
    const header = document.querySelector('.header-container');

    menuOpen.addEventListener('click', () => {
        navLinks.classList.add('show');
        header.classList.add('menu-open-active');
    });

    menuClose.addEventListener('click', () => {
        navLinks.classList.remove('show');
        header.classList.remove('menu-open-active');
    });
});
