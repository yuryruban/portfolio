const callBackBtn = document.querySelector('.header__btn'),
	closeBtn = document.querySelector('.callback__plus'),
	callBack = document.querySelector('.callback');

callBackBtn.addEventListener('click', () => {
	callBack.classList.toggle('callback_active');
});

closeBtn.addEventListener('click', () => {
	callBack.classList.toggle('callback_active');
});