/* Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк,
третій – вміст ячеєк.
При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.*/

let tableElement = document.querySelector('#table');
let formElement = document.querySelector('#form');
formElement.addEventListener('submit', (e) => {
    console.dir(tableElement);
    tableElement.innerHTML = '';
    e.preventDefault();
    const rows = +this.rows.value;
    const columns = +this.columns.value;
    const content = this.content.value;
    for(let i = 0; i<rows; i++) {
        let tr = document.createElement("tr");
        tableElement.appendChild(tr);
        for (let j = 0; j < columns; j++) {
            let td = document.createElement("td");
            td.innerText = content;
            tr.appendChild(td);
        }
    }
    this.rows.value = '1';
    this.columns.value = '1';
    this.content.value = '';
})