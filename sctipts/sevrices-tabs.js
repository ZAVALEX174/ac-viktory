document.addEventListener("DOMContentLoaded", function () {

    document.querySelectorAll('.tabs-trigger__item').forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const id = e.target.getAttribute('href').replace('#', '');

            console.log(id)

            document.querySelectorAll('.tabs-trigger__item').forEach((child) => {
                child.classList.remove('tabs-trigger__item--active');
            });

            document.querySelectorAll('.tabs-content__item').forEach((child) => {
                child.classList.remove('tabs-content__item--active');
            })


            item.classList.add('tabs-trigger__item--active');
            document.getElementById(id).classList.add('tabs-content__item--active');
        })
    })

    document.querySelector('.tabs-trigger__item').click();
})