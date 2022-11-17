document.addEventListener('DOMContentLoaded', () => {

    //hamburger
	const hamburger = document.querySelector('.hamburger');
	const navMenu = document.querySelector('.nav');

	hamburger.addEventListener("click", function () {
		hamburger.classList.toggle("is-active");
		navMenu.classList.toggle("nav_show");
	});

	document.addEventListener('click', (e) => {
		const target = e.target;
		if (!target.closest('.nav') && !target.closest('.hamburger')) {
			navMenu.classList.remove('nav_show');
			hamburger.classList.remove('is-active');
		}
	});


    //Success
    const btns = document.querySelectorAll('.forma__btn'),
    popup = document.querySelector('.success');

    function popupoff(){
        popup.classList.remove('success_show');
    }

    btns.forEach(item=>{
        item.addEventListener('click',(e)=>{
            e.preventDefault();
            document.querySelector('.popup').classList.remove('popup_active');
            popup.classList.add('success_show');
            setTimeout(popupoff, 3000);
        })
    })
})