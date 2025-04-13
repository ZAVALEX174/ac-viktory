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


// фильтрация по калибру оружия
// const arrayGan12 = [{name: "Ружьё МЦ-200", params: "", img_src: "images/mc_200.png", calibr: "12"},
//     {name: "BERETTA 686 Silver Pigeon", params: "Ствол 76мм", img_src: "images/BERETTA_686_Silver_Pigeon.png", calibr: "12"},
//     {name: "BBERNADELLI MEGA NIBBIO", params: "", img_src: "images/BERNADELLI_MEGA_NIBBIO.jpg", calibr: "12"},
//     {name: "BERETTA 682 E облегченная", params: "", img_src: "images/BERETTA_682.jpg", calibr: "12"},
//     {name: "Ружьё МЦ-108", params: "", img_src: "images/mc_108.jpg", calibr: "12"},
//     {name: "Ружьё МЦ-6", params: "", img_src: "images/mc_6.jpg", calibr: "12"}];
// const elements12 = document.querySelectorAll('[data-calibr="12"]');
//
// console.log(elements12[0].querySelector('img').src);
// console.log(arrayGan12[0].img_src);
//
// elements12[0].querySelector('img').srcset = arrayGan12[0].img_src;
// elements12[0].querySelector('p:nth-child(1)').textContent = arrayGan12[0].name;
// elements12[0].querySelector('p:nth-child(2)').textContent = arrayGan12[0].params;
//
// elements12[1].querySelector('img').srcset = arrayGan12[1].img_src;
// elements12[1].querySelector('p:nth-child(1)').textContent = arrayGan12[1].name;
// elements12[1].querySelector('p:nth-child(2)').textContent = arrayGan12[1].params;
//
// elements12[2].querySelector('img').srcset = arrayGan12[2].img_src;
// elements12[2].querySelector('p:nth-child(1)').textContent = arrayGan12[2].name;
// elements12[2].querySelector('p:nth-child(2)').textContent = arrayGan12[2].params;
//
// elements12[3].querySelector('img').srcset = arrayGan12[3].img_src;
// elements12[3].querySelector('p:nth-child(1)').textContent = arrayGan12[3].name;
// elements12[3].querySelector('p:nth-child(2)').textContent = arrayGan12[3].params;
//
// elements12[4].querySelector('img').srcset = arrayGan12[4].img_src;
// elements12[4].querySelector('p:nth-child(1)').textContent = arrayGan12[4].name;
// elements12[4].querySelector('p:nth-child(2)').textContent = arrayGan12[4].params;
//
// elements12[5].querySelector('img').srcset = arrayGan12[5].img_src;
// elements12[5].querySelector('p:nth-child(1)').textContent = arrayGan12[5].name;
// elements12[5].querySelector('p:nth-child(2)').textContent = arrayGan12[5].params;
//
//
//
// console.log(elements12[0].querySelector('img').src, "2");


// Находим контейнер слайдов
const swiperWrapper = document.querySelector('.mySwiper2 .swiper-wrapper');

// Находим все кнопки фильтрации
const filterButtons = document.querySelectorAll('.tabs-trigger__item2-f');

// Функция для преобразования текста кнопки в значение data-calibr
function getCalibrValue(buttonText) {
    const calibrMap = {
        '12': '12',
        '9х19': '919',
        '7,62х54': '76254'
    };
    return calibrMap[buttonText] || 'all';
}

// Функция фильтрации
function filterSlides(calibrValue) {
    // Показываем/скрываем слайды
    const allSlides = swiperWrapper.querySelectorAll('.swiper-slide');

    allSlides.forEach(slide => {
        const slideCalibr = slide.querySelector('.swiper-slide-content').dataset.calibr;
        slide.style.display = (slideCalibr === calibrValue || calibrValue === 'all')
            ? 'block'
            : 'none';
    });

    // Обновляем Swiper (если используется)
    if (typeof swiper2 !== 'undefined') {
        swiper2 = new Swiper(".mySwiper2", {
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
    }
}

// Обработчики событий для кнопок фильтрации
filterButtons.forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();

        // Удаляем активный класс у всех кнопок
        filterButtons.forEach(btn => btn.classList.remove('tabs-trigger__item2-f--active'));

        // Добавляем активный класс текущей кнопке
        this.classList.add('tabs-trigger__item2-f--active');

        // Получаем значение для фильтрации
        const calibrValue = getCalibrValue(this.textContent.trim());

        // Применяем фильтрацию
        filterSlides(calibrValue);
    });
});

// Инициализация начального состояния
const activeButton = document.querySelector('.tabs-trigger__item2-f--active');
if (activeButton) {
    const initialCalibr = getCalibrValue(activeButton.textContent.trim());
    filterSlides(initialCalibr);
}


