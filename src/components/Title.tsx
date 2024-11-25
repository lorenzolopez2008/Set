import { Box, Button, Typography } from '@mui/material';
import React from 'react';

interface Props {
  title: string;
  location: string;
  titleShadow: string;
}

function Title({ title, location, titleShadow }: Props) {
  return (
    <Box
      sx={{
        width: '100%',
        color: '#008428',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '12.875rem',
          color: '#008428',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            fontSize: 'clamp(5.313rem, 10vw, 14.063rem)',
            whiteSpace: 'nowrap',
            fontWeight: 'bold',
            opacity: '4%',
            color: '#1D1D1F',
            textAlign: 'start',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            fontFamily: 'Arial',
          }}
        >
          {titleShadow}
        </Box>
        <Typography
          sx={{
            fontSize: 'clamp(2.5rem, 5vw, 5.438rem)',
            fontWeight: 'bold',
          }}
        >
          {title}
        </Typography>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Typography
          sx={{
            paddingRight: 1,
            fontWeight: 'bold',
            fontSize: 'clamp(1.625rem, 2vw, 2.023rem)',
          }}
        >
          Home
        </Typography>
        <Typography
          sx={{
            color: '#00346D',
            fontWeight: 'bold',
            padding: 0,
            fontSize: 'clamp(1.625rem, 2vw, 2.023rem)',
          }}
        >
          //{location}
        </Typography>
      </Box>
    </Box>
  );
}

export default Title;
