/*- створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write*/

const createList = (text, countItems) => {
    let items = '';
    for (let i = 0; i < countItems; i++) {
        items += '<li>' + text + '</li>';
    }
    document.write('<ul>' + items + '</ul>');
}

createList('Hello World!', 10);