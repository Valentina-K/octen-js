/*- створити функцію яка повертає найменьше число з масиву*/

function minValue(arr) {
    let min = 0;
    for (const arrElement of arr) {
        if (arrElement < min) min = arrElement;
    }
    return min;
}

console.log(minValue([3, -4, 10, -1, 0, 11, -56]));