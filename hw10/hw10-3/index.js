/*Створити форму з трьома полями для name, surname, age та кнопкою.
При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами :
заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом*/

let form = document.getElementsByClassName("form")[0];

let infoBlock = document.getElementById("infoBlock");
let infoName = document.createElement("p");
infoName.textContent = "Ваше ім'я: ";
let infoSurname = document.createElement("p");
infoSurname.textContent = 'Ваше побатькові: ';
let infoAge = document.createElement("p");
infoAge.textContent = 'Ваш вік: ';
infoBlock.append(infoName, infoSurname, infoAge);


let labelName = document.createElement("label");
labelName.classList.add("label");
labelName.textContent = "Введіть своє ім'я: ";

let inputName = document.createElement("input");
inputName.name = "name";
inputName.type = "text";
inputName.value = "";

let labelSurname = document.createElement("label");
labelSurname.classList.add("label");
labelSurname.textContent = "Введіть своє побатькові: ";

let inputSurname = document.createElement("input");
inputSurname.name = "surname";
inputSurname.type = "text";
inputSurname.value = "";

let labelAge = document.createElement("label");
labelAge.classList.add("label");
labelAge.textContent = "Введіть свій вік: ";

let inputAge = document.createElement("input");
inputAge.name = "age";
inputAge.type = "number";
inputAge.value = "1";
inputAge.max='120';
inputAge.min='1';

let inputSubm = document.createElement("input");
inputSubm.type = "submit";
inputSubm.value = 'Підтвердити';

form.append(labelName, inputName, labelSurname, inputSurname, labelAge, inputAge, inputSubm);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const name = formData.get("name");
    const surname = formData.get("surname");
    const age = formData.get("age");
    infoName.textContent = "Ваше ім'я: " + name;
    infoSurname.textContent = "Ваше побатькові: " + surname;
    infoAge.textContent = "Ваш вік: " + age;

    inputAge.value = "1";
    inputName.value = "";
    inputSurname.value = "";
})

