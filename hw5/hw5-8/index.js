/*- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write*/

const writeDocument = (arr) => {
    let items = '';
    for (const arrElement of arr) {
        items += '<li>' + arrElement + '</li>';
    }
    document.write('<ul>' + items + '</ul>');
}

writeDocument(['Hello World!', true, 17, 'Write', false, 24]);