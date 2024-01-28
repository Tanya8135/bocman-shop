import gsap from "gsap";

const button = document.querySelector('.button');
const modal = document.querySelector('.modal');

let isOpen

button.addEventListener('click', (e) => {
    e.preventDefault();
    isOpen = !isOpen
    gsap.to(modal, {
        autoAlpha: isOpen ? 1 : 0,
    })
})