const openSectionBtn = document.querySelector('.mob-title-menu');
const openSectionBtn2 = document.querySelector('.mob-title-menu2');

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