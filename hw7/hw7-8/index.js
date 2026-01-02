/*створити клас/функцію конструктор попелюшка з полями ім’я, вік, розмір ноги. Створити масив з 10 попелюшок.
Створити об’єкт класу “принц” за допомоги класу який має поля ім’я, вік, туфелька яку він знайшов.
За допомоги циклу знайти, яка попелюшка повинна бути з принцом.
! Додатково, знайти необхідну попелюшку за допомогою функції масиву find та відповідного колбеку*/

class Cinderella{
    constructor(name, age, footSize){
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

class Prince{
    constructor(name, age, shoeSize){
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
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

let prince = new Prince('Vasya', 34, 33);

let thatCinderella;

for (const cinderella of cinderellas) {
    if(cinderella.footSize === prince.shoeSize) {
        thatCinderella = cinderella;
        break;
    }
}
console.log(thatCinderella);

let thatCinderella1 = cinderellas.find(cinderella => cinderella.footSize === prince.shoeSize);

console.log(thatCinderella1);

cinderellas.forEach((cinderella) => {
    console.log(cinderella);
})

