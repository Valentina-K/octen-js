/*#bolvdlhP
описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу

Після опису, використовуючи функції масивів:
 – знайти піковий туз
 – всі шістки
 – всі червоні карти
 – всі буби
 – всі трефи від 9 та більше

Приклад моделі об’єкту карти:
{
    cardSuit: ”, // ‘spade’, ‘diamond’,’heart’, ‘clubs’
    value: ”, // ‘6’-’10’, ‘ace’,’jack’,’queen’,’king’
    color:”, // ‘red’,’black’
}*/

const colors = ['red', 'black'];
const suits = ['spade', 'diamond', 'heart', 'clubs'];
const figures = ['ace', 'jack', 'queen', 'king'];

function createCards() {
    let cards = [];
    for (const color of colors) {
        for (const suit of suits) {
            if ((color === 'red' && (suit === 'diamond' || suit === 'heart')) || (color === 'black' && (suit === 'spade' || suit === 'clubs'))) {
                for (const figure of figures) {
                    cards.push({cardSuit: suit, value: figure, color: color});
                }
                for (let i = 6; i <= 10; i++) {
                    cards.push({cardSuit: suit, value: i.toString(), color: color});
                }
            }
        }
    }
    return cards;
}

let cards = createCards();
console.log(cards);
console.log(cards.filter(c => c.cardSuit === 'spade' && c.value === 'jack')[0]);
console.log(cards.filter(c => c.value === '6'));
console.log(cards.filter(c => c.color === 'red'));
console.log(cards.filter(c => c.cardSuit === 'diamond'));
console.log(cards.filter(c => c.cardSuit === 'clubs' && (Number(c.value) >=9 || isNaN(Number(c.value).valueOf()))));
