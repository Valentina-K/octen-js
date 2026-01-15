/*– створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію.
При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік,
чи менше він за 18, та повідомити про це користувача*/

let form = document.getElementsByClassName("age")[0];

let label = document.createElement("label");
label.classList.add("label");
label.textContent = "Введіть свій вік: ";

let input = document.createElement("input");
input.name = "age";
input.type = "number";
input.value = "1";
input.max='120';
input.min='1';

let inputSubm = document.createElement("input");
inputSubm.type = "submit";
inputSubm.value = 'Підтвердити';

form.append(label, input, inputSubm);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (Number(form.age.value) < 18)
        alert('Ваш вік менше 18 років');
    else alert('Ви повнолітня людина');
    input.value = "1";
})