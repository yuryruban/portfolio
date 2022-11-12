const questionsItem = document.querySelectorAll('.questions__item');

questionsItem.forEach(item => {
	item.addEventListener('click', () => {
		let questionsItemActive = document.querySelector('.questions__item_active'),
			questionsItemAnswActive = document.querySelector('.questions__item-answ_active'),
			plusActive = document.querySelector('.plus_active');

		questionsItemActive.classList.remove('questions__item_active');
		plusActive.classList.remove('plus_active');
		questionsItemAnswActive.classList.remove('questions__item-answ_active');

		item.classList.add('questions__item_active');
		item.children[1].classList.add('plus_active');
		item.children[2].classList.add('questions__item-answ_active');
	});
});