/*----------------------------- task 6 -----------------------*/
let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://tse2.mm.bing.net/th/id/OIP.drsKu8xSlQHc9P74F6bAggHaHa?cb=ucfimg2&ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://memax.club/wp-content/uploads/2019/05/Krasivye_kartinki_chaya_17_29053158.jpg'
    },
];
document.write('<p>task 6</p>');
document.write(`<div class=wrapper>`);
for (const product of products) {
    document.write(`
<div class=product-card>
        <h3 class=product-title>${product.title}. Price – ${product.price}</h3>
        <img src=${product.image} alt=”image” class=product-image>
</div>`);
}
document.write('</div>');
document.write('<br>');
