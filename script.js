const slide = document.querySelectorAll(".images img");
let SlideIndex = 0;

function initialize(){
  if(slide.length>0){
    slide[SlideIndex].classList.add("displaySlide");
  }
}
function showSlide(index){
  if(index>=slide.length){
    SlideIndex=0;
  }
  else if(index<0){
    SlideIndex=slide.length-1;
  }
  slide.forEach(slideItem=>{
    slideItem.classList.remove("displaySlide");
  });
  slide[SlideIndex].classList.add("displaySlide");
}
function prevSlide(){
  SlideIndex--;
  showSlide(SlideIndex);
}
function nextSlide(){
  SlideIndex++;
  showSlide(SlideIndex);
}
initialize();











const slide2 = document.querySelectorAll(".images2 .image2");
let SlideIndex2 = 0;

function initializetwo(){
  if(slide2.length > 0){
    slide2[SlideIndex2].classList.add("displaySlide2");
  }
}

function showSlidetwo(index){
  if(index >= slide2.length){
    SlideIndex2 = 0;
  }
  else if(index < 0){
    SlideIndex2 = slide2.length-1;
  }
  slide2.forEach(slideItem => {
    slideItem.classList.remove("displaySlide2");
  });
  slide2[SlideIndex2].classList.add("displaySlide2");
}

function prevSlidetwo(){
  SlideIndex2--;
  showSlidetwo(SlideIndex2);
}

function nextSlidetwo(){
  SlideIndex2++;
  showSlidetwo(SlideIndex2);
}

initializetwo();
















let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}