var slides = document.querySelectorAll('.slide')

var slideNext = document.querySelector('.slide-next')

var slidePrev = document.querySelector('.slide-prev')



let slide_index = 0

slideNext.addEventListener('click', () => {
    slide_index = slide_index + 1 === slides.length ? 0 : slide_index + 1
    slides.forEach(e => {
        e.classList.remove('active')
    })
    slides[slide_index].classList.add('active')
})

slidePrev.addEventListener('click', () => {
    slide_index = slide_index - 1 < 0 ? slides.length - 1 : slide_index - 1
    slides.forEach(e => {
        e.classList.remove('active')
    })
    slides[slide_index].classList.add('active')
})


