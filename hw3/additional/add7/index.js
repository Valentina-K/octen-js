/*#u3vmD0YJXh

– Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи*/

const arr = [2, true, 'sd', 11, 34, false, 'hello', 'world', true,45];

for (const arrElement of arr) {
    if (typeof arrElement === "boolean") console.log(arrElement);
}