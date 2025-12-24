/*#zananT5FR1

– Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write*/

for (let i = 0; i < 100; i++) {
    if (i%2 === 0) {
        console.log(`step ${i}`)
        document.write(`<p>Step ${i}</p>`)
    }
}