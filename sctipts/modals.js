document.addEventListener('DOMContentLoaded', function () {

    const openPopupBtns = document.querySelectorAll('.news-body__text--link');
    // console.log(openPopupBtns);

    const closePopupBtn = document.querySelector('.btn-close');
    // console.log(closePopupBtn);

    const popup = document.querySelector('.popup');
    // console.log(popup);

    // const popupWrap = document.querySelector('.popup__wrapper');

    openPopupBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            popup.style.display = "flex";
            document.body.classList.add("over-hidden");
        })
    })

    closePopupBtn.addEventListener("click", (e) => {
        e.preventDefault();
        popup.style.display = "none";
        document.body.classList.remove("over-hidden");
    })

    $(document).click(function (e) {
        if ($(e.target).is('.popup')) {
            popup.style.display = "none";
            document.body.classList.remove("over-hidden");
        }
    });
});














