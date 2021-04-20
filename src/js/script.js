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

!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function() {

    const modalButtons = document.querySelectorAll('.js-open-modal'),
          overlay      = document.querySelector('#overlay'),
          closeButtons = document.querySelectorAll('.js-modal-close');
    
    
    modalButtons.forEach(function(item){
       
       item.addEventListener('click', function(e) {
          e.preventDefault();
 
          let modalId = this.getAttribute('data-modal'),
              modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
          
          overlay.classList.add('overlay_active');
       }); // end click
       
    }); // end foreach
    closeButtons.forEach(function(item){

        item.addEventListener('click', function(e) {
           const parentModal = this.closest('.overlay');
     
           parentModal.classList.remove('overlay_active');
        });
     }); // end foreach
     document.body.addEventListener('keyup', function (e) {
        let key = e.keyCode;

        if (key == 27) {
            document.querySelector('.overlay.overlay_active').classList.remove('overlay_active');
        };
    }, false);
 }); // end ready