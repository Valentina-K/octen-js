/*---------------------------- task 7 ----------------------------------*/
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
document.write('<p class="section-title">task 7</p>');
document.write('<p class="option green">User status true</p>');
for (const user of users) {
    if (user.status) {
        document.write(`<div class="list-item">${user.name} ${user.age} ${user.status}</div>`);
    }
}
document.write('<p class="option red">User status false</p>');
for (const user of users) {
    if (!user.status) {
        document.write(`<div class="list-item">${user.name} ${user.age} ${user.status}</div>`);
    }
}
document.write('<p class="option brown">User age more than 30 years</p>');
for (const user of users) {
    if (user.age > 30) {
        document.write(`<div class="list-item">${user.name} ${user.age} ${user.status}</div>`);
    }
}
document.write('<br>');
