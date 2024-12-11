import React from 'react';
import Map, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

const MapboxMap = () => {
  const accessToken =
    'pk.eyJ1IjoicmF6Z3JpenoiLCJhIjoiY2xtZmFuaGx1MGd5OTNmcGZyY3hjeDJyZSJ9.26gCUXTWt4lGVC9QT5wMLA'; // Replace with your token

  return (
    <Map
      initialViewState={{
        longitude: -101,
        latitude: 20,
        zoom: 6,
      }}
      style={{ width: '100%', height: '400px', borderRadius: '10px' }}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      mapboxAccessToken={accessToken}
      attributionControl={false}
    >
      <Marker
        longitude={-99.08679785148918}
        latitude={19.382561436311256}
        color="red"
      />
      <Marker
        longitude={-103.37829636442719}
        latitude={20.837359432154425}
        color="red"
      />
    </Map>
  );
};

export default MapboxMap;
