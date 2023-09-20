// Select all images
const images = document.querySelectorAll('.images img');

// Adding scroll event listener to the page
window.addEventListener('scroll', () => {
  // Move the images upwards by adding scroll amount and converting it to a negative value
  // We will divide by a bigger number to make the effect subtle.
  // This makes farther objects move slower and the closer ones move faster.
  images[0].style.top = "-" + (window.scrollY / 2.5) + "px";
  images[1].style.top = "-" + (window.scrollY / 3.5) + "px";
  images[2].style.top = "-" + (window.scrollY / 4) + "px";
  images[3].style.top = "-" + (window.scrollY / 5) + "px";
  images[4].style.top = "-" + (window.scrollY / 6) + "px";
  images[5].style.top = "-" + (window.scrollY / 7) + "px";
  images[6].style.top = "-" + (window.scrollY / 9) + "px";
});

// Initialize Swiper for the ".mySwiper" element
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
