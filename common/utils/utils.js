import pokedex from '../../data/pokemon.js';

export function findByName(array, pokemon) {
    for (let item of array) {
        if (item.pokemon === pokemon) return item;
    }
}

export function findByType(array, pokemon) {
    for (let item of array) {
        if (item.pokemon === pokemon) return item;
    }
}



export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokedex.length);
    return pokedex[randomIndex];
}
