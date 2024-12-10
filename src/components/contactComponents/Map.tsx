/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/material';
import React from 'react';
import MapboxMap from './MapBox';
interface Props {
  isMobile: boolean;
}
function Map({ isMobile }: Props) {
  return (
    <Box
      sx={{
        width: isMobile ? '100%' : '50%',
        borderRadius: '10px',
      }}
    >
      {/* <GoogleMap /> */}
      <MapboxMap />
    </Box>
  );
}

export default Map;
