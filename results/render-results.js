export function renderResults(pokemon) {
    const encounters = pokemon.encountered;
    const captures = pokemon.captured;
    const name = pokemon.pokemon;

    const tr = document.createElement('tr');
    tr.classList.add('pokemon-result');

    const nameTd = document.createElement('td');
    nameTd.classList.add('capitalize');
    const encountersTd = document.createElement('td');
    encountersTd.classList.add('capitalize');
    const capturesTd = document.createElement('td');
    capturesTd.classList.add('capitalize');

    nameTd.textContent = name;
    encountersTd.textContent = encounters;
    capturesTd.textContent = captures;

    tr.append(nameTd, encountersTd, capturesTd);

    return tr;
}

export function encounterMungies(rotoData) {
    const encounterDataArray = [];

    for (let item of rotoData) {
        encounterDataArray.push(item.encountered);
    }

    return encounterDataArray;
}
export function captureMungies(rotoData) {
    const captureDataArray = [];

    for (let item of rotoData) {
        captureDataArray.push(item.captured);
    }

    return captureDataArray;
}
export function nameMungies(rotoData) {
    const nameDataArray = [];

    for (let item of rotoData) {
        nameDataArray.push(item.pokemon);
    }

    return nameDataArray;
}
