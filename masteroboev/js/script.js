const arrowRightFb = document.querySelector('.feedback .arrow__slider_right'),
	arrowLeftFb = document.querySelector('.feedback .arrow__slider_left'),
	arrowRightPr = document.querySelector('.partner .arrow__slider_right'),
	arrowLeftPr = document.querySelector('.partner .arrow__slider_left');

const feedbackItem = document.querySelectorAll('.feedback__item'),
	partnerItem = document.querySelectorAll('.partner__item');

let slideIndex = 0;


function showSlide(n, q, basochks) {
	basochks.forEach(item => item.style.display = 'none');
	slideIndex = n;

	if (n > (basochks.length - 1)) {
		slideIndex = (basochks.length - 1);
	}

	if (n < 0) {
		slideIndex = 0;
	}

	for (b = 0; b < q; b++) {
		basochks[slideIndex + b].style.display = 'block';
	}
}

function FuncArrowRight(arrow, q, basochks) {
	arrow.addEventListener('click', () => {
		showSlide(slideIndex + 1, q, basochks);
	});
}

function FuncArrowLeft(arrow, q, basochks) {
	arrow.addEventListener('click', () => {
		showSlide(slideIndex - 1, q, basochks);
	});
}

FuncArrowRight(arrowRightFb, 4, feedbackItem);
FuncArrowLeft(arrowLeftFb, 4, feedbackItem);

FuncArrowRight(arrowRightPr, 5, partnerItem);
FuncArrowLeft(arrowLeftPr, 5, partnerItem);

