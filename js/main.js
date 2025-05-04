const preloader = document.querySelector('.preloader');
const body = document.querySelector('body');

window.addEventListener('load', () => {
    preloader.classList.add('preloader_hidden')
    body.classList.remove('no-scroll')
})

const themeSwitcher = document.querySelector('.theme-switcher');
const themeSwitcherImg = document.querySelector('.theme-switcher__img');
const logo = document.querySelector('.logo');
themeSwitcher.addEventListener('click', () => {
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode')
        body.classList.add('light-mode')
        themeSwitcherImg.src = 'icons/moon-light.svg'
        logo.src = 'icons/logo-light.svg'
    } else {
        body.classList.remove('light-mode')
        body.classList.add('dark-mode')
        themeSwitcherImg.src = 'icons/sun.svg'
        logo.src = 'icons/logo.svg'
    }
})

const navCloseBtn = document.querySelector('.nav__close');
const nav = document.querySelector('.nav');
const hamburger = document.querySelector('.hamburger');
const overlay = document.querySelector('.overlay');
navCloseBtn.addEventListener('click', () => {
    nav.classList.remove('nav_opened')
    overlay.classList.remove('overlay_opened')
})
overlay.addEventListener('click', () => {
    nav.classList.remove('nav_opened')
    overlay.classList.remove('overlay_opened')
})

hamburger.addEventListener('click', () => {
    nav.classList.add('nav_opened')
    overlay.classList.add('overlay_opened')
})

nav.addEventListener('click', (e) => {
    if (e.target.classList.contains('nav__link')) {
        e.preventDefault()
        const id = e.target.getAttribute('href')
        document.querySelector(id).scrollIntoView({behavior: 'smooth'})
        nav.classList.remove('nav_opened')
        overlay.classList.remove('overlay_opened')
    }
})

const works = document.querySelectorAll('.works__box');
works.forEach(work => {
    const desc = work.querySelector('.works__desc')
    work.addEventListener('focusin', () => {
        desc.classList.add('works__desc_visible')
    })
    work.addEventListener('focusout', () => {
        desc.classList.remove('works__desc_visible')
    })
})