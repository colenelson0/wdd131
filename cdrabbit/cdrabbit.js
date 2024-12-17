import cds from './cd.mjs';

const topCDs = document.querySelector("#top-cds");
const cheapCDs = document.querySelector("#cheap-cds");

function GetQueryTemplate(cd) {
    return `<article class="query-result">
        <img src="./images/${cd.image}" alt="${cd.album}" class="query-cd-img">
        <div class="query-cd-info">
            <h3 class="query-cd-title">${cd.album}, (${cd.relYear})</h3>
            <h3 class="query-cd-artist">by ${cd.artist}</h3>
            <p>${cd.label}</p>
            <p>Rating: ${cd.rating}/5</p>
            <p>Sellers: ${cd.sellers}</p>
            <p>Best price: $${cd.bestPrice}</p>
            <button class="gimme">Gimme</button>
        </div>
    </article>`;
}

function GetTopCDTemplate(cd) {
    return `<article class="featured-cd">
        <img src="./images/${cd.image}" alt="${cd.album}" class="featured-cd-img">
        <h3 class="featured-cd-title">${cd.album}</h3>
        <h3>by ${cd.artist}</h3>
        <div>
            <p>Rating: ${cd.rating}/5</p>
            <button class="gimme">Gimme</button>
        </div>
    </article>`;
}
function GetCheapCDTemplate(cd) {
    return `<article class="featured-cd">
        <img src="./images/${cd.image}" alt="${cd.album}" class="featured-cd-img">
        <h3 class="featured-cd-title">${cd.album}</h3>
        <h3>by ${cd.artist}</h3>
        <div>
            <p>Best price: $${cd.bestPrice}</p>
            <button class="gimme">Gimme</button>
        </div>
    </article>`;
}

function renderFeaturedCDs(featuredCDs) {
    topCDs.insertAdjacentHTML("beforeend", GetTopCDTemplate(featuredCDs[0]));
    topCDs.insertAdjacentHTML("beforeend", GetTopCDTemplate(featuredCDs[1]));
    cheapCDs.insertAdjacentHTML("beforeend", GetCheapCDTemplate(featuredCDs[2]));
    cheapCDs.insertAdjacentHTML("beforeend", GetCheapCDTemplate(featuredCDs[3]));
}

function init() {
    
    // get the 2 top rated cds
    const sortedByTopRated = cds.sort((a, b) => b.rating - a.rating);
    // get the 2 cheapest cds
    const sortedByCheapest = cds.sort((a, b) => a.bestPrice - b.bestPrice);
    const featuredCDs = [sortedByTopRated[0], sortedByTopRated[1], sortedByCheapest[0], sortedByCheapest[1]];
    // render the featured cds
    renderFeaturedCDs(featuredCDs);
  }

init();