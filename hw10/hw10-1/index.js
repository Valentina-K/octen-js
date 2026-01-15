/*– Створити довільний елемент з id = text та створити кнопку.
Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент
з id=”text”.*/

let textDiv = document.getElementById('text');
textDiv.classList.add('visible');
textDiv.textContent = 'Hello World!';

let button = document.createElement('button');
button.textContent = 'Hide';
button.classList.add('button');

button.addEventListener('click', () => {
    textDiv.classList.toggle('hidden');
    let content = button.textContent === 'Show' ? 'Hide' : 'Show';
    button.textContent = content;

});
document.body.append(textDiv, button);