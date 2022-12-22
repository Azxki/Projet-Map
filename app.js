//Première MAP
let x = function () {
    var map = L.map('map').setView([48.864821, 2.289500], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    let marker = L.marker([50.2865, 3.9612]).addTo(map);

    let circle = L.circle([48.8584, 2.2945], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 150
    }).addTo(map);

    let circle2 = L.circle([48.873792, 2.295028], {
        color: 'yellow',
        fillColor: '#f6ec40',
        fillOpacity: 0.5,
        radius: 150
    }).addTo(map);
    
    let circle3 = L.circle([48.863, 2.2872], {
        color: 'blue',
        fillColor: '#4da1ff',
        fillOpacity: 0.5,
        radius: 150
    }).addTo(map);
}
x();

