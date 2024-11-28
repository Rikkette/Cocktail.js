const button = document.getElementById("searchButton");
const input = document.getElementById("searchInput");
const resultasContainer = document.getElementById("results");
const titre = document.getElementById("titre")
const image = document.getElementById("image")
const instructions = document.getElementById("instruction")
const ingredient = document.getElementById("searchByIngredient")
const name = document.getElementById("searchByName")
const API_BASE = "https://www.thecocktaildb.com/api/json/v1/1/";

/**/
searchButton.addEventListener('submit', () => {
    const query = searchInput.value.trim();


    const searchType = searchByName.checked ? 'name' : 'ingredient';
    if (!query) return alert("Veuillez entrer un terme de recherche.");

    const endpoint =
        searchType === 'name'
            ? `${API_BASE}search.php?s=${query}`
            : `${API_BASE}filter.php?i=${query}`;

    fetch(endpoint)
        .then((response) => response.json())
        .then((data) => displayResults(data.drinks))
        .catch(console.error);
});

//fonction qui renvoie les resultats

function displayResults(drinks) {
    resultasContainer.innerHTML = '';
    if (!drinks) {
        resultasContainer.innerHTML = '<p cass="text-center">no results.<p/>';
        return;
    }
    drinks.forEach((drink)=> {
        const col =document.createElement('div');
        col.className = 'col-md-4';
        col.innerHTML = `
      <div class="card h-100">
        <img src="${drink.strDrinkThumb}" class="card-img-top" alt="${drink.strDrink}">
        <div class="card-body">
          <h5 class="card-title">${drink.strDrink}</h5>
          <button class="btn btn-primary" onclick="getDetails(${drink.idDrink})" data-bs-toggle="modal" data-bs-target="#detailsModal">See details</button>
        </div>
      </div>
    `;
        resultsContainer.appendChild(col);

    })
}
/*fonction pour récupérer les details d'un cocktail grâce a son l'id*/ 
@param {*} id

function getDetails(id) {
    fetch(`${API_BASE}lookup.php?i=${id}`)
        .then((response) => response.json())
        .then((data) => displayDetails(data.drinks[0]))
        .catch(console.error)
}
/* Fonction afficher les details d'un cocktail */ 