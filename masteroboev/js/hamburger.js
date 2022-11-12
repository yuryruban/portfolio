document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hamburger');
	const navMenu = document.querySelector('.header__items');

	hamburger.addEventListener("click", function () {
		hamburger.classList.toggle("is-active");
		navMenu.classList.toggle("header__items_show");
	});

	document.addEventListener('click', (e) => {
		const target = e.target;
		if (!target.closest('..header__items') && !target.closest('.hamburger')) {
			navMenu.classList.remove('header__items_show');
			hamburger.classList.remove('is-active');
		}
	});
})