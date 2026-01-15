/*є сторінка, на якій є блок, в кому знаходиться цифра. Написати код,
який при кожному перезавантажені сторінки буде додавати до неї +1*/

let numberBlock = document.getElementById("number");
let number = +localStorage.getItem('number');
number += 1;
localStorage.setItem('number', number);
numberBlock.textContent = number;



