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

const slideWidth = slides[0].getBoundingClientRect().width;

//arrange slides to be next to each other
slides[0].style.left = slideWidth * 0 + 'px';
slides[1].style.left = slideWidth * 1 + 'px';
slides[2].style.left = slideWidth * 2 + 'px';
slides[3].style.left = slideWidth * 3 + 'px';
slides[4].style.left = slideWidth * 4 + 'px';


//when i click left, move slides to the left
//when i click right, move slides to the right
//when i click indicators, move to that slide