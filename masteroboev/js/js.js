const arrowLeft = document.querySelector('.portfolio .arrow__slider_left'),
	arrowRight = document.querySelector('.portfolio .arrow__slider_right'),
	arrowRightFb = document.querySelector('.feedback .arrow__slider_right'),
	arrowLeftFb = document.querySelector('.feedback .arrow__slider_left');

const portfolioItems = document.querySelectorAll('.portfolio__item'),
	feedbackItems = document.querySelectorAll('.feedback__item');
let slideIndex = 0;


function showSlide(n, basochks) {
	basochks.forEach(item => item.style.display = 'none');
	slideIndex = n;

	if (n > (basochks.length - 1)) {
		slideIndex = (basochks.length - 1);
	}

	if (n < 0) {
		slideIndex = 0;
	}

	basochks[slideIndex].style.display = 'block';
	basochks[slideIndex + 1].style.display = 'block';
	basochks[slideIndex + 2].style.display = 'block';
}

function FuncArrowRight(arrow, namik, basochks) {
	arrow.addEventListener('click', () => {
		namik(slideIndex + 1, basochks);
	});
}

function FuncArrowLeft(arrow, namik, basochks) {
	arrow.addEventListener('click', () => {
		namik(slideIndex - 1, basochks);
	});
}

FuncArrowRight(arrowRight, showSlide, portfolioItems);
FuncArrowLeft(arrowLeft, showSlide, portfolioItems);

FuncArrowRight(arrowRightFb, showSlide, feedbackItems);
FuncArrowLeft(arrowLeftFb, showSlide, feedbackItems);