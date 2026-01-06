/*Створити функцію, яка робить глибоку копію об’єкта.
Додати перевірки на undefined, null, NaN.
Подумати і реалізувати логіку, в якій кінцевий об’єкт буде мати функції, які в нього були до цього моменту.*/

let myObj = {
    id: 1,
    name: 'John',
    greeting() {
        console.log(`Hi, my name is ${this.name}`)
    },
    updateName(newName) {
        this.name = newName;
        console.log(`Hi, my new name is ${this.name}`)
    },
    wife: {
        wifeName: 'Masha',
        wifeAge: 35,
        greetingWife(){
            console.log(`Hi, my name is ${this.wifeName}`)
        }
    },
    skills: ['js', 'nodejs'],
};

function wrapMethod(originalFn) {
    return function (...args) {
        return originalFn.apply(this, args);
    };
}

function deepCloneObject(obj) {
    if (obj === null || typeof obj !== 'object') throw new Error('Object is not an object!');
    let functions = [];
    for (let key in obj) {
        if (typeof (obj[key]) === 'function') {
            functions.push({key, func: wrapMethod(obj[key])});
            /* let func = obj[key].bind(obj);
             functions.push({key, func});*/
        }
    }
    let cloneObj = JSON.parse(JSON.stringify(obj));
    for (const func of functions) {
        cloneObj[func.key] = func.func;
    }
    return cloneObj;
}

function deepCloneObjectRecursive(obj) {
    if (obj === null || typeof obj !== 'object') {
        throw new Error('Object is not an object!');
    }
    const cloneObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        const value = obj[key];
        if (typeof value === 'function') {
            cloneObj[key] = wrapMethod(value);
        } else if (typeof value === 'object' && value !== null) {
            cloneObj[key] = deepCloneObjectRecursive(value);
        } else {
            cloneObj[key] = value;
        }
    }
    return cloneObj;
}

let clone = deepCloneObject(myObj);
clone.greeting();
clone.updateName('Micael')
console.log(clone.name);
clone.wife.wifeAge = 34;
console.log(clone);

let clone1 = deepCloneObjectRecursive(myObj);
console.log(clone1);
clone1.wife.wifeAge = 32;
clone1.wife.greetingWife();
myObj = null;
console.log(clone1);
console.log(clone);