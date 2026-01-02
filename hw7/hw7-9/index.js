/*Через Array.prototype. створити власний foreach, filter*/

Array.prototype.myForEach = function(callback, thisArg) {
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            callback.call(thisArg,this[i], i, this);
        }
    }
};

Array.prototype.myFilter = function(callback, thisArg) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            if (callback.call(thisArg, this[i], i, this)) {
                result.push(this[i]);
            }
        }
    }
    return result;
};



class Cinderella{
    constructor(name, age, footSize){
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [
    new Cinderella('Anya', 18, 36),
    new Cinderella('Sveta', 20, 35),
    new Cinderella('Tanya',19, 39),
    new Cinderella('Katya', 21, 34),
    new Cinderella('Sonya', 30, 38),
    new Cinderella('Olya', 31, 33),
    new Cinderella('Mila', 22, 37),
    new Cinderella('Yulya', 23, 35),
    new Cinderella('Ruslana', 17, 36),
    new Cinderella('Evdokiya', 24, 40),
]
cinderellas.myForEach(cinderella => console.log(cinderella.name + ' ' + cinderella.age));
let filterCinderella = cinderellas.myFilter(cinderella => cinderella.age >= 30);
console.log(filterCinderella);