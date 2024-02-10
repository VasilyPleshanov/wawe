const burger = document.querySelector('.header__burger')
const menu = document.querySelector('.header__menu')
const body = document.querySelector('body')
const header = document.querySelector('.header')
// const headerContainer = document.querySelector('.header__container')

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('lock')
    header.classList.toggle('active')
})

window.addEventListener('scroll', function(event) {
    if (scrollY > 50) {
        header.classList.add('show')
    } else if (scrollY < 50) {
        header.classList.remove('show')
    }
    
})