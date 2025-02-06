document.addEventListener('DOMContentLoaded', () => {
    const burgerBtn = document.querySelector('.header__burger');
    const mobileContainer = document.querySelector('.header__mobile-container');
    const menuLinks = document.querySelectorAll('.header__nav__container a');

    burgerBtn.addEventListener('click', () => {
        mobileContainer.classList.toggle('active');
        burgerBtn.classList.toggle('active'); 
        burgerBtn.setAttribute('aria-expanded', 
            burgerBtn.getAttribute('aria-expanded') === 'false' ? 'true' : 'false'
        );
    });

 
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileContainer.classList.remove('active');
            burgerBtn.classList.remove('active'); 
            burgerBtn.setAttribute('aria-expanded', 'false');
        });
    });
});