/* eslint-disable @next/next/no-img-element */
import { Box } from '@mui/material';
import React from 'react';
import GoogleMap from './GoogleMap';
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
      <GoogleMap />
    </Box>
  );
}

export default Map;
