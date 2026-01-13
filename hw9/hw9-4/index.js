/*– Є масив
let coursesAndDurationArray = [
    {title: ‘JavaScript Complex’, monthDuration: 5},
    {title: ‘Java Complex’, monthDuration: 6},
    {title: ‘Python Complex’, monthDuration: 6},
    {title: ‘QA Complex’, monthDuration: 4},
    {title: ‘FullStack’, monthDuration: 7},
    {title: ‘Frontend’, monthDuration: 4}
];

За допомоги скріпта для кожного елементу масиву зробити <div class=’item’> ,
в якому буде <h1 class=’heading’>  з title  елементу, та <p class=’description’> з monthDuration елементу.
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
    courseElement.classList.add("item");
    let titleElement = document.createElement("h1");
    titleElement.classList.add("heading");
    titleElement.textContent = element.title;
    let textElement = document.createElement("p");
    textElement.textContent = `Тривалість курсу - ${element.monthDuration}`;
    textElement.classList.add("description");
    courseElement.append(titleElement, textElement);
    divel.appendChild(courseElement);
}

document.body.appendChild(divel);