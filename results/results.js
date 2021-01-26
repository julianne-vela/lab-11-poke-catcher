import { clearRotom, getRotom } from '../common/utils/local-storage-api.js';
import { findByName } from '../common/utils/utils.js';
import { renderResults } from './render-results.js';

const table = document.querySelector('tbody');
const clearGameBtn = document.getElementById('clear-game');

const rotoData = getRotom();

for (let pokemon of rotoData) {
    const pokeItem = findByName(rotoData, pokemon.pokemon);
    const resultsDataRow = renderResults(pokeItem);

    table.append(resultsDataRow);
}

clearGameBtn.addEventListener('click', () => {
    clearRotom();
    alert('Thanks for playing!');
    location.href = '../game/index.html';
});