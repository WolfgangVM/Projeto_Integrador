// map
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar o mapa
    var map = L.map('map').setView([-23.55052, -46.633308], 12);  // Coordenadas iniciais de São Paulo

    // Adicionar camada de tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Puxar localizações do template
    var locations = JSON.parse(document.getElementById('map-data').textContent);

    // Adicionar marcadores no mapa
    locations.forEach(function(location) {
        var marker = L.marker([location.latitude, location.longitude]).addTo(map);
        marker.bindPopup(location.name);
    });
});
