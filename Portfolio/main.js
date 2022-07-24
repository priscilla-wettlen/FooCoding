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
const nextButton = document.querySelector('.left');
const prevButton = document.querySelector('.right');
const dotNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotNav.children);

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;

console.log(slideSize)
console.log(slideWidth)
//when i click left, move slides to the left
//when i click right, move slides to the right
//when i click indicators, move to that slide