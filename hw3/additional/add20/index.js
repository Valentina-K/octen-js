/*– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for зібрати всі букви в слово.
– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу while зібрати всі букви в слово.
– Дано масив: [ ‘a’, ‘b’, ‘c’] . За допомогою циклу for of зібрати всі букви в слово.*/

let arr = ['a', 'b', 'c'];
let word = '';
for (let i = 0; i < 3; i++) {
    word = word + arr[i];
}
console.log(word);

word = '';
let i = 0
while (i < arr.length) {
    word = word + arr[i];
    i++;
}
console.log(word);

word = '';
for (const elem of arr) {
    word = word + elem;
}
console.log(word);