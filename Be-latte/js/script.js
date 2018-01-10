/*
*
*   Off Canvas
*
*/

console.log(window.innerWidth);

function Navigation(navObj) {
    this.btn = document.getElementById(navObj.btnId)
    this.nav = document.getElementById(navObj.navigationId)
    this.overlay = document.createElement('div')
    this.navLink = document.querySelectorAll('.nav__link')

    this.openNav_ = () => {
        document.body.appendChild(this.overlay)
        setTimeout(() => this.nav.classList.add(navObj.activeNavClass), 200)
    }
    this.hideNav_ = event => {
        if (document.querySelector(`.${navObj.overlayClass}`) 
        && event.keyCode === 27 || event.type === 'click' || event.type === 'dragend') {
            this.nav.classList.remove(navObj.activeNavClass)
            if (this.nav.hasAttribute('style')) {
                this.nav.removeAttribute('style')
            }
            if ( window.innerWidth < 600 ) {
                setTimeout(() => document.body.removeChild(this.overlay), 200);
            }
        }
    }
    this.dragStart_ = e => {
        let start = 270 - e.screenX
        if( start < 270 ) this.nav.style.transform = `translateX(${-start}px)`
    }

    this.events_ = () => {
        this.btn.addEventListener('click', this.openNav_);
        this.overlay.addEventListener('click', this.hideNav_);
        window.addEventListener('keyup', this.hideNav_);
        this.nav.addEventListener('drag', this.dragStart_);
        this.nav.addEventListener('dragend', this.hideNav_);
    }
    this.init_ = () => {
        this.events_();
        this.overlay.classList.add(navObj.overlayClass);
        for (let i = 0; i < this.navLink.length; i++) {
            this.navLink[i].addEventListener('click', this.hideNav_);
        }
    }
    this.init_();
}

const nav = {
    btnId: 'js-menu-btn',
    navigationId: 'js-nav',
    activeNavClass: 'nav--active',
    overlayClass: 'overlay'
}

const offCanvas = new Navigation(nav);


/*
*
*   Slick
*
*/

$('.slider__list').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 1500
});


/*
*
*   Header
*
*/

$(function () {

    var headerElement = $('.header');
    var headerHeight = headerElement.innerHeight();
    var logoImg = $('.logo__img');

    $(document).on('scroll', function() {
            
            if ( $(this).scrollTop() > headerHeight && $(this).scrollTop() > 100 ) {
                headerElement.addClass('header--fixed');
                logoImg.attr('src', 'img/logo--fixed.png');
            } else if ( $(this).scrollTop() < 100 ) {
                headerElement.removeClass('header--fixed');
                logoImg.attr('src', 'img/logo.png');
            }
    })


    $('.nav a[href^="#"]').on('click', function(event) {
            event.preventDefault();
            var anchor = $(this).attr('href');
            var offTop = $(anchor).offset().top;

            $('html, body').animate( {
                scrollTop: offTop
            }, 800);
        })

})