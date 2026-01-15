/*створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних
обрахунок стається миттєво, без натискань додаткових кнопок*/

let blockElement = document.getElementById("block");
const FUNTS = 2.20462;

let inputElement = document.createElement("input");
inputElement.type = "number";
inputElement.value = '1';
inputElement.name = "input";
inputElement.addEventListener("input", () => {
    outputElement.textContent = (Number(inputElement.value) * FUNTS).toFixed(4);
});

let spanElement = document.createElement("span");
spanElement.className = "span";
spanElement.textContent = "кг";

let outputElement = document.createElement("span");
outputElement.className = "output";
outputElement.textContent = (Number(inputElement.value) * FUNTS).toFixed(4);

let span = document.createElement("span");
span.className = "span";
span.textContent = "фунтів";

blockElement.append(inputElement, spanElement, outputElement, span);
