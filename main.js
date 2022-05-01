//Navbar appear on scroll
window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav');
    let logo = document.querySelector('.logo');
    let annonce = document.querySelector('.annonce');

    nav.classList.toggle('scrolling-active', window.scrollY > 0);
    logo.classList.toggle('logo-scrolling-active', window.scrollY > 0);
    annonce.classList.toggle('annonce-scrolling-active', window.scrollY > 0);
})