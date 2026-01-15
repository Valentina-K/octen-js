let listBlock = document.getElementById("list");

let dateList = JSON.parse(localStorage.getItem('date')) || [];

for (const date of dateList) {
    let liElement = document.createElement("li");
    liElement.textContent = date;
    listBlock.appendChild(liElement);
}