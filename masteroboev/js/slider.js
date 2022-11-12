const arrowLeft = document.querySelector('.portfolio .arrow__slider_left'),
	arrowRight = document.querySelector('.portfolio .arrow__slider_right');

const portfolioItem = document.querySelectorAll('.portfolio__item');


let slideIndexSl = 0;

function openSlider(n, q, basochks) {
	basochks.forEach(item => item.style.display = 'none');
	basochks.forEach(item => item.classList.remove('portfolio__item-active'));

	let portfolioItemInfo = document.querySelectorAll('.portfolio__item-info_active');
	portfolioItemInfo.forEach(items => items.classList.remove('portfolio__item-info_active'));

	slideIndexSl = n;

	if (n > (basochks.length - 1)) {
		slideIndexSl = (basochks.length - 1);
	}

	if (n < 0) {
		slideIndexSl = 0;
	}

	for (c = 0; c < q; c++) {
		basochks[slideIndexSl + c].style.display = 'block';
		basochks[slideIndexSl + 1].classList.add('portfolio__item-active');
		basochks[slideIndexSl + 1].lastElementChild.classList.add('portfolio__item-info_active');
	}


}

function FuncArrowRightSl(arrow, q, basochks) {
	arrow.addEventListener('click', () => {
		openSlider(slideIndexSl + 1, q, basochks);
	});
}

function FuncArrowLeftSl(arrow, q, basochks) {
	arrow.addEventListener('click', () => {
		openSlider(slideIndexSl - 1, q, basochks);
	});
}


FuncArrowLeftSl(arrowLeft, 3, portfolioItem);
FuncArrowRightSl(arrowRight, 3, portfolioItem);