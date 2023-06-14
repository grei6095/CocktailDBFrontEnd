const COCKTAIL_INPUT = document.querySelector('#cocktail-search__input');
const COCKTAIL_BUTTON = document.querySelector('#cocktail-search__button');


COCKTAIL_BUTTON.addEventListener('click', getCocktail);

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