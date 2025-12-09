/*------------------------- task 5 ---------------------------*/
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
document.write('<p class="section-title">task 5</p>')
document.write('<ul>');
for (const listOfItem of listOfItems) {
    document.write('<li class="list-item">' + listOfItem + '</li>');
}
document.write('</ul>');
document.write('<br>');
