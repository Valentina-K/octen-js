/*– Є масив
let coursesAndDurationArray = [
    {title: ‘JavaScript Complex’, monthDuration: 5},
    {title: ‘Java Complex’, monthDuration: 6},
    {title: ‘Python Complex’, monthDuration: 6},
    {title: ‘QA Complex’, monthDuration: 4},
    {title: ‘FullStack’, monthDuration: 7},
    {title: ‘Frontend’, monthDuration: 4}
];
Для кожного елементу масиву зробити блок,
в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let divel = document.createElement("div");
divel.classList.add("wrapper");

for (const element of coursesAndDurationArray) {
    let courseElement = document.createElement("div");
    courseElement.classList.add("card");
    let titleElement = document.createElement("h3");
    titleElement.textContent = element.title;
    courseElement.appendChild(titleElement);
    let textElement = document.createElement("p");
    textElement.textContent = `Тривалість курсу - ${element.monthDuration}`;
    courseElement.appendChild(textElement);
    divel.appendChild(courseElement);
}

document.body.appendChild(divel);