import {
    // findByName,
    getRandomPokemon,
    // setPokeImage,
} from '../common/utils/utils.js';

// import { getTypeArray } from '../common/utils/munge-utils.js';

import {
    incrementEncounter,
    incrementCapture,
    // getRotom,
    // capitalizeFirstLetter,
} from '../common/utils/local-storage-api.js';

// import pokemonData from '../data/pokemon.js';
// import { typeImages } from '../data/type-images.js';

let pokeballs = 10;

export function setThreePokemon() {
    let pokeOne = getRandomPokemon();
    let pokeTwo = getRandomPokemon();
    let pokeThree = getRandomPokemon();

    while (pokeOne.pokemon === pokeTwo.pokemon || pokeOne.pokemon === pokeThree.pokemon || pokeThree.pokemon === pokeTwo.pokemon) {
        pokeOne = getRandomPokemon();
        pokeTwo = getRandomPokemon();
        pokeThree = getRandomPokemon();
    }

    const img1 = renderPokeImage(pokeOne);
    img1.classList.add('image1');
    const img2 = renderPokeImage(pokeTwo);
    img2.classList.add('image2');
    const img3 = renderPokeImage(pokeThree);
    img3.classList.add('image3');

    incrementEncounter(pokeOne.pokemon);
    incrementEncounter(pokeTwo.pokemon);
    incrementEncounter(pokeThree.pokemon);

    const pokemonRound = document.getElementById('pokemon-round');

    pokemonRound.textContent = '';

    pokemonRound.append(img1, img2, img3);
}

export function renderPokeImage(pokemon) {
    const image = document.createElement('img');
    image.src = pokemon.url_image;
    image.addEventListener('click', () => {
        incrementCapture(pokemon);
        pokeballs--;

        if (pokeballs > 1) {
            setThreePokemon();
        } else {
            window.location = '../results/index.html';
        }
    });
    return image;
}

// const rotomData = getRotom();

// export function renderPokeStats(pokemon) {
//     const progressBar = document.getElementById('progress-bar');

//     const pokeName = document.createElement('p');
//     const pokeType = document.createElement('p');
//     const type1 = document.createElement('img');
//     const type2 = document.createElement('img');
//     const encounterEl = document.createElement('p');
//     const captureEl = document.createElement('p');

//     const currentTypeArr = getTypeArray(rotomData);
//     const thisPokemon = findByName(pokemonData, pokemon.pokemon);
//     console.log(pokemon);
//     const thisPokemonStats = findByName(rotomData, pokemon);

//     type1.src = setPokeImage(typeImages, thisPokemon.type);
//     type2.src = setPokeImage(currentTypeArr, thisPokemon.type);
//     pokeName.textContent = `Name: ${capitalizeFirstLetter(thisPokemon.pokemon)}`;
//     encounterEl.textContent = `Encounters: ${thisPokemonStats.encountered}`;
//     captureEl.textContent = `Captures: ${thisPokemonStats.caputred}`;

//     pokeType.append(type1, type2);
//     progressBar.append(pokeName, pokeType, encounterEl, captureEl);
// }

