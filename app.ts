import { Serie } from './Serie.js';
import { series } from './data.js';

const tableBody = document.getElementById('seriesTableBody') as HTMLTableSectionElement;
let totalSeasons = 0;

function displaySeriesDetail(serie: Serie) {
    const seriesDetailCard = document.getElementById('seriesDetailCard') as HTMLElement;
    const seriesImage = document.getElementById('seriesImage') as HTMLImageElement;
    const seriesTitle = document.getElementById('seriesTitle') as HTMLElement;
    const seriesDescription = document.getElementById('seriesDescription') as HTMLElement;
    const seriesLink = document.getElementById('seriesLink') as HTMLAnchorElement;
    const seriesImageContainer = document.getElementById('seriesImageContainer') as HTMLElement;

    // seriesImage.src = serie.imageUrl;
    // seriesImage.alt = serie.name;
    // seriesImage.title = serie.name;

    seriesImageContainer.style.backgroundImage = `url(${serie.imageUrl})`;


    seriesTitle.textContent = serie.name;
    seriesDescription.textContent = serie.description;
    seriesLink.href = serie.link;

    seriesDetailCard.style.display = 'block';
}


series.forEach(serie => {
    const row = tableBody.insertRow();
    row.insertCell(0).textContent = serie.id.toString();
    row.insertCell(1).textContent = serie.name;
    row.insertCell(2).textContent = serie.channel;
    row.insertCell(3).textContent = serie.seasons.toString();
    totalSeasons += serie.seasons;
    row.addEventListener('click', () => {
        displaySeriesDetail(serie);
    });
});

const averageSeasons = totalSeasons / series.length;
const averageElement = document.getElementById('averageSeasons');
if (averageElement) {
    averageElement.textContent = `Seasons average: ${averageSeasons}`;
}
