// import React, { useEffect, useRef } from 'react';
// import L from 'leaflet';
// // import 'leaflet/dist/leaflet.css';
// // import 'leaflet/dist/leaflet.css'; // Importando os estilos do Leaflet Indoor
// // import geojsonData from '../../map/Cpalos01.geojson'; // O arquivo GeoJSON com dados de mapa indoor
// import './index.css';

// const MapaIndoor = () => {
//   const mapRef = useRef(null);

//   useEffect(() => {
//     if (mapRef.current) {
//       // Criando o mapa Leaflet
//       const map = L.map(mapRef.current, {
//         center: [51.505, -0.09], // Define a posição inicial do mapa
//         zoom: 16, // Nível de zoom inicial
//       });

//       // Adicionando camada de tile (fundos do mapa)
//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//       // Criando o mapa indoor com o Leaflet Indoor
//       const indoorLayer = L.indoor().addTo(map);

//       // Adicionando o arquivo GeoJSON ao mapa indoor
//       L.geoJSON(geojsonData).addTo(indoorLayer);

//       // Caso precise de algo mais avançado, como gerenciar diferentes andares ou níveis
//       indoorLayer.setIndoorMap(geojsonData); // Isso pode ser necessário se você usar diferentes andares no seu GeoJSON
//     }
//   }, []);

//   return (
//     <div id="map" ref={mapRef} style={{ height: '50%' }} />
//   );
// };

// export default MapaIndoor;
