/*– взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини.
Відобразити всі поля кожної корзини.*/

let page = 0;
let totalElements = 0;
let moreBotton = document.getElementById("more");
let list = document.getElementById("list");
moreBotton.addEventListener("click", () => {
    if (totalElements > (page+1)*10) {
        page++;
        getCarts(page);
    }
    else moreBotton.disabled = true;
})

function makeCartTemplate({discountedTotal, totalProducts, total, totalQuantity, products}){
    let cartWrapper = document.createElement("div");
    cartWrapper.className = "cartWrapper";
    products.map(product => {
        let productContainer = makeProductTemplate(product);
        cartWrapper.appendChild(productContainer);
    })
    let totalProductsText = document.createElement("p");
    totalProductsText.className = "totalText";
    totalProductsText.innerText = 'Всього товарів: '+totalProducts;
    let totalQuantityText = document.createElement("p");
    totalQuantityText.className = "totalText";
    totalQuantityText.innerText = 'Всього одиниць товарів: ' + totalQuantity;
    let totalText = document.createElement("p");
    totalText.className = "totalText";
    totalText.innerText = 'Всього нараховано: '+ total + ' грн';
    let discountTotalText = document.createElement("p");
    discountTotalText.className = "totalText";
    discountTotalText.innerText = 'Разом зі знижкою: '+discountedTotal + ' грн';
    cartWrapper.append(totalProductsText, totalQuantityText, totalText, discountTotalText);
    return cartWrapper;
}

function makeProductTemplate({title, thumbnail, price, quantity, total, discountPercentage, discountedTotal}) {
    let productContainer = document.createElement("div");
    productContainer.className = "product";
    let h3 = document.createElement("h3");
    h3.className = "productHeading";
    h3.textContent = title;

    let infoBlock = document.createElement("div");
    infoBlock.className = "infoBlock";
    let img = document.createElement("img");
    img.className = "img";
    img.src = thumbnail;
    img.alt = title;

    let priceBlock = document.createElement("div");
    priceBlock.className = "priceBlock";

    let priceText = document.createElement("p");
    priceText.className = "priceText";
    priceText.textContent = 'Ціна: ' + price + ' грн';
    let quantityText = document.createElement("p");
    quantityText.className = "priceText";
    quantityText.textContent = 'Кількість: '+ quantity;
    let totalText = document.createElement("p");
    totalText.className = "priceText";
    totalText.textContent = 'Разом: ' + total.toLocaleString("uk-UA", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + ' грн';
    let percentText = document.createElement("p");
    percentText.className = "priceText";
    percentText.textContent = 'Знижка: ' + discountPercentage+' %';
    let discountText = document.createElement("p");
    discountText.className = "priceText";
    discountText.textContent = 'Разом зі знижкою: '+discountedTotal + ' грн';

    priceBlock.append(priceText, quantityText, totalText, percentText, discountText);
    infoBlock.append(img, priceBlock);
    productContainer.append(h3, infoBlock);
    return productContainer;
}

function getCarts(page){
    let skip = page * 10;
    fetch(`https://dummyjson.com/carts?limit=10&skip=${skip}`)
        .then(res => res.json())
        .then(({carts, total}) => {
            totalElements = total;
            carts.map(cart => {
                let cartsElement =
                    makeCartTemplate({discountedTotal, totalProducts, total,totalQuantity, products} = cart);
                list.append(cartsElement);
            })
        });
}

getCarts(page);