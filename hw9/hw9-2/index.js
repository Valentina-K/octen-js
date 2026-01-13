/*– Є масив:
[‘Main’,’Products’,’About us’,’Contacts’]
Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)*/

const arr = ['Main', 'Products', 'About us', 'Contacts'];
const ulElem = document.createElement('ul');
for (const elemArr of arr) {
    const liElem = document.createElement('li');
    liElem.textContent = elemArr;
    ulElem.appendChild(liElem);
}
document.body.appendChild(ulElem);