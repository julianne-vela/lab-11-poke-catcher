import pokedex from '../../data/pokemon.js';
import {
    incrementCapture,
    incrementEncounter,
} from '../utils/local-storage-api.js';

let numberOfTurns = 0;

export function findByName(array, pokemon) {
    for (let item of array) {
        if (item.pokemon === pokemon) return item;
    }
}
// getRandomPokemon - randomly select 3 unique pokemon from dataset
export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokedex.length);
    return pokedex[randomIndex];
}
// setThreePokemon - inject randomly selected pokemon into game-page
export function setThreePokemon() {
    numberOfTurns++;

    let pokeOne = getRandomPokemon();
    let pokeTwo = getRandomPokemon();
    let pokeThree = getRandomPokemon();

    while (pokeOne.pokemon === pokeTwo.pokemon || pokeOne.pokemon === pokeThree.pokemon || pokeThree.pokemon === pokeTwo.pokemon) {
        pokeOne = getRandomPokemon();
        pokeTwo = getRandomPokemon();
        pokeThree = getRandomPokemon();
    }

    const img1 = renderPokeImage(pokeOne);
    const img2 = renderPokeImage(pokeTwo);
    const img3 = renderPokeImage(pokeThree);

    incrementEncounter(pokeOne.pokemon);
    incrementEncounter(pokeTwo.pokemon);
    incrementEncounter(pokeThree.pokemon);

    const gameContainer = document.getElementById('game-container');

    gameContainer.textContent = '';

    gameContainer.append(img1, img2, img3);
}

// renderPokeImage - inject the image associated with each pokemon. Make it clickable.
export function renderPokeImage(pokemon) {
    const image = document.createElement('img');
    image.src = pokemon.url_image;
    image.classList.add('poke-img');
    image.addEventListener('click', () => {
        incrementCapture(pokemon);
        if (numberOfTurns < 10) {
            setThreePokemon();
        } else {
            window.location = '../../results/index.html';
        }
    });
    return image;
}
