//Overlay Navbar
function openNav() {
  document.querySelector(".overlay").style.width = "100%";
}

function closeNav() {
  document.querySelector(".overlay").style.width = "0%";
}


//Works Carousel
const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.right');
const prevButton = document.querySelector('.left');
const dotNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange slides to be next to each other

const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
} //index is the index of each array element

slides.forEach(setSlidePosition); 

const moveToSlide = (track, currentSlide, targetSlide) => {
  track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
  currentSlide.classList.remove('current-slide');
  targetSlide.classList.add('current-slide');
}

//update dots
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
}

//when i click left, move slides to the left
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide')
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
})

//when i click right, move slides to the right
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide')
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  // const amountToMove = nextSlide.style.left;

  // console.log(amountToMove);

  // //move to the next slide
  // track.style.transform = 'translateX(-' + amountToMove + ')';
  // currentSlide.classList.remove('current-slide');
  // nextSlide.classList.add('current-slide');
})

//when i click indicators, move to that slide
dotNav.addEventListener('click', e => {
  //what indicator was clicked
  const targetDot = e.target.closest('button');

  if (!targetDot) return; //allow to only work when clicking on the dots; if clicking outside the dots, will return null;

  const currentSlide = track.querySelector('.current-slide');
  const currentDot = dotNav.querySelector('.current-slide');
  const targetIndex = dots.findIndex(dot => dot === targetDot);
  const targetSlide = slides[targetIndex];

  moveToSlide(track, currentSlide, targetSlide);

  currentDot.classList.remove('current-slide');
  targetDot.classList.add('current-slide');


  updateDots(currentDot, targetDot);
})
