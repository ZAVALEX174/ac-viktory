document.addEventListener("DOMContentLoaded", function() {

    const openBergerBtn = document.querySelector('.burger-menu');
    const openBergerFooterBtn = document.querySelector('.burger-menu__footer');
    const menuBurger = document.querySelector('.header__navigation-box');
    const menuBurgerFooter = document.querySelector('.footer__navigation-box');
    const bergerLine = menuBurger.querySelector('.burger-line');

    openBergerBtn.addEventListener("click", function() {
        menuBurger.classList.toggle('header__navigation-box--open');
        openBergerBtn.classList.toggle('burger-menu-active');
        document.body.classList.toggle('body-hidden');
    })

    openBergerFooterBtn.addEventListener("click", function() {
        menuBurgerFooter.classList.toggle('footer__navigation-box--open');
        openBergerFooterBtn.classList.toggle('burger-menu-footer-active');
        document.body.classList.toggle('body-hidden');
    })


})