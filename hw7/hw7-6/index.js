/*Створити функцію конструктор, яка дозволяє створювати об’єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об’єм двигуна. додати в об’єкт функції:
    — drive () – яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
    — info () – яка виводить всю інформацію про автомобіль в форматі `назва поля – значення поля`
    — increaseMaxSpeed (newSpeed) – яка підвищує значення максимальної швидкості на значення newSpeed
    — changeYear (newValue) – змінює рік випуску на значення newValue
    — addDriver (driver) – приймає об’єкт який “водій” з довільним набором полів, і додає його в поточний об’єкт car*/

function Car(model, manufacture, year, maxSpeed, engineVolume){
    this.model = model;
    this.manufacture = manufacture;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    this.info = function () {
        for(const key in this) {
            console.log(key, this[key]);
        }
    }
    this.increaseMaxSpeed = function (addToSpeed){
        if (addToSpeed > 0) this.maxSpeed = this.maxSpeed + addToSpeed;
    }
    this.changeYear = function (year) {
        if (year > 1900) this.year = year;
    }
    this.addDriver = function (driver) {
        if (driver) this.driver = driver;
    }
}

const myCar = new Car('bmw', 'BMW', 2024, 230, 40);
console.log(myCar);
myCar.info();
myCar.drive();
myCar.increaseMaxSpeed(5);
myCar.changeYear(2025);
myCar.addDriver({name: 'John', age: 35});
myCar.info();
myCar.drive();
console.log(myCar);