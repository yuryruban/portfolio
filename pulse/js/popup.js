const btns = document.querySelectorAll('.consult__btn'),
    popup = document.querySelector('.popup');

function popupoff(){
    popup.classList.remove('popup_show');
}

btns.forEach(item=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault();
        popup.classList.add('popup_show');
        setTimeout(popupoff, 3000);
    })
})

