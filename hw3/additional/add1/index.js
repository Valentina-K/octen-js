/*#WpkK0ZH1
–створити масив з:
– з 5 числових значень
– з 5 стічкових значень
– з 5 значень стрічкового, числового та булевого типу
– та вивести його в консоль*/

let numberArray = [1, 2, 3, 4, 5];
let stringArray = ['1', '2', '3', '4', '5'];
let genericArray = ['1', 2, true, '4', false, 5];

for (const numberArrayElement of numberArray) {
    console.log(numberArrayElement);
}

for (const stringArrayElement of stringArray) {
    console.log(stringArrayElement);
}

for (const genericArrayElement of genericArray) {
    console.log(genericArrayElement);
}