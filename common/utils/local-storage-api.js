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
    const rotomData = getRotom();
    const poke = findByName(rotomData, pokemon.pokemon);
    if (!poke) {
        const newRotomData = {
            pokemon: pokemon,
            encountered: 1,
            captured: 0,
        };
        rotomData.push(newRotomData);
    } else {
        poke.encountered++;
    }
    setRotom(rotomData);
}

// increment captured - increment number of pokemon captured (by individual pokemon)
export function incrementCapture(pokemon) {
    const rotomData = getRotom();

    const poke = findByName(rotomData, pokemon.pokemon);

    poke.captured++;

    setRotom(rotomData);
}

// export function capitalizeFirstLetter(nameInput) {
//     const capitalizedName = nameInput.charAt(0).toUpperCase() + nameInput.slice(1);
//     return capitalizedName;
// } 
