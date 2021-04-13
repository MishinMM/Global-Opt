window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.promo__menu'),
    menuItem = document.querySelectorAll('.promo__menu-item'),
    hamburger = document.querySelector('.promo__hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('promo__hamburger_active');
        menu.classList.toggle('promo__menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('promo__hamburger_active');
            menu.classList.toggle('promo__menu_active');
        })
    })
})

let slideIndex = 1;
showSlides(slideIndex);

function nextSlide() {
    showSlides(slideIndex += 1);
}

function previousSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("reviews__item");
    
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
  
    for (let slide of slides) {
        slide.style.display = "none";
    }
    
    slides[slideIndex - 1].style.display = "flex";    
}