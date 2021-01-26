import { findByName } from './utils.js';
const ROTOM = 'ROTOM';
const newRotom = [];

export function getRotom() {
    let rotomData = JSON.parse(localStorage.getItem(ROTOM));

    if (!rotomData) {
        rotomData = [];
        localStorage.setItem(ROTOM, JSON.stringify(rotomData));
    }
    return rotomData;
}

export function setRotom(rotomData) {
    localStorage.setItem(ROTOM, JSON.stringify(rotomData));
}

export function clearRotom() {
    localStorage.setItem(ROTOM, JSON.stringify(newRotom));
}

export function incrementEncounter(pokemon) {
    const rotoData = getRotom();
    const poke = findByName(rotoData, pokemon);
    if (!poke) {
        const newRotoData = {
            pokemon: pokemon,
            encountered: 1,
            captured: 0,
        };
        rotoData.push(newRotoData);
    } else {
        poke.encountered++;
    }
    setRotom(rotoData);
}

// increment captured - increment number of pokemon captured (by individual pokemon)
export function incrementCapture(pokemon) {
    const rotoData = getRotom();

    const poke = findByName(rotoData, pokemon.pokemon);

    poke.captured++;

    setRotom(rotoData);
}
