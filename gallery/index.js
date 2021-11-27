// Current Variables
const track = document.querySelector(".carousel_track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".carousel_button--right");
const prevButton = document.querySelector(".carousel_button--left");
const dotsNav = document.querySelector(".carousel_nav");
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

// console.log(slideWidth);

// Tasks:
// Arrange the slides next to one another

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

const moveToSlide2 = (track, currentSlide, targetSlide) => {
  track.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

// When I click left, move slides to the left

prevButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const prevSlide = currentSlide.previousElementSibling;
  moveToSlide(track, currentSlide, prevSlide);
});

// When I click right, move slides to right

nextButton.addEventListener("click", (e) => {
  const currentSlide = track.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;
  moveToSlide(track, currentSlide, nextSlide);
});

// when I click the nav indicators, move to the slide

dotsNav.addEventListener('click', e => {
          // what indicator was clicked on ?
          const targetDot = e.target.closest("button");

          if (!targetDot) return;

          const currentSlide = track.querySelector(".current-slide");
          const currentDot = dotsNav.querySelector(".current-slide");
          const targetIndex = dots.findIndex(dot => dot == targetDot);
          const targetSlide = slides[targetIndex];

          moveToSlide(track, currentSlide, targetSlide);

          currentDot.classList.remove("current-slide");
          targetDot.classList.add("current-slide");
          
})