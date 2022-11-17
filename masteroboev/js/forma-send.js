let btns = document.querySelectorAll('.forma__btn'),
        callback = document.querySelector('.callback')
        thanks = document.querySelector('.thanks');


btns.forEach(item=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault();
        callback.classList.remove('callback_active');
        thanks.classList.add('thanks_active');
        setTimeout(() => {
            thanks.classList.remove('thanks_active');
        }, 3000);
    })
})