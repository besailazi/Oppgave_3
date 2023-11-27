
 document.addEventListener('DOMContentLoaded', function () {
	const slides = document.querySelectorAll('.slideshow__slide');
	const totalSlides = slides.length;
	let currentSlide = 0;
 
	const updateSlide = () => {
	  slides.forEach((slide, index) => {
		 if (index === currentSlide) {
			slide.classList.add('slideshow__slide--visible');
		 } else {
			slide.classList.remove('slideshow__slide--visible');
		 }
	  });
	};
 
	const updateCounter = () => {
	  const counter = document.querySelector('.slideshow__counter');
	  counter.textContent = `${currentSlide + 1}/${totalSlides}`;
	};
 
	const updateDots = () => {
	  const dots = document.querySelectorAll('.slideshow__dot');
	  dots.forEach((dot, index) => {
		 if (index === currentSlide) {
			dot.classList.add('active');
		 } else {
			dot.classList.remove('active');
		 }
	  });
	};
 
	const nextSlide = () => {
	  currentSlide = (currentSlide + 1) % totalSlides;
	  updateSlide();
	  updateCounter();
	  updateDots();
	};
 
	const prevSlide = () => {
	  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
	  updateSlide();
	  updateCounter();
	  updateDots();
	};
 
	const setSlide = (index) => {
	  currentSlide = index;
	  updateSlide();
	  updateCounter();
	  updateDots();
	};
 
	const controlButtons = document.querySelectorAll('.slideshow__control-button');
	controlButtons.forEach((button) => {
	  button.addEventListener('click', (e) => {
		 const direction = e.currentTarget.dataset.direction;
		 direction === 'next' ? nextSlide() : prevSlide();
	  });
	});
 
	const dots = document.querySelectorAll('.slideshow__dot');
	dots.forEach((dot, index) => {
	  dot.addEventListener('click', () => {
		 setSlide(index);
	  });
	});
 
	updateSlide();
	updateCounter();
	updateDots();
 });