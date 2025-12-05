/*-------------- task 1 --------------------*/
let arr = [2, -8, 7.4, 'my string', null, {name: "John"}, [], '', undefined, NaN];
console.log("arr = ", arr);
console.log("arr[0] = ", arr[0]);
console.log("arr[1] = ", arr[1]);
console.log("arr[2] = ", arr[2]);
console.log("arr[3] = ", arr[3]);
console.log("arr[4] = ", arr[4]);
console.log("arr[5] = ", arr[5]);
console.log("arr[6] = ", arr[6]);
console.log("arr[7] = ", arr[7]);
console.log("arr[8] = ", arr[8]);
console.log("arr[9] = ", arr[9]);

/*-------------- task 2 ---------------------*/
let book1 = {
    title: "Star Wars",
    pageCount: 750,
    genre: "fantastic"
}
let book2 = {
    title: "Crime and Punishment",
    pageCount: 610,
    genre: "drama"
}
let book3 = {
    title: "Ivan Vasilyevich changes his profession",
    pageCount: 386,
    genre: "comedy"
}

/*------------------- task 3 ----------------------*/
let bookOne = {
    title: "Star Wars",
    pageCount: 750,
    genre: "fantastic",
    authors: [
        {name: 'author1', age: 45}, {name: 'author2', age: 36}, {name: 'author3', age: 55}
    ]
}
let bookTwo = {
    title: "Crime and Punishment",
    pageCount: 610,
    genre: "drama",
    authors: [
        {name: 'author1', age: 65}
    ]
}
let bookThree = {
    title: "Ivan Vasilyevich changes his profession",
    pageCount: 386,
    genre: "comedy",
    authors: [
        {name: 'author1', age: 37}, {name: 'author2', age: 48}
    ]
}

/*--------------- task 4 -------------------------*/
let users = [
    {name: 'vasya', username: 'vasya1', password: 'vasya$1223'},
    {name: 'petya', username: 'petya22', password: 'petya1j1j'},
    {name: 'masha', username: 'masha-r', password: 'masha&&34e'},
    {name: 'dasha', username: 'dashaD', password: 'dashaJJJ'},
    {name: 'kosta', username: 'kostaE', password: 'kosta123'},
    {name: 'vanya', username: 'vanya5', password: 'vanyatr54'},
    {name: 'sanya', username: 'Sanya', password: '222sanya111'},
    {name: 'lev', username: 'levLvovish', password: '@@@lev'},
    {name: 'maxim', username: 'maxim-M', password: 'maxim2354687'},
    {name: 'sveta', username: 'svetaSveta', password: 'sveta47((o'},
];
console.log("users = ", users);
console.log(`user ${users[0].name} has password ${users[0].password}.`);
console.log(`user ${users[1].name} has password ${users[1].password}.`);
console.log(`user ${users[2].name} has password ${users[2].password}.`);
console.log(`user ${users[3].name} has password ${users[3].password}.`);
console.log(`user ${users[4].name} has password ${users[4].password}.`);
console.log(`user ${users[5].name} has password ${users[5].password}.`);
console.log(`user ${users[6].name} has password ${users[6].password}.`);
console.log(`user ${users[7].name} has password ${users[7].password}.`);
console.log(`user ${users[8].name} has password ${users[8].password}.`);
console.log(`user ${users[9].name} has password ${users[9].password}.`);

/*------------------- task 5 ----------------------*/
let temperature = [
    {day: 'Monday', values: {morning: 3, afternoon: 8, evening: 6}},
    {day: 'Tuesday', values: {morning: 2, afternoon: 6, evening: 4}},
    {day: 'Wednesday', values: {morning: 3, afternoon: 7, evening: 6}},
    {day: 'Thursday', values: {morning: 4, afternoon: 9, evening: 8}},
    {day: 'Friday', values: {morning: 4, afternoon: 6, evening: 4}},
    {day: 'Saturday', values: {morning: 2, afternoon: 4, evening: 1}},
    {day: 'Sunday', values: {morning: 0, afternoon: 3, evening: 1}},
];

/*------------------- task 6 -----------------------*/
let number = +prompt("Enter number (1 0 -3)");
if (number === 0) {
    console.log("right");
} else {
    console.log("wrong");
}

/*------------------- task 7 ------------------------*/
let time = 57;
if (time >= 0 && time < 15) console.log("1 quarter");
else if (time > 15 && time < 30) console.log("2 quarter");
else if (time > 30 && time < 45) console.log("3 quarter");
else console.log("4 quarter");

/*---------------------- task 8 -----------------------*/
let day = 20;
if (day >= 1 && day < 11) console.log("1 decade");
else if (day >= 11 && day < 21) console.log("2 decade");
else console.log("3 decade");

/*----------------------- task 9 -------------------------*/
let choiceDay = 1;
switch (choiceDay) {
    case '1':
        console.log('todo 1-1');
        console.log('todo 1-2');
        console.log('todo 1-3');
        break;
    case '2':
        console.log('todo 2-1');
        console.log('todo 2-2');
        console.log('todo 2-3');
        break;
    case '3':
        console.log('todo 3-1');
        console.log('todo 3-2');
        console.log('todo 3-3');
        break;
    case '4':
        console.log('todo 4-1');
        console.log('todo 4-2');
        console.log('todo 4-3');
        break;
    case '5':
        console.log('todo 5-1');
        console.log('todo 5-2');
        console.log('todo 5-3');
        break;
    case '6':
        console.log('todo 6-1');
        console.log('todo 6-2');
        console.log('todo 6-3');
        break;
    case '7':
        console.log('todo 7-1');
        console.log('todo 7-2');
        console.log('todo 7-3');
        break;
    default:
        console.log('not found');
        break;
}

/*----------------------- task 10 -------------------------*/
let a = 10;
let b = 20;

if (a > b) console.log(a);
else if (a < b) console.log(b);
else console.log('a === b');

/*------------------------- task 11 ----------------------*/
let x = 6;
if (!x) x = 'default';

/*------------------------- task 12 ----------------------*/
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let js = coursesAndDurationArray[0].monthDuration;
let java = coursesAndDurationArray[1].monthDuration;
let python = coursesAndDurationArray[2].monthDuration;
let qa = coursesAndDurationArray[3].monthDuration;
let fullstack = coursesAndDurationArray[4].monthDuration;
let frontend = coursesAndDurationArray[5].monthDuration;

if (js > 5) console.log("Супер");
if (java > 5) console.log("Супер");
if (python > 5) console.log("Супер");
if (qa > 5) console.log("Супер");
if (fullstack > 5) console.log("Супер");
if (frontend > 5) console.log("Супер");
