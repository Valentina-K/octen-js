/*#bfoJuse4ZzP

– Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

    let str = ‘Ревуть воли як ясла повні’;

    let arr = stringToarray(str); [‘Ревуть’, ‘воли’, ‘як’, ‘ясла’, ‘повні’]*/

function stringToArray(str) {
    if (!str) return '';
    return str.split(' ');
}

console.log(stringToArray("Ревуть воли як ясла повні"));