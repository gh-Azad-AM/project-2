const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");

navToggle.addEventListener("click", function() {
    navMenu.classList.toggle("show-menu");
})

//scroll for header
const header = document.getElementById('header');
window.addEventListener('scroll', scrollHeader);

function scrollHeader() {
    if (this.scrollY >= 10) {
        header.classList.add('scroll-header');
    } else {
        header.classList.remove('scroll-header');
    }
}
//
const navLink = document.querySelectorAll(".nav__link");
navLink.forEach(n => n.addEventListener('click', linkAction));

function linkAction() {
    navMenu.classList.remove('show-menu');
}

//show scrollup

const scrollUp = document.getElementById('scrollup');

function scrollup() {
    if (this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollup);
    
