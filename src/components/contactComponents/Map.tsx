/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/material';
import React from 'react';
interface Props {
  isMobile: boolean;
}
function Map({ isMobile }: Props) {
  return (
    <Box sx={{ width: isMobile ? '100%' : '50%' }}>
      <img
        src="/map.png"
        style={{
          width: '100%',
          height: 'clamp(15.1rem, 45vw, 35.25rem)',
        }}
        alt="map"
      />
    </Box>
  );
}

export default Map;

/* width: 'clamp(20.400rem, 45vw, 55.875rem)',
          height: 'clamp(15.1rem, 45vw, 35.25rem)', */
