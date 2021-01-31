// import { getRotom } from './local-storage-api.js';
// import { findByType1 } from './utils.js';
// import pokemonData from '../../data/pokemon.js';

export function encounterMungies(rotomData) {
    const encounterDataArray = [];

    for (let item of rotomData) {
        encounterDataArray.push(item.encountered);
    }

    return encounterDataArray;
}

export function captureMungies(rotomData) {
    const captureDataArray = [];

    for (let item of rotomData) {
        captureDataArray.push(item.captured);
    }

    return captureDataArray;
}

export function nameMungies(rotomData) {
    const nameDataArray = [];

    for (let item of rotomData) {
        nameDataArray.push(item.pokemon);
    }

    return nameDataArray;
}

// export function getTypeArray(someArray) {
//     const typeArr = [];
//     for (let item of someArray) {
//         const itemInTypeArr = findByType1(pokemonData, item.type_1);
//         if (!itemInTypeArr) {
//             const newTypeObj = {
//                 type: item.type,
//                 captured: item.captured,
//                 image: '',
//             };
//             if (newTypeObj.captured > 0) typeArr.push(newTypeObj);
//         } else {
//             itemInTypeArr.captured += item.captured;
//         }
//     }
//     return typeArr;
// }

// export function getTypeList(typeArr) {
//     const typeList = [];
//     for (const item of typeArr) {
//         typeList.push(item.type);
//     }
//     return typeList;
// }

// export function getTypeCount(typeArr) {
//     const typeCount = [];
//     for (const item of typeArr) {
//         typeCount.push(item.captured);
//     }
//     return typeCount;
// }
