/*– створити блок,
– додати йому класи wrap, collapse, alpha, beta
– додати стилі (довільні значення) : колір фону, колір тексту, розмір тексту
– додати цей блок в body.
– клонувати його повністю, та додати клон в body.*/

const divElement = document.createElement("div");
divElement.classList.add('wrap');
divElement.classList.add('collapse');
divElement.classList.add('alpha');
divElement.classList.add('beta');

divElement.innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore explicabo ipsa labore libero nesciunt, officia\n' +
    'praesentium quidem repellendus sequi sint. Aut dolorem expedita illo nulla quidem repellat sint tempore vero!\n' +
    'Architecto asperiores, assumenda blanditiis, consectetur deleniti dignissimos ducimus ea eligendi et eum ipsum\n' +
    'minima modi molestias nam nisi obcaecati porro qui quisquam quod rem sunt temporibus ullam vel veniam\n' +
    'veritatis.';

document.body.appendChild(divElement);
const cloneElent = divElement.cloneNode(true);
document.body.appendChild(cloneElent);

