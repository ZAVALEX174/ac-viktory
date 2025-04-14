const openSectionBtn = document.querySelector('.mob-title-menu');
const openSectionBtn2 = document.querySelector('.mob-title-menu2');
const openSectionBtn3 = document.querySelector('.mob-title-menu3');


openSectionBtn.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelectorAll('.tabs-trigger__item').forEach((child) => {
        child.classList.remove('tabs-trigger__item--visible');

        child.classList.add('tabs-trigger__item--visible');

        child.addEventListener('click', (e) => {
            e.preventDefault();

            let valueChild = e.target.textContent;
            console.log(valueChild);

            openSectionBtn.textContent = valueChild;

            document.querySelectorAll('.tabs-trigger__item').forEach((child) => {
                child.classList.remove('tabs-trigger__item--visible');
            });
        })
    });
})


openSectionBtn2.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelectorAll('.tabs-trigger__item2').forEach((child) => {
        child.classList.remove('tabs-trigger__item2--visible');


        child.classList.add('tabs-trigger__item2--visible');

        child.addEventListener('click', (e) => {
            e.preventDefault();

            let valueChild2 = e.target.textContent;

            openSectionBtn2.textContent = valueChild2;

            document.querySelectorAll('.tabs-trigger__item2').forEach((child) => {
                child.classList.remove('tabs-trigger__item2--visible');
            });
        })
    });
})


openSectionBtn3.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelectorAll('.tabs-trigger__item3').forEach((child) => {
        child.classList.remove('tabs-trigger__item3--visible');

        child.classList.add('tabs-trigger__item3--visible');

        child.addEventListener('click', (e) => {
            e.preventDefault();

            let valueChild3 = e.target.textContent;
            // console.log(valueChild3);

            openSectionBtn3.textContent = valueChild3;

            document.querySelectorAll('.tabs-trigger__item3').forEach((child) => {
                child.classList.remove('tabs-trigger__item3--visible');
            });
        })
    });
})

document.addEventListener('DOMContentLoaded', function () {
    // Инициализация табов
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabItems = document.querySelectorAll('.tab-item');

    tabLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Удаляем активные классы
            tabLinks.forEach(l => l.classList.remove('tabs-trigger__item2-f--active'));
            tabItems.forEach(item => item.classList.remove('active'));

            // Добавляем активные классы
            this.classList.add('tabs-trigger__item2-f--active');
            const target = document.querySelector(this.getAttribute('href'));
            target.classList.add('active');

            // Обновляем Swiper при переключении таба
            const swiperInstance = target.querySelector('.swiper');
            if (swiperInstance && swiperInstance.swiper) {
                swiperInstance.swiper.update();
            }
        });
    });

    // Инициализация Swiper для каждого таба
    const swiper12 = new Swiper('.mySwiper12', {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        // Другие параметры
    });

    const swiper9x19 = new Swiper('.mySwiper9x19', {
        centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 11,
        speed: 500,
        observer: true,
        // loop: true,
        // observeSlideChildren: true,
        // observeParents: true,
        // init: true,
        // update: true,
        watchOverflow: true,

        grid: {
            rows: 2,
        },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 640px
            608: {
                centeredSlides: false,
                // update: true,
                slidesPerView: "auto",
                spaceBetween: 20,
                // loop: true,
                grid: {
                    rows: 1,
                },
                observer: true,
                watchOverflow: true,
                // observeSlideChildren: true,
                // observeParents: true,
                // init: true,
            }
        },

        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    const swiper762x54 = new Swiper('.mySwiper762x54', {
        centeredSlides: true,
        slidesPerView: 2,
        spaceBetween: 11,
        speed: 500,
        observer: true,
        // loop: true,
        // observeSlideChildren: true,
        // observeParents: true,
        // init: true,
        // update: true,
        watchOverflow: true,

        grid: {
            rows: 2,
        },

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 640px
            608: {
                centeredSlides: false,
                // update: true,
                slidesPerView: "auto",
                spaceBetween: 20,
                // loop: true,
                grid: {
                    rows: 1,
                },
                observer: true,
                watchOverflow: true,
                // observeSlideChildren: true,
                // observeParents: true,
                // init: true,
            }
        },

        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});