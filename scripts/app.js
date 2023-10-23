import { series } from './data.js';
var tableBody = document.getElementById('seriesTableBody');
var totalSeasons = 0;
function displaySeriesDetail(serie) {
    var seriesDetailCard = document.getElementById('seriesDetailCard');
    var seriesImage = document.getElementById('seriesImage');
    var seriesTitle = document.getElementById('seriesTitle');
    var seriesDescription = document.getElementById('seriesDescription');
    var seriesLink = document.getElementById('seriesLink');
    var seriesImageContainer = document.getElementById('seriesImageContainer');
    // seriesImage.src = serie.imageUrl;
    // seriesImage.alt = serie.name;
    // seriesImage.title = serie.name;
    seriesImageContainer.style.backgroundImage = "url(".concat(serie.imageUrl, ")");
    seriesTitle.textContent = serie.name;
    seriesDescription.textContent = serie.description;
    seriesLink.href = serie.link;
    seriesDetailCard.style.display = 'block';
}
series.forEach(function (serie) {
    var row = tableBody.insertRow();
    row.insertCell(0).textContent = serie.id.toString();
    // add an href to the name
    row.insertCell(1).innerHTML = "<a href=\"".concat(serie.link, "\" target=\"_blank\">").concat(serie.name, "</a>");
    row.insertCell(2).textContent = serie.channel;
    row.insertCell(3).textContent = serie.seasons.toString();
    totalSeasons += serie.seasons;
    row.addEventListener('click', function () {
        displaySeriesDetail(serie);
    });
});
var averageSeasons = totalSeasons / series.length;
var averageElement = document.getElementById('averageSeasons');
if (averageElement) {
    averageElement.textContent = "Seasons average: ".concat(averageSeasons);
}
