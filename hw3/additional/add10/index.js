/*#0pm3EyTKy9

– Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.*/

const arr = [];
arr[0] = 1;
arr[1] = '1';
arr[2] = true;
arr[3] = 44;
arr[4] = 'hello';
arr[5] = false;
arr[6] = 57;
arr[7] = '101';
arr[8] = false;
arr[9] = true;

for (const arrElement of arr) {
   console.log(arrElement);
}