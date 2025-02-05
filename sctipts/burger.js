document.addEventListener("DOMContentLoaded", function () {

    const openBergerBtn = document.querySelector('.burger-menu');
    const openBergerFooterBtn = document.querySelector('.burger-menu__footer');
    const menuBurger = document.querySelector('.header__navigation-box');
    const menuBurgerFooter = document.querySelector('.footer__navigation-box');
    const bergerLine = menuBurger.querySelector('.burger-line');

    openBergerBtn.addEventListener("click", function () {
        menuBurger.classList.toggle('header__navigation-box--open');
        openBergerBtn.classList.toggle('burger-menu-active');
        document.body.classList.toggle('body-hidden');
    })

    openBergerFooterBtn.addEventListener("click", function () {
        menuBurgerFooter.classList.toggle('footer__navigation-box--open');
        openBergerFooterBtn.classList.toggle('burger-menu-footer-active');
        document.body.classList.toggle('body-hidden');
    })

    const closeBurgerMenuItemClick = () => {
        menuBurgerFooter.classList.remove('footer__navigation-box--open');
        openBergerFooterBtn.classList.remove('burger-menu-footer-active');
        menuBurger.classList.remove('header__navigation-box--open');
        openBergerBtn.classList.remove('burger-menu-active');
        document.body.classList.remove('body-hidden');
    }
    
    const contactBtnBurger = document.querySelector('.contact__link');
    contactBtnBurger.addEventListener("click", closeBurgerMenuItemClick);

    const itemsBurger = document.querySelectorAll('.navigation__item');
    itemsBurger.forEach(item => {
        item.addEventListener('click', closeBurgerMenuItemClick);
    })
})