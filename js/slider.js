slider()

function slider() {
    const slides = document.querySelectorAll('.slider__item')
    const dots = document.querySelectorAll('.slider__dot')

    let index = 0
    let timer
    let lol

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
    }

    const nextSlide = () => {
      interval();
      if (index == slides.length - 1) {
        index = 0;
        prepareCurrentSlide(index);
      } else {
        index++;
        prepareCurrentSlide(index);
      }
    }

    dots.forEach((item, indexDot) => {
      item.addEventListener('click', () => {
        index = indexDot;
        prepareCurrentSlide(index);
      });
    });

    // Auto next
    const interval = () => {
    
      if (lol == 1) {
        timer = clearInterval(timer);
        lol = 0;
        interval();
      } else {
        timer = setInterval(nextSlide, 7000);
        lol = 1;
      }
    }
  
    interval();
}