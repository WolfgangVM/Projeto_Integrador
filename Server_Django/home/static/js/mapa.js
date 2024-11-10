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

var marker = L.marker([-22.3505, -48.780789],
    {alt: 'Pederneiras'}).addTo(map)
    .bindPopup('Local para descarte de Metal,Vidro, Plastico, Papelão e Papel');

var marker = L.marker([-22.320307, -49.070382],
    {alt: 'Bauru'}).addTo(map)
    .bindPopup('Cidede de Bauru');



 var littleton = L.marker([39.61, -105.02]).bindPopup('This is Littleton, CO.'),
    denver    = L.marker([39.74, -104.99]).bindPopup('This is Denver, CO.'),
    aurora    = L.marker([39.73, -104.8]).bindPopup('This is Aurora, CO.'),
    golden    = L.marker([39.77, -105.23]).bindPopup('This is Golden, CO.');


        // Mobile 

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


         //layers control
// var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap'
// });

// var osmHOT = L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '© OpenStreetMap contributors, Tiles style by Humanitarian OpenStreetMap Team hosted by OpenStreetMap France'});

// var map = L.map('map', {
//     center: [39.73, -104.99],
//     zoom: 10,
//     layers: [osm, cities]
// });
// var baseMaps = {
//     "OpenStreetMap": osm,
//     "OpenStreetMap.HOT": osmHOT
// };

// var overlayMaps = {
//     "Cities": cities
// };
// var baseMaps = {
//     "OpenStreetMap": osm,
//     "<span style='color: red'>OpenStreetMap.HOT</span>": osmHOT
// };
// var crownHill = L.marker([39.75, -105.09]).bindPopup('This is Crown Hill Park.'),
//     rubyHill = L.marker([39.68, -105.00]).bindPopup('This is Ruby Hill Park.');
    
// var parks = L.layerGroup([crownHill, rubyHill]);
// var openTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: 'Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)'
// });

// layerControl.addBaseLayer(openTopoMap, "OpenTopoMap");
// layerControl.addOverlay(parks, "Parks");
            