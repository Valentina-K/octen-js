/*- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]*/
const arr = [2, 31, 0, 54, 14, 88];
const swap = (arr, index1, index2) => {
    const tempArr = Array.of(...arr);
    const temp1 = tempArr[index1];
    const temp2 = tempArr[index2];
    tempArr[index1] = temp2;
    tempArr[index2] = temp1;
    return tempArr;
}

console.log(swap(arr, 2, 5));
