const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')
const body = document.querySelector('body')
const header = document.querySelector('.header')

const videoItem = document.querySelector('.video__item')
const video = document.querySelector('#video')
const videoBtn = document.querySelector('.video__btn')

// Анимация меню бургер
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('lock')
    header.classList.toggle('active')
})

// Анимация header при начале скролла вниз
window.addEventListener('scroll', function(event) {
    if (scrollY > 50) {
        header.classList.add('show')
    } else if (scrollY < 50) {
        header.classList.remove('show')
    }
})

// Видео
videoBtn.addEventListener('click', () => {
    if (videoItem.classList.contains('play')) {
        videoItem.classList.remove('play')
        video.pause()
    } else {
        videoItem.classList.add('play')
        video.play()
    }
})

video.addEventListener('pause', () => {
    videoItem.classList.remove('play')
})

