/*Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)*/
function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(10,'John', 'Doe', 'w@c.com', '+38095555545'),
    new User(2,'Leanne', 'Graham', 'wz@c.com', '+38092255545'),
    new User(3,'Romaguera', 'Crona', 'ggw@c.com', '+38073586545'),
    new User(7,'Ervin', 'Howell', 'rrw@c.com', '+38095555545'),
    new User(5,'Clementine', 'Bauch', 'w111@c.com', '+380954325545'),
    new User(4,'Patricia', 'Lebsack', 'trw@c.com', '+38097755545'),
    new User(8,'Chelsey', 'Dietrich', 'uuu@c.com', '+38095115545'),
    new User(6,'Dennis', 'Schulist', 'trw@c.com', '+38093355545'),
    new User(9,'Kurtis', 'Weissnat', 'ure@c.com', '+38095665545'),
    new User(1,'Nicholas', 'Runolfsdottir', 'oi8w@c.com', '+38098895545'),
]

const sortedUsers = users.sort((a,b) => a.id - b.id);
console.log(sortedUsers);