var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,
    spaceBetween: 20,
    speed: 500,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});