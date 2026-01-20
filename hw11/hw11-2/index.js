/*– взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути списком під час відображення.*/

let page = 0;
let totalElements = 0;
let listContainer = document.getElementById("list");
const sentinel = document.createElement('div');
sentinel.className = 'sentinel';
listContainer.appendChild(sentinel);
const observer =
    new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (totalElements !== (page + 1) * 10) {
                    page++;
                    getRecipes(page);
                } else observer.disconnect()
            }
        });
    }, {
        root: listContainer, threshold: 1.0
    });
observer.observe(sentinel);
let prepSpan = document.getElementById("prepTimeMinutes");
let cookSpan = document.getElementById("cookTimeMinutes");
let servingsSpan = document.getElementById("servings");
let difficultySpan = document.getElementById("difficulty");
let cuisineSpan = document.getElementById("cuisine");
let caloriesSpan = document.getElementById("caloriesPerServing");
let tagsElement = document.getElementById("tags");
let imgTeg = document.getElementById("img");
let titleElem = document.getElementById("title");
let ratingElem = document.getElementById("rating");
let reviewElem = document.getElementById("reviewCount");
let mealElem = document.getElementById("mealType");
let ingredientsElem = document.getElementById("ingredients");
let instructionsElem = document.getElementById("instructions");

function getDetailsById(id) {
    fetch(`https://dummyjson.com/recipes/${id}`)
        .then(res => res.json())
        .then(item => {
            prepSpan.innerText = item.prepTimeMinutes;
            cookSpan.innerText = item.cookTimeMinutes;
            servingsSpan.innerText = item.servings;
            difficultySpan.innerText = item.difficulty;
            cuisineSpan.innerText = item.cuisine;
            caloriesSpan.innerText = item.caloriesPerServing;
            imgTeg.src = item.image;
            titleElem.innerText = item.name;
            ratingElem.innerText = item.rating;
            reviewElem.innerText = item.reviewCount;
            mealElem.innerText = item.mealType.map(type=>type).join(', ');
            tagsElement.innerText = item.tags.map(tag => tag).join(', ');
            item.ingredients.map(it => {
                let liElement = document.createElement("li");
                liElement.innerText = it;
                ingredientsElem.appendChild(liElement);
            })
            item.instructions.map(it => {
                let liElement = document.createElement("li");
                liElement.innerText = it;
                instructionsElem.appendChild(liElement);
            })
        });
}

function getRecipes() {
    let skip = page * 10;
    fetch(`https://dummyjson.com/recipes?limit=20&skip=${skip}`)
        .then(res => res.json())
        .then(({recipes, total}) => {
            totalElements = total;
            recipes.map(recipe => {
                let listItem = document.createElement("li");
                listItem.innerHTML = recipe.name;
                listItem.addEventListener("click", () => getDetailsById(recipe.id));
                listContainer.insertBefore(listItem, sentinel);
            })
        });
    if (skip === 0) getDetailsById(1);
}

getRecipes();
