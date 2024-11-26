import recipes from './recipes.mjs';

const form = document.querySelector("form");

function random(integer) {
	return Math.floor(Math.random() * integer);
}

function getRandomRecipe(recipes) {
    const listLength = recipes.length;
    const index = random(listLength);
    return recipes[index];
}

function recipeTemplate(recipe) {
    return `<article>
        <section>
            <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
        </section>
        <section>
            <ul class="recipe-tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <h2 class="recipe-name">${recipe.name}</h2>
            ${ratingTemplate(recipe.rating)}
            <p class="recipe-description">${recipe.description}</p>
        </section>
        </article>`;
}

function tagsTemplate(tags) {
    let html = ``;
    tags.forEach(tag => {
        html += `<li>${tag}</li>`
    });
    return html;
}

function ratingTemplate(rating) {
    const starStr = `<span aria-hidden="true" class="icon-star">⭐</span>`;
    const noStarStr = `<span aria-hidden="true" class="icon-star-empty">☆</span>`;

    let html = `<span class="recipe-rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;
    for (let i = 0; i < 5; i++) {
        if (rating > i) {
            html += starStr;
        } else {
            html += noStarStr;
        }
    }
    html += `</span>`;
    return html;
}

function renderRecipes(recipeList) {
	// get the element we will output the recipes into
    const mainElement = document.querySelector("main");

	// use the recipeTemplate function to transform our recipe objects into recipe HTML strings
    let html = ``;
    recipeList.forEach(recipe => {
        html += recipeTemplate(recipe);
    });

	// Set the HTML strings as the innerHTML of our output element.
    mainElement.innerHTML = ``;
    mainElement.insertAdjacentHTML("beforeend", html);
}

function filterFunction(recipe, query)
{
    return recipe.name.toLowerCase().includes(query) || recipe.description.toLowerCase().includes(query) || recipe.tags.find((tag) => tag.toLowerCase().includes(query)) || recipe.recipeIngredient.find((ingredient) => ingredient.toLowerCase().includes(query));
}

function sortFunction(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) {return -1;}
    if (a.name.toLowerCase() > b.name.toLowerCase()) {return 1;}
    return 0;
}

function filterRecipes(query) {
    const filtered = recipes.filter((recipe) => (filterFunction(recipe, query)))
    const sorted = filtered.sort(sortFunction);
    return sorted;
}

function searchHandler(event) {
    event.preventDefault();
    let searchInput = document.getElementById("search").value;
    searchInput = searchInput.toLowerCase();
    const filteredRecipes = filterRecipes(searchInput);

    renderRecipes(filteredRecipes);
}

function init() {
  // get a random recipe
  const recipe = getRandomRecipe(recipes)
  // render the recipe with renderRecipes.
  renderRecipes([recipe]);
}
init();

form.addEventListener("submit", searchHandler);