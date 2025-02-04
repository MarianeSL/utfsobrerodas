import React, { useState } from 'react';
import Map, { Marker, Source, Layer } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { BsFillGeoFill } from "react-icons/bs";

const MapboxComponent = ({ onSelectLocation, route }) => {
  const MAPBOX_TOKEN = 'pk.eyJ1IjoibWFyeXNsIiwiYSI6ImNtNmg2MXZtMjA4cm0yanBvMTBsdHJ6bmMifQ.es9nbCj8awzBF6kuOKh1pw';

  const [marker, setMarker] = useState(null);

  const handleMapClick = (event) => {
    const { lng, lat } = event.lngLat;
    const newMarker = { longitude: lng, latitude: lat };
    setMarker(newMarker);
    onSelectLocation(newMarker);
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
        onClick={handleMapClick}
      >
        {marker && (
          <Marker longitude={marker.longitude} latitude={marker.latitude} anchor="bottom">
            <BsFillGeoFill fontSize={30}/>
          </Marker>
        )}
        {route && (
          <Source id="route" type="geojson" data={route}>
            <Layer
              id="route"
              type="line"
              paint={{
                'line-color': '#3b82f6',
                'line-width': 4,
              }}
            />
          </Source>
        )}
      </Map>
    </div>
  );
};

export default MapboxComponent;