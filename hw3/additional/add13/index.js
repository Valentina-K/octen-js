/*#s24slNyz7

– Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write*/
let j=1;
for (let i = 0; i < 100; i=i+2) {
    console.log(`step ${j}`)
    document.write(`<p>Step ${j}</p>`)
    j++;
}