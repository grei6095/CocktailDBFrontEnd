const COCKTAIL_INPUT = document.querySelector('#cocktail-search__input');
const COCKTAIL_BUTTON = document.querySelector('#cocktail-search__button');
const RANDOM_COCKTAIL_BUTTON = document.querySelector('#cocktail-aleatorio__button');
const ALL_COCKTAIL_BUTTON = document.querySelector('#cocktail-todos__button');

COCKTAIL_BUTTON.addEventListener('click', getCocktail);
RANDOM_COCKTAIL_BUTTON.addEventListener('click', getRandomCocktail);
ALL_COCKTAIL_BUTTON.addEventListener('click', getAllCocktails);

async function getCocktail() {
    let value = COCKTAIL_INPUT.value;
    let response = await fetch(`https://www.gpcocktailclon.somee.com/api/Cocktail/buscar/${value}`);
    let data = await response.json();
    insertDataIntoPage(data[0]);
}

function insertDataIntoPage(data) {
    let name = document.createElement('h2');
    let receta = document.createElement('p');
    let rutaFoto = document.createElement('img');

    name.textContent = data.nombre;
    receta.textContent = data.receta;
    rutaFoto.src = data.fotoSrc;

    let container = document.createElement('div');
    container.appendChild(name);
    container.appendChild(receta);
    container.appendChild(rutaFoto);
    document.body.appendChild(container);
}


async function getRandomCocktail() {
    let response = await fetch('https://www.gpcocktailclon.somee.com/api/Cocktail/aleatorio');
    let data = await response.json();
    insertDataIntoPage(data);
}

async function getAllCocktails() {
    let response = await fetch('https://www.gpcocktailclon.somee.com/api/Cocktail/todos');
    let data = await response.json();
    data.forEach(element => insertDataIntoPage(element));
}