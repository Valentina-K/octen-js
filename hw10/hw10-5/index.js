/*Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховище,
в масив sessionsList зберігається інформація про дату та час відвідування сторінки.
Є  сторінка sessionsListPage.html (назва довільна), при відвідуванні якої потрібно відмалювати
всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а малювати в DOM*/

let currentDate = new Date();
let dateList = JSON.parse(localStorage.getItem('date')) || [];
dateList.push(currentDate.toLocaleString());
localStorage.setItem('date', JSON.stringify(dateList));

