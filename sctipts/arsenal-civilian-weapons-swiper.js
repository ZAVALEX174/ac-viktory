var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 2,
    spaceBetween: 11,
    speed: 500,

    grid: {
        rows: 2,
    },

    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 640px
        608: {
            slidesPerView: "auto",
            spaceBetween: 20,
            grid: {
                rows: 1,
            },
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