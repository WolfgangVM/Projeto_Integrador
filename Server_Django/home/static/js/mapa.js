        // lacalização inicial Pederneiras
var map = L.map('map').setView([-22.331065, -48.904538], 12); 


        // Adicionando o tile layer (mapa base)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}
map.on('click', onMapClick);



//         // Função para buscar as localizações e exibi-las no mapa
// fetch('/api/localizacoes/')
//             .then(response => response.json())
//             .then(data => {
//                 data.forEach(function(localizacao) {
//                     L.marker([localizacao.latitude, localizacao.longitude])
//                         .addTo(map)
//                         .bindPopup(localizacao.nome);
//                 });
//             })
//             .catch(error => console.error('Erro ao carregar localizações:', error));





            //pontos aadicionados manualmente
var marker = L.marker([-22.348923636964468, -48.77864794069507],
    {alt: 'Pederneiras'}).addTo(map)
    .bindPopup('Cidade de Pederneiras');

var marker = L.marker([-22.320307, -49.070382],
    {alt: 'Bauru'}).addTo(map)
    .bindPopup('Cidede de Bauru');



    // var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    // denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    // aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    // golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');
//         // Mobile 

// var popup = L.popup();

// function onMapClick(e) {
//     popup
//         .setLatLng(e.latlng)
//         .setContent("You clicked the map at " + e.latlng.toString())
//         .openOn(map);
// }

// map.on('click', onMapClick);


// var map = L.map('map').fitWorld();

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap'
// }).addTo(map);

// map.locate({setView: true, maxZoom: 16});

// function onLocationFound(e) {
//     var radius = e.accuracy;

//     L.marker(e.latlng).addTo(map)
//         .bindPopup("You are within " + radius + " meters from this point").openPopup();

//     L.circle(e.latlng, radius).addTo(map);
// }

// map.on('locationfound', onLocationFound);

// function onLocationError(e) {
//     alert(e.message);
// }

// map.on('locationerror', onLocationError);