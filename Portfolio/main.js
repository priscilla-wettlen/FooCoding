//-----Overlay Navbar-----//
function openNav() {
  document.querySelector(".overlay").style.width = "100%";
  document.querySelector('.carousel').style.display = 'none';
}

function closeNav() {
  document.querySelector(".overlay").style.width = "0%";
  document.querySelector('.carousel').style.display = 'block';
}



//---------Works Carousel-----------//
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

//to make arrow buttons dissappear when one reaches the start or end of carousel.
//Also works with dot indicators
const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add('is-hidden');
    nextButton.classList.remove('is-hidden');
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.add('is-hidden');
  } else {
    prevButton.classList.remove('is-hidden');
    nextButton.classList.remove('is-hidden');
  }
}

//when i click left, move slides to the left
prevButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide')
  const prevSlide = currentSlide.previousElementSibling;
  const currentDot = dotNav.querySelector('.current-slide');
  const prevDot = currentDot.previousElementSibling;
  const prevIndex = slides.findIndex(slide => slide === prevSlide);

  moveToSlide(track, currentSlide, prevSlide);
  updateDots(currentDot, prevDot);
  hideShowArrows(slides, prevButton, nextButton, prevIndex);
})

prevButton.addEventListener('ArrowLeft', e => {
  const currentSlide = track.querySelector('.current-slide')
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex =  slides.findIndex(slide => slide === nextSlide)

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
})

//when i click right, move slides to the right
nextButton.addEventListener('click', e => {
  const currentSlide = track.querySelector('.current-slide')
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex =  slides.findIndex(slide => slide === nextSlide)

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);

})
nextButton.addEventListener('ArrowRight', e => {
  const currentSlide = track.querySelector('.current-slide')
  const nextSlide = currentSlide.nextElementSibling;
  const currentDot = dotNav.querySelector('.current-slide');
  const nextDot = currentDot.nextElementSibling;
  const nextIndex =  slides.findIndex(slide => slide === nextSlide)

  moveToSlide(track, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
  hideShowArrows(slides, prevButton, nextButton, nextIndex);
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

  hideShowArrows(slides, prevButton, nextButton, targetIndex);
})


//----------Blog API-------------//

let url = 'https://public-api.wordpress.com/rest/v1.1/sites/thepwordbypriscillaixd.wordpress.com/posts/?number=2&pretty=true';

fetch(url)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data);
    let posts = [];
    posts = data;

    console.log(posts)

    const title = document.querySelector(".blog__title-1");
    const blogPost = document.querySelector('.blog__post-1');
    const continueReading = document.querySelector('#continue-reading-1');
    const title2 = document.querySelector(".blog__title-2");
    const blogPost2 = document.querySelector('.blog__post-2');
    const continueReading2 = document.querySelector('#continue-reading-2');
    
    
    title.innerHTML = data.posts[0].title;
    title.style.textAlign = "left";
    blogPost.innerHTML = data.posts[0].excerpt;
    continueReading.setAttribute("href", (data.posts[0].URL));

    title2.innerHTML = data.posts[1].title;
    title2.style.textAlign = "left";
    blogPost2.innerHTML = data.posts[1].excerpt;
    continueReading2.setAttribute("href", (data.posts[1].URL));

    

  });
