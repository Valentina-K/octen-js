/*#EP5I1UUzAX
Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт
Приклад моделі кінцевого об’єкту
{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
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

let newCards =  cards.reduce((acc, card) => {
    if (card.cardSuit === 'spade') acc.spades.push(card);
    else if (card.cardSuit === 'diamond') acc.diamonds.push(card);
    else if (card.cardSuit === 'heart') acc.hearts.push(card);
    else acc.clubs.push(card);
    return acc;
},{
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
})
console.log(newCards);