function toggleMenu() {
    const menu = document.querySelector('#menu-container');
    const sideNav = document.querySelector('.side-nav');
    const overlay = document.querySelector('.overlay');

    sideNav.classList.toggle('visible');
    overlay.classList.toggle('visible');

    if (overlay.classList.contains('visible')) {
        overlay.addEventListener('click', toggleMenu);
        setTimeout(() => {
            menu.classList.toggle('menu-hidden');
        }, 100);
    } else {
        overlay.removeEventListener('click', toggleMenu);
        menu.classList.toggle('menu-hidden');
    }
}