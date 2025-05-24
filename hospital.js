const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let index = 0;

function showSlide(i) {
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${i * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[i].classList.add('active');
  index = i;
}

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 3000);

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});

// Doctor cards carousel functionality
const doctorsSlider = document.querySelector('.doctors-slider');
const leftArrow = document.querySelector('.nav-arrow.left');
const rightArrow = document.querySelector('.nav-arrow.right');

// Calculate scroll amount (card width + gap)
// You might need to adjust the 300 and 32 values based on your final CSS
const scrollAmount = 300 + 32;

leftArrow.addEventListener('click', () => {
  doctorsSlider.scrollLeft -= scrollAmount;
});

rightArrow.addEventListener('click', () => {
  doctorsSlider.scrollLeft += scrollAmount;
});