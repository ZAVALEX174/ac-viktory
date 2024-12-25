document.addEventListener("DOMContentLoaded", function() {

    const openBergerBtn = document.querySelector('.burger-menu');
    const menuBurger = document.querySelector('.header__navigation-box');
    const bergerLine = menuBurger.querySelector('.burger-line');

    openBergerBtn.addEventListener("click", function() {
        menuBurger.classList.toggle('header__navigation-box--open');
        openBergerBtn.classList.toggle('burger-menu-active');
        document.body.classList.toggle('body-hidden');
    })


})