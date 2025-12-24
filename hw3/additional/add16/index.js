/*#reLkOkTB29Q
створити масив книжок (назва, кількість сторінок, автори , жанри).
– знайти найбільшу книжку.
– знайти книжку/ки з найбільшою кількістю жанрів
– знайти книжку/ки з найдовшою назвою
– знайти книжку/ки, які писали 2 автори
– знайти книжку/ки, які писав 1 автор
*/

const books = [
    {
        "title": "Unlocking Android",
        "pageCount": 416,
        "authors": [
            "W. Frank Ableson",
            "Charlie Collins",
            "Robi Sen"
        ],
        "genres": [
            "Fiction","Fantasy","Science Fiction (Sci-Fi)"
        ]
    },
    {
        "title": "Android in Action, Second Edition",
        "pageCount": 592,
        "authors": [
            "W. Frank Ableson",
            "Robi Sen"
        ],
        "genres": [
            "Fiction","",""
        ]
    },
    {
        "title": "Specification by Example",
        "pageCount": 0,
        "authors": [
            "Gojko Adzic"
        ],
        "genres": [
            "Fiction","Poetry"
        ]
    },
    {
        "title": "Flex 3 in Action",
        "pageCount": 576,
        "authors": [
            "Tariq Ahmed with Jon Hirschi",
            "Faisal Abid"
        ],
        "genres": [
            "Fiction","Horror"
        ]
    },
    {
        "title": "Flex 4 in Action",
        "pageCount": 600,
        "authors": [
            "Tariq Ahmed",
            "Dan Orlando",
            "John C. Bland II",
            "Joel Hooks"
        ],
        "genres": [
            "Fiction","Fantasy"
        ]
    },
    {
        "title": "Collective Intelligence in Action",
        "pageCount": 425,
        "authors": [
            "Satnam Alag"
        ],
        "genres": [
            "Fiction","Historical Fiction"
        ]
    },
    {
        "title": "Zend Framework in Action",
        "pageCount": 432,
        "authors": [
            "Rob Allen",
            "Nick Lo",
            "Steven Brown"
        ],
        "genres": [
            "Fiction","Historical Fiction"
        ]
    },
    {
        "title": "Flex on Java",
        "pageCount": 265,
        "authors": [
            "Bernerd Allmon",
            "Jeremy Anderson"
        ],
        "genres": [
            "Fiction","Young Adult (YA)","Fantasy"
        ]
    },
    {
        "title": "Griffon in Action",
        "pageCount": 375,
        "authors": [
            "Andres Almiray",
            "Danno Ferrin",
            "",
            "James Shingler"
        ],
        "genres": [
            "Fiction","Fantasy"
        ]
    },
    {
        "title": "OSGi in Depth",
        "pageCount": 325,
        "authors": [
            "Alexandre de Castro Alves"
        ],
        "genres": [
            "Fiction","Classic"
        ]
    },
    {
        "title": "Flexible Rails",
        "pageCount": 592,
        "authors": [
            "Peter Armstrong"
        ],
        "genres": [
            "Fiction","Classic","Romance"
        ]
    },
    {
        "title": "Hello! Flex 4",
        "pageCount": 258,
        "authors": [
            "Peter Armstrong"
        ],
        "genres": [
            "Fiction","Poetry","Classic"
        ]
    },
    {
        "title": "Coffeehouse",
        "pageCount": 316,
        "authors": [
            "Levi Asher",
            "Christian Crumlish"
        ],
        "genres": [
            "Non-fiction","Autobiography"
        ]
    },
    {
        "title": "Team Foundation Server 2008 in Action",
        "pageCount": 344,
        "authors": [
            "Jamil Azher"
        ],
        "genres": [
            "Fiction","Children’s","Adventure"
        ]
    },
    {
        "title": "Brownfield Application Development in .NET",
        "pageCount": 550,
        "authors": [
            "Kyle Baley",
            "Donald Belcham"
        ],
        "genres": [
            "Fiction","Classic","Romance"
        ]
    },
    {
        "title": "MongoDB in Action",
        "pageCount": 50,
        "authors": [
            "Kyle Banker"
        ],
        "genres": [
            "Fiction","Classic","Children’s"
        ]
    },
    {
        "title": "Distributed Application Development with PowerBuilder 6.0",
        "pageCount": 504,
        "authors": [
            "Michael J. Barlotta"
        ],
        "genres": [
            "Fiction","Mystery","Classic","Adventure"
        ]
    },
    {
        "title": "Jaguar Development with PowerBuilder 7",
        "pageCount": 550,
        "authors": [
            "Michael Barlotta"
        ],
        "genres": [
            "Non-fiction","Science Fiction (Sci-Fi)"
        ]
    },
    {
        "title": "Taming Jaguar",
        "pageCount": 362,
        "authors": [
            "Michael J. Barlotta",
            "Jason R. Weiss"
        ],
        "genres": [
            "Fiction","Mystery"
        ]
    }
]

let theMostBigBook;
let theMostGenresBook =[];
let theMostBigTitle = [];
let maxPage = 0;
let maxGenres = 0;
let maxTitleLength = 0;
let twoAuthors = [];
let oneAuthor = [];

for (const book of books) {
    if (book.pageCount > maxPage) {
        theMostBigBook = book;
        maxPage = book.pageCount;
    }
    if (book.genres.length > maxGenres) {
        maxGenres = book.genres.length;
    }
    if (book.title.length > maxTitleLength) maxTitleLength = book.title.length;
    if (book.authors.length === 2) twoAuthors.push(book);
    if (book.authors.length === 1) oneAuthor.push(book);
}

for (const book of books) {
    if (book.genres.length === maxGenres) theMostGenresBook.push(book);
    if (book.title.length === maxTitleLength) theMostBigTitle.push(book);
}

console.log('theMostBigBook: ', theMostBigBook);
console.log('theMostGenresBook: ', theMostGenresBook);
console.log('theMostBigTitle: ', theMostBigTitle);
console.log('twoAuthors: ', twoAuthors);
console.log('oneAuthor: ', oneAuthor);