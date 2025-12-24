/*- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.*/

const users = [
    {
        id: 1,
        name: 'John',
        age: 18,
    },
    {
        id: 2,
        name: 'Johan',
        age: 38,
    },
    {
        id: 3,
        name: 'Jack',
        age: 32,
    },
    {
        id: 4,
        name: 'Joseph',
        age: 36,
    },
    {
        id: 5,
        name: 'Micael',
        age: 37,
    }
]

function printDocument(arr) {
    for (const arrElement of arr) {
        document.write(`<div class="wrapper"><p>id: ${arrElement.id}</p><p>name: ${arrElement.name}</p><p>age: ${arrElement.age}</p></div>`);
    }
}

printDocument(users);