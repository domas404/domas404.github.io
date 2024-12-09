const scrollButton = document.querySelector('#scroll-to-top');

window.onscroll = () => scrollFunction();

const scrollFunction = () => {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        scrollButton.classList.remove("hidden");
    } else {
        scrollButton.classList.add("hidden");
    }
};


document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.main-container'); // All sections
    const navLinks = document.querySelectorAll('.menu-item'); // Navigation links

    // console.log(navLinks);
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });
  
        navLinks.forEach(link => {
            link.classList.remove('current-page');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('current-page');
            }
        });
    });
});