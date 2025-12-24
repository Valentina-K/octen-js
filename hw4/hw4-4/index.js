/*- створити функцію яка приймає масив та виводить кожен його елемент*/

function printArray(arr) {
    for (const arrElement of arr) {
        console.log(arrElement);
    }
}

printArray([1, 2, 3, 4, 5]);