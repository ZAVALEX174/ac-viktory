var swiper2 = new Swiper(".mySwiper2", {
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