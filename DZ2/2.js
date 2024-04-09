"use strict";

/*
###Задание 2
Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут 
оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные 
сообщения, вы решаете установить ограничение, отзыв должен быть не менее 50 
символов в длину и не более 500. В случае неверной длины, необходимо выводить 
сообщение об ошибке, рядом с полем для ввода.

Создайте HTML-структуру. 
На странице должны отображаться товары, под каждым товаром должен быть список 
отзывов на данный товар. Под каждым списком отзывов должна быть форма, где можно
добавить отзыв для продукта.

При добавлении отзыва, он должен отображаться на странице под предыдущими 
отзывами, а не заменять их.
Массив initialData должен использоваться для начальной загрузки данных 
при запуске вашего приложения.

Каждый отзыв должен иметь уникальное id, для упрощения, используем `Date.now()`.

ВНИМАНИЕ! Если вы не проходили на курсе работу с DOM, то можно это задание не 
делать, пока рано.
*/

const initialData = [
  {
    product: "Apple iPhone 13",
    reviews: [
      {
        id: Date.now(),
        text: "Отличный телефон! Батарея держится долго.",
      },
      {
        id: Date.now(),
        text: "Камера супер, фото выглядят просто потрясающе.",
      },
    ],
  },
  {
    product: "Samsung Galaxy Z Fold 3",
    reviews: [
      {
        id: Date.now(),
        text: "Интересный дизайн, но дорогой.",
      },
    ],
  },
  {
    product: "Sony PlayStation 5",
    reviews: [
      {
        id: Date.now(),
        text: "Люблю играть на PS5, графика на высоте.",
      },
    ],
  },
];

const product = document.querySelectorAll(".product");
const reviewsGlobal = document.querySelectorAll(".reviews");
const title = document.querySelectorAll(".product__title");
const btns = document.querySelectorAll(".add-button");
const input = document.querySelectorAll(".input");
const errMessage = document.querySelectorAll(".err__message");



class Reviews{
  #reviews = [];
  _review = '';
  #repository = new Map;
  constructor(initialData){
    this.#reviews = initialData;

    for (let i = 0; i < product.length; i++){
      this.#repository.set(
        product[i].childNodes[0].nextElementSibling.innerText, 
        this.#reviews[i].reviews)
    }

    this.renderReviews();

    btns.forEach(el => {
      el.addEventListener('click', (e) => {
        let product = document.getElementById(`${e.target.dataset.togleId}`);
        this.filter();
        if (this._review.length !== 0){
          this.addReview(this._review, product.childNodes[1].innerText);
          errMessage.forEach(el => {
            el.classList.remove('color');
            // el.placeholder = "Напишите комментарий";
            el.innerHTML = '';
          });
        }
        this._review = '';
      });
    });
  }

  get getRepository(){
    return this.#repository;
  }

  renderReviews(){
    this.getRepository.forEach((value, key) => {
      value.forEach(el => {
        this.renderHTML(el, key)
      });
    });
  }

  addReview(value, title){
    const id = Date.now();
    const text = value;
    const review = {id, text};
    this.getRepository.forEach((value, key) => {
      if (key === title){
        value.unshift(review);
      }
    });
    this.renderHTML(review, title)
  }

  filter(){
    for (let i = 0; i < input.length; i++){
      try{
        if (input[i].value.length !== 0){
          if (input[i].value.length < 5){
            throw new Error('Вы слишком мало написали!');
          }else if (input[i].value.length > 50){
            throw new Error(`У вас слишком большой комментарий!`)
          }else{
            this._review = input[i].value;
            input[i].placeholder = "Напишите комментарий"
          }
        }
      }catch(err){
        errMessage[i].className = 'color';
        errMessage[i].innerHTML = err.message;
        // input[i].className = 'color';
        // input[i].placeholder = err.message;
      }finally{
        input[i].value = '';
      }
    }
  }

  renderHTML(review, title){
    const li = document.createElement("li")
    for(let i = 0; i < reviewsGlobal.length; i++){
      if (title === product[i].childNodes[1].innerText){
        li.innerHTML += `
            <li>id: ${review.id}</li>
            <li>Комментарий:</li>
            <li>${review.text}</li>
            <li>......................................................</li>
          `;
          reviewsGlobal[i].prepend(li)
      }
    }
  }
}

const reviews = new Reviews(initialData);