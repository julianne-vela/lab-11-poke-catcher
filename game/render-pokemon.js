import {
    getRandomPokemon,
} from '../common/utils/utils.js';
import {
    incrementEncounter,
    incrementCapture,
} from '../common/utils/local-storage-api.js';

let numberOfTurns = 0;

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

    const pokemonRound = document.getElementById('pokemon-round');

    pokemonRound.textContent = '';

    pokemonRound.append(img1, img2, img3);
}

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