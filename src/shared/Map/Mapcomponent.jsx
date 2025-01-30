import React, { useState } from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { BsFillGeoFill } from "react-icons/bs";

const MapboxComponent = () => {
  const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFyeXNsIiwiYSI6ImNtNmg2MXZtMjA4cm0yanBvMTBsdHJ6bmMifQ.es9nbCj8awzBF6kuOKh1pw';

  // Estado para armazenar a localização do clique
  const [marker, setMarker] = useState(null);

  // Função chamada quando o usuário clica no mapa
  const handleMapClick = (event) => {
    const { lng, lat } = event.lngLat; // Obtém coordenadas do clique
    setMarker({ longitude: lng, latitude: lat });
  };

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <Map
        initialViewState={{
          latitude: -23.185973,
          longitude: -50.656483,
          zoom: 16,
        }}
        style={{ width: '100%', borderRadius: '24px'}}
        mapStyle="mapbox://styles/mapbox/streets-v12"
        mapboxAccessToken={MAPBOX_TOKEN}
        onClick={handleMapClick} // Captura clique no mapa
      >
        {/* Se o usuário clicou, exibe um marcador */}
        {marker && (
          <Marker longitude={marker.longitude} latitude={marker.latitude} anchor="bottom">
            <BsFillGeoFill fontSize={30}/>
          </Marker>
        )}
      </Map>
    </div>
  );
};

export default MapboxComponent;

