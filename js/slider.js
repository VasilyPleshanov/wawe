slider()

function slider() {
    const slides = document.querySelectorAll('.slider__item')
    const dots = document.querySelectorAll('.slider__dot')

    let index = 0

    const activeSlide = index => {
        for (slide of slides) {
          slide.classList.remove('show');
        }
        slides[index].classList.add('show');
    }

    const activeDot = index => {
        for (dot of dots) {
          dot.classList.remove('active');
        }
        dots[index].classList.add('active');
    }

    const prepareCurrentSlide = index => {
        activeSlide(index);
        activeDot(index);
        updateCounter(index);
    }

    dots.forEach((item, indexDot) => {
        item.addEventListener('click', () => {
          index = indexDot;
          prepareCurrentSlide(index);
        });
    });
}