/*1. Створити пустий масив та :
       a. заповнити його 50 парними числами за допомоги циклу.
       b. заповнити його 50 непарними числами за допомоги циклу.
       c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)
       d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
 2. Вивести за допомогою console.log кожен третій елемент
 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
 5. Вивести кожен елемент масиву, сусід справа якого є парним
  EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.*/

let arr = [];
let i = 1;
let k = 0;
while (arr.length <= 50) {
    if (i % 2 === 0) {
        arr[k] = i;
        k++;
    }
    i++;
}

i = 1;
k = arr.length - 1;
while (arr.length <= 100) {
    if (i % 2 !== 0) {
        arr[k] = i;
        k++;
    }
    i++;
}

let z = arr.length;
for (let j = arr.length - 1; j < z + 20; j++) {
    arr[j] = Math.floor(Math.random() * 10);
}

z = arr.length;
for (let j = arr.length - 1; j < z + 20; j++) {
    arr[j] = Math.floor(Math.random() * (732 - 8 + 1)) + 8;
}

console.log('Вивести за допомогою console.log кожен третій елемент');
for (let j = 2; j < arr.length; j = j + 3) {
    console.log('element: ', arr[j], 'index:', j);
}

console.log('Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним');
for (let j = 2; j < arr.length; j = j + 3) {
    if (arr[j] % 2 === 0) console.log('element: ', arr[j], 'index:', j);
}

let tempArr = [];
let q=0;
for (let j = 2; j < arr.length; j = j + 3) {
    if (arr[j] % 2 === 0) {
        console.log('element: ', arr[j], 'index:', j);
        tempArr[q] = arr[j];
        q++;
    }
}
console.log(tempArr);

console.log('Вивести кожен елемент масиву, сусід справа якого є парним');
for (let j = 0; j < arr.length; j++) {
    if (j+1!==arr.length && arr[j+1] % 2 === 0) console.log('element: ', arr[j], 'next elem:', arr[j+1]);
}

let purchases = [100,250,50,168,120,345,188];
let total = 0;
for (const purchase of purchases) {
    total = total + purchase;
}
console.log(Math.floor(total/purchases.length));

/*
 */
console.log('7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.')
let randomArr = [];
let r=0;
while (randomArr.length <= 10) {
    randomArr[r] = Math.floor(Math.random() * (100 - 10 + 1)) + 10;
    r++;
}
console.log(randomArr);
let newArr = [];
for (let j = 0; j < randomArr.length; j++) {
    newArr[j]=randomArr[j]*5;
}
console.log(newArr);

console.log('8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.')
let genericArray = [3,88,'a', true, null,'str', 5, false,'b', 58,100];
let resultArray = [];
for (const genericArrayElement of genericArray) {
    if(typeof genericArrayElement === 'number') resultArray.push(genericArrayElement);
}
console.log(resultArray);