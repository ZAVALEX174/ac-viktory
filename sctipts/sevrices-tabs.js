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

    document.querySelectorAll('.tabs-trigger__item2').forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const id = e.target.getAttribute('href').replace('#', '');

            console.log(id)

            document.querySelectorAll('.tabs-trigger__item2').forEach((child) => {
                child.classList.remove('tabs-trigger__item--active');
            });

            document.querySelectorAll('.tabs-content__item2').forEach((child) => {
                child.classList.remove('tabs-content__item--active');
            })


            item.classList.add('tabs-trigger__item--active');
            document.getElementById(id).classList.add('tabs-content__item--active');
        })
    })

    document.querySelector('.tabs-trigger__item2').click();

    // tabs3

    document.querySelectorAll('.tabs-trigger__item3').forEach((item) => {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const id = e.target.getAttribute('href').replace('#', '');

            console.log(id)

            document.querySelectorAll('.tabs-trigger__item3').forEach((child) => {
                child.classList.remove('tabs-trigger__item--active');
            });

            document.querySelectorAll('.tabs-content__item3').forEach((child) => {
                child.classList.remove('tabs-content__item--active');
            })


            item.classList.add('tabs-trigger__item--active');
            document.getElementById(id).classList.add('tabs-content__item--active');
        })
    })

    document.querySelector('.tabs-trigger__item3').click();
})