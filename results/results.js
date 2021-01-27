import { clearRotom, getRotom } from '../common/utils/local-storage-api.js';
import { captureMungies, encounterMungies, nameMungies } from './render-results.js';
var ctx = document.getElementById('myChart').getContext('2d');

const rotoData = getRotom();

// --color1: hsla(0, 100%, 50%, 1); red
// --color2: hsla(0, 100%, 40%, 1); dark red
// --color3: hsla(233, 57%, 51%, 1); blue
// --color4: hsla(52, 100%, 50%, 1); yellow
// --color5: hsla(52, 66%, 42%, 1); dark yellow
// --color6: hsla(52, 66%, 42%, .25); light yellow

var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: nameMungies(rotoData),
        datasets: [{
            label: '# of Captures',
            data: captureMungies(rotoData),
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    stepSize: 1
                }
            }]
        }
    }
});


const clearGameBtn = document.getElementById('clear-game');

clearGameBtn.addEventListener('click', () => {
    clearRotom();
    alert('Thanks for playing!');
    location.href = '../index.html';
});
