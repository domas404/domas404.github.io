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