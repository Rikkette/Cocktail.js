const button = document.getElementById("searchButton");
const input = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const paf = document.getElementById("paf")
const pif = document.getElementById("pif")
const ingredient = document.getElementById("searchByIngredient") 
const name = document.getElementById("searchByName") 

const API_BASE = "https://www.thecocktaildb.com/api/json/v1/1/";

searchButton.addEventListener('submit', (event) => {
    event.preventDefault();

const query = searchInput.value.trim();
    console.log(query);
});

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

console.log(query);
console.log(searchType);

//fonction qui appel API
function displayResults() {

}
