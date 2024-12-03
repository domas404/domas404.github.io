
function toggleMenu() {
    // console.log("aaaa");
    const menu = document.querySelector('#menu-container');
    const sideNav = document.querySelector('.side-nav');
    const body = document.querySelector('.content-container');

    if (menu.classList.contains('menu-hidden')) {
        sideNav.classList.remove('side-nav-hidden');
        sideNav.classList.add('side-nav-visible');
        setTimeout(() => {
            menu.classList.remove('menu-hidden');
            menu.classList.add('menu-visible');
        }, 100);
        body.addEventListener('click', () => toggleMenu());
    } else {
        body.removeEventListener('click', () => toggleMenu());
        menu.classList.remove('menu-visible');
        menu.classList.add('menu-hidden');
        sideNav.classList.remove('side-nav-visible');
        sideNav.classList.add('side-nav-hidden');
    }
}