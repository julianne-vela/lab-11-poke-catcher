import { clearRotom, getRotom } from '../common/utils/local-storage-api.js';
import { captureMungies, encounterMungies, nameMungies } from './render-results.js';
var ctx = document.getElementById('myChart').getContext('2d');

const rotoData = getRotom();


var myChart = new Chart(ctx, { // eslint-disable-line
    type: 'bar',
    data: {
        labels: nameMungies(rotoData),
        datasets: [{
            label: '# of Encounters',
            data: encounterMungies(rotoData),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }, {
            label: '# of Captures',
            data: captureMungies(rotoData),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }
        ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
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
