'use client';
import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { useMediaQuery } from '@mui/material';

const center = {
  lat: 20,
  lng: -101,
};

function MyComponent() {
  const isMobile = useMediaQuery('(max-width: 760px)');
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'AIzaSyAV9zEZDbUjXj7GDG2ss9Hp9xCgqk1Mqz0',
  });
  const containerStyle = {
    width: '100%',
    height: isMobile ? '18.75rem' : '31.25rem',
    borderRadius: '10px',
  };

  const markerPosition = {
    lat: 19.382561436311256,
    lng: -99.08679785148918,
  };

  const markerPosition2 = {
    lat: 20.837359432154425,
    lng: -103.37829636442719,
  };

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={7}
      options={{
        scrollwheel: false,
        gestureHandling: 'none',
      }}
    >
      <Marker position={markerPosition} />
      <Marker position={markerPosition2} />
    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
