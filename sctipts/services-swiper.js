var swiper1 = new Swiper(".mySwiper1", {
    slidesPerView: 1,
    // spaceBetween: 10,
    spaceBetween: 10,
    speed: 1500,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});