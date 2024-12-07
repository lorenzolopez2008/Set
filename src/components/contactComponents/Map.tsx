/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/material';
import React from 'react';

function Map() {
  return (
    <Box sx={{ width: '50%' }}>
      <img
        src="/map.png"
        style={{
          width: 'clamp(20.400rem, 45vw, 55.875rem)',
          height: 'clamp(15.1rem, 45vw, 35.25rem)',
        }}
        alt="map"
      />
    </Box>
  );
}

export default Map;
