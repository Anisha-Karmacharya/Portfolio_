/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

var projectSlider = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  grabCursor: true, //OR mousewheel
  mousewheel: false,
  autoplay: true,
  spaceBetween: 25,
  speed: 800
});

projectSlider.on('slideChange', function(){
  TweenMax.to('.reveal', .5, {
    y: '150px',
  })
  TweenMax.to('.swiper-slide', .2, {
    scale: .80,
  })
});

projectSlider.on('slideChangeTransitionEnd', function(){
  TweenMax.to('.reveal', 0, {
    y: '150px',
  })
  TweenMax.to('.reveal', .5, {
    y: 0,
    delay: .5,
  })
  TweenMax.to('.swiper-slide-active .slider-text', 0, {
    autoAlpha: 1,
  })
  TweenMax.to('.swiper-slide-next .slider-text', 0, {
    autoAlpha: 0,
  })
  TweenMax.to('.swiper-slide-prev .slider-text', 0, {
    autoAlpha: 0,
  })
  TweenMax.to('.swiper-slide-active', .5, {
    scale: 1,
    ease: Power4.easeInOut,
  })
});  
TweenMax.to('.swiper-slide-prev .slider-text', 0, {
  autoAlpha: 0,
})
TweenMax.to('.swiper-slide-next .slider-text', 0, {
  autoAlpha: 0,
})
TweenMax.to('.swiper-slide-active', 0, {
  scale: 1,
  ease: Power4.easeInOut,
})
TweenMax.to('.swiper-slide', 0, {
  scale: .80,
})
