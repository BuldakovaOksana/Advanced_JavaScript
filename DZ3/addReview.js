const input = document.querySelector('.product_name');
const btn = document.querySelector('.button_form');
const comment = document.querySelector('.comment');
const errMessage = document.querySelector('.err_message');

btn.addEventListener('click', () => {
    if (input.value.length !== 0 && comment.value.length !== 0){
        errMessage.innerHTML = ``;
        const id = Date.now();
        addReview(input.value, id, comment.value);
        input.value = '';
        comment.value = '';
    }else{
        errMessage.innerHTML = `Вы не заполнили поле!`
    }
});