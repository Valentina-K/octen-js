/*В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам
масив з localStorage та додає в нього об’єкт
сигнатура функції –
addToLocalStorage(arrayName:string,objToAdd:any{}):void*/

function addToLocalStorage(arrayName, objToAdd){
    let listArr = localStorage.getItem(arrayName);
    if (listArr) {
        let arr = JSON.parse(listArr);
        if (typeof objToAdd === 'object') {
            arr.push(objToAdd);
        }
        localStorage.setItem(arrayName, JSON.stringify(arr));
    }
    else alert(`${objToAdd} is not in storage`);
}

addToLocalStorage("date", new Date());