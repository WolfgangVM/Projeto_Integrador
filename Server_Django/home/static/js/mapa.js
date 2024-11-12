        // lacalização inicial Pederneiras
var map = L.map('map').setView([-22.331065, -48.904538], 12); 


        // Adicionando o tile layer (mapa base)
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

        //mostra o ponto clicado como span
// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }
// map.on('click', onMapClick);



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

var marker = L.marker([-22.33971088987327, -49.10821622363105],
    {alt: 'Bauru'}).addTo(map)
    .bindPopup('Local para descarte de reciclaveis, residuos de construção, eletronicos, jardinagem, pneus e móveis');
    


