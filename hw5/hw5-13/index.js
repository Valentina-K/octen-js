/*- Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400*/

const currencyValues = [{currency: 'USD', value: 42}, {currency: 'EUR', value: 48}]

const exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    for (const currencyValue of currencyValues) {
        if (currencyValue.currency === exchangeCurrency) return Math.round((sumUAH/currencyValue.value)*100)/100;
    }
}

console.log(exchange(1000, currencyValues, 'USD'));
console.log(exchange(1000, currencyValues, 'EUR'));