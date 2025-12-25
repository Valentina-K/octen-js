/*#5hqyKTfmc

– створити функцію sortNums(array,direction), яка приймає масив чисел, та сортує його від більшого до меншого, або навпаки  – залежно від значення аргументу direction.

let nums = [11,21,3];

sortNums(nums,’ascending’) // [3,11,21]

sortNums(nums,’descending’) // [21,11,3]*/

function sortNums(array, direction) {
    let sortedArr = Array.from(array);
    if(direction === 'ascending') array = sortedArr.sort((a, b) => a-b);
    else if(direction === 'descending') array = sortedArr.sort((a, b) => b-a);
    return sortedArr;
}

let nums = [11,21,3];

console.log(sortNums(nums, "ascending"));
console.log(sortNums(nums, "descending"));
