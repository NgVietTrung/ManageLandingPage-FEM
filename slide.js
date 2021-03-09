const container = document.querySelector(".rating");
const slide = document.querySelector(".rating-container");
const interval = 4000;

let slides = document.querySelectorAll(".rating-item");
let index = 1;
let slideId;

let mobileSlide = document.querySelectorAll(".rating-mb__slide > i");
console.log(mobileSlide);
let mobileIndex = index - 1;

const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);

const slideWidth = slides[index].clientWidth + 30;

firstClone.id = 'first-clone';
lastClone.id = 'last-clone';

slide.append(firstClone);
slide.prepend(lastClone);

slide.style.transform  = `translateX(${-slideWidth * index}px)`;


const startSlide = () => {
    slideId = setInterval(() => {
        index++;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
        slide.style.transition = '.7s';

        mobileSlide[mobileIndex].classList.remove("active-slide");
        mobileIndex++;
        if(mobileIndex === mobileSlide.length){
            mobileIndex = 0;
        }
        mobileSlide[mobileIndex].classList.add("active-slide");

    }, interval);
};

slide.addEventListener('transitionend', () => {
    slides = document.querySelectorAll(".rating-item");
    if(slides[index].id === firstClone.id){
        slide.style.transition = 'none';
        index = 1;
        slide.style.transform = `translateX(${-slideWidth * index}px)`;
    }
});

container.addEventListener('mouseenter', () => {
    clearInterval(slideId);
});

container.addEventListener('mouseleave', startSlide);

startSlide();