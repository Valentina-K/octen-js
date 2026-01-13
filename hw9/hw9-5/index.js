/*– Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він
знаходиться)
Створити для кожного елементу масиву свій блок, блок розділити блоками,
в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити
список з елементами
Приклад структури знаходиться у файлі example.png, який лежить в папці з поточним файлом*/
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let divEl = document.createElement("div");
divEl.classList.add("wrapper");

for (const course of coursesArray) {
    let courseElement = document.createElement("div");
    courseElement.classList.add("item");

    let titleElement = document.createElement("h3");
    titleElement.classList.add("heading");
    titleElement.textContent = course.title;

    let textElement = document.createElement("p");
    textElement.classList.add("description");

    let spanElHour = document.createElement("span");
    let spanElMonth = document.createElement("span");
    spanElMonth.textContent = `Тривалість курсу - ${course.monthDuration}`;
    spanElHour.textContent = `Всього годин - ${course.hourDuration}`;
    textElement.append(spanElMonth, spanElHour);
    
    let listEl = document.createElement("ul");
    listEl.classList.add("list");
    for (const module of course.modules) {
        let li = document.createElement("li");
        li.classList.add("listItem");
        li.textContent = module;
        listEl.appendChild(li);
    }
    courseElement.append(titleElement, textElement, listEl);
    divEl.appendChild(courseElement);
}

document.body.appendChild(divEl);