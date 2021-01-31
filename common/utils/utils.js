import pokemonData from '../../data/pokemon.js';

// import { typeImages } from '../../data/type-images.js';

// import { getRotom } from './local-storage-api.js';

// import { getTypeArray } from './munge-utils.js';

export function findByName(array, pokemon) {
    for (let item of array) {
        if (item.pokemon === pokemon) return item;
    }
}

// // call w/ pokeData and pokemon.type_1 //
export function findByType1(array, type) {
    for (let item of array) {
        if (item.type_1 === type) return item;
    }
}

// // Take in the rotomData and type, find item with that type in currentTypeArr, if type matches the type in typeImages array, return the associated type image //
// export function setPokeImage(array, type) {
//     const currentTypeArr = getTypeArray(getRotom());
//     for (let item of currentTypeArr) {
//         for (let item of typeImages) {
//             if (item.type === type) {
//                 currentTypeArr.push(item.image);
//             }
//         }
//         return `../assets/pokemon-images/${item.type}.png`;
//     }
// }

export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemonData.length);
    return pokemonData[randomIndex];
}
