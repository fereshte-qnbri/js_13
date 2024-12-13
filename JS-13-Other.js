// ? Question-1:select section counter by class name(.cards__card__img__icon) and save in variable "counterEl":
// !Answer:

// ? Question-2:select item counter by id(#counter) and save in variable "counter":
// !Answer:

// ? Question-3:select section (.cards) and save in variable "card":
// !Answer:

// ? Question-4:select section (.cards__card) and save in variable "cards":
// !Answer:

// ? Question-5:select button in class cards_card_footer and save in variable "btnEl":
// !Answer

// ? Question-6:select the img that has attribute "man" and show in console:
// !Answer
// console.log('hello');


// 1
const counterEl = document.querySelector('.cards__card__img__icon');
console.log(counterEl);
// 2
const counter = document.getElementById('counter');
console.log(counter);

// 3
const card = document.querySelector('.cards');
console.log(card);

// 4
const cards = document.querySelectorAll('.cards__card');
console.log(cards);

// 5
const btnEl = document.querySelector('.cards__card__footer__btn button');
console.log(btnEl);

// 6
const manImg = document.querySelector('img[alt="man"]');
console.log(manImg);
