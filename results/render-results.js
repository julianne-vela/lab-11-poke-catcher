export function renderResults(pokemon) {
    console.log(pokemon);
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
