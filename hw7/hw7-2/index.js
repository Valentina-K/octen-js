/*Взяти масив з  User[] з попереднього завдання, та відфільтрувати, залишивши тільки об’єкти з парними id (filter)*/
function User(id, name, surname , email, phone){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1,'John', 'Doe', 'w@c.com', '+38095555545'),
    new User(2,'Leanne', 'Graham', 'wz@c.com', '+38092255545'),
    new User(3,'Romaguera', 'Crona', 'ggw@c.com', '+38073586545'),
    new User(4,'Ervin', 'Howell', 'rrw@c.com', '+38095555545'),
    new User(5,'Clementine', 'Bauch', 'w111@c.com', '+380954325545'),
    new User(6,'Patricia', 'Lebsack', 'trw@c.com', '+38097755545'),
    new User(7,'Chelsey', 'Dietrich', 'uuu@c.com', '+38095115545'),
    new User(8,'Dennis', 'Schulist', 'trw@c.com', '+38093355545'),
    new User(9,'Kurtis', 'Weissnat', 'ure@c.com', '+38095665545'),
    new User(10,'Nicholas', 'Runolfsdottir', 'oi8w@c.com', '+38098895545'),
]

const filteredUsers = users.filter(user => user.id % 2 === 0);
console.log(filteredUsers);