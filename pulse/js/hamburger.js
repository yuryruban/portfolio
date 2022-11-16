document.addEventListener('DOMContentLoaded', () => {
	const hamburger = document.querySelector('.hamburger');
	const navMenu = document.querySelector('.menu');

	hamburger.addEventListener("click", function () {
		hamburger.classList.toggle("is-active");
		navMenu.classList.toggle("menu_show");
	});

	document.addEventListener('click', (e) => {
		const target = e.target;
		if (!target.closest('.menu') && !target.closest('.hamburger')) {
			navMenu.classList.remove('menu_show');
			hamburger.classList.remove('is-active');
		}
	});
})