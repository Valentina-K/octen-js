/*#qLQLJSeN7i
– є масив [2,17,13,6,22,31,45,66,100,-18] :
1. перебрати його циклом while
2. перебрати його циклом for
3. перебрати циклом while та вивести  числа тільки з непарним індексом
4. перебрати циклом for та вивести  числа тільки з непарним індексом
5. перебрати циклом while та вивести  числа тільки парні  значення
6. перебрати циклом for та вивести  числа тільки парні  значення
7. замінити кожне число, кратне 3, на слово “okten”
8. вивести масив у зворотньому порядку.
9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)*/
const arr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
console.log('1. перебрати його циклом while');
let i = 0;
while (i < arr.length) {
    console.log(arr[i]);
    i++;
}

console.log('2. перебрати його циклом for');
for (let j = 0; j < arr.length; j++) {
    console.log(arr[j]);
}

console.log('3. перебрати циклом while та вивести  числа тільки з непарним індексом');
i = 0;
while (i < arr.length) {
    if (i % 2 !== 0) console.log(arr[i]);
    i++;
}

console.log('4. перебрати циклом for та вивести  числа тільки з непарним індексом')
for (let j = 0; j < arr.length; j++) {
    if (j % 2 !== 0) console.log(arr[j]);
}

console.log('5. перебрати циклом while та вивести  числа тільки парні  значення')
i = 0;
while (i < arr.length) {
    if (arr[i] % 2 === 0) console.log(arr[i]);
    i++;
}

console.log('6. перебрати циклом for та вивести  числа тільки парні  значення')
for (let j = 0; j < arr.length; j++) {
    if (arr[j] % 2 === 0) console.log(arr[j]);
}

console.log('7. замінити кожне число, кратне 3, на слово “okten”')
for (let j = 0; j < arr.length; j++) {
    if (arr[j] % 3 === 0) arr[j] = 'okten';
    console.log(arr[j]);
}

console.log('8. вивести масив у зворотньому порядку.')
for (let j = arr.length - 1; j > 0; j--) {
    console.log(arr[j]);
}

console.log('9. всі попередні завдання (окрім 8), але у зворотньому циклі (задом наперед)')
console.log('task 9.1');
i = arr.length - 1;
while (i > 0) {
    console.log(arr[i]);
    i--;
}

console.log('task 9.2');
for (let j = arr.length - 1; j > 0; j--) {
    console.log(arr[j]);
}

console.log('task 9.3');
i = arr.length - 1;
while (i > 0) {
    if (i % 2 !== 0) console.log(arr[i]);
    i--;
}

console.log('task 9.4');
for (let j = arr.length - 1; j > 0; j--) {
    if (j % 2 !== 0) console.log(arr[j]);
}

console.log('task 9.5');
i = arr.length - 1;
while (i > 0) {
    if (arr[i] % 2 === 0) console.log(arr[i]);
    i--;
}

console.log('task 9.6');
for (let j = arr.length - 1; j > 0; j--) {
    if (arr[j] % 2 === 0) console.log(arr[j]);
}

console.log('task 9.7');
for (let j = arr.length - 1; j > 0; j--) {
    if (arr[j] % 3 === 0) arr[j] = 'okten';
    console.log(arr[j]);
}
