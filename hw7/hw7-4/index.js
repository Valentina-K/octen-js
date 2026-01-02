/*створити конструктор для об’єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об’єктами Client*/
function Client(id, name, surname , email, phone, ...products){
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = products;
}

function Product(title, price, quantity){
    this.title = title;
    this.price = price;
    this.quantity = quantity;
}

let clients = [
    new Client(1,'John', 'Doe', 'w@c.com', '+38095555545', new Product('phone', 12350, 1)),
    new Client(2,'Leanne', 'Graham', 'wz@c.com', '+38092255545', new Product('tv-box', 3350, 2)),
    new Client(3,'Romaguera', 'Crona', 'ggw@c.com', '+38073586545', new Product('tv', 83350, 1)),
    new Client(4,'Ervin', 'Howell', 'rrw@c.com', '+38095555545', new Product('table', 6310, 1)),
    new Client(5,'Clementine', 'Bauch', 'w111@c.com', '+380954325545', new Product('char', 10000, 4)),
    new Client(6,'Patricia', 'Lebsack', 'trw@c.com', '+38097755545', new Product('phone', 12350, 1), new Product('table', 11310, 2)),
    new Client(7,'Chelsey', 'Dietrich', 'uuu@c.com', '+38095115545', new Product('phone', 8350, 2)),
    new Client(8,'Dennis', 'Schulist', 'trw@c.com', '+38093355545', new Product('phone', 12350, 1)),
    new Client(9,'Kurtis', 'Weissnat', 'ure@c.com', '+38095665545', new Product('phone', 12350, 1)),
    new Client(10,'Nicholas', 'Runolfsdottir', 'oi8w@c.com', '+38098895545', new Product('phone', 12350, 1), new Product('tv-box', 750, 1)),
]

console.log(clients);