/*- створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент*/

function createParagraph(text) {
    document.write(`<p>${text}</p>`);
}

createParagraph('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor error fugit iusto maxime, numquam placeat possimus quasi quo sit vitae!');