        // lacalização inicial Pederneiras
var map = L.map('map').setView([-22.348923636964468, -48.77864794069507], 13); 


        // Adicionando o tile layer (mapa base)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}
map.on('click', onMapClick);



        // Função para buscar as localizações e exibi-las no mapa
fetch('/api/localizacoes/')
            .then(response => response.json())
            .then(data => {
                data.forEach(function(localizacao) {
                    L.marker([localizacao.latitude, localizacao.longitude])
                        .addTo(map)
                        .bindPopup(localizacao.nome);
                });
            })
            .catch(error => console.error('Erro ao carregar localizações:', error));


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