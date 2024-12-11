'use client';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface Props {
  title: string;
  location: string;
  titleShadow: string;
}

function Title({ title, location, titleShadow }: Props) {
  const isMobile = useMediaQuery('(max-width:780px)');
  const isDesktop = useMediaQuery('(max-width:1500px)');
  return (
    <Box
      sx={{
        width: '100%',
        color: '#008428',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: { xs: '4rem', md: '1rem' },
        marginBottom: { xs: '5rem', sm: '5rem', xl: '15rem' },
      }}
    >
      {!isMobile ? (
        <Box
          sx={{
            position: 'absolute',
            top: '0',
            left: '-20%',
            borderRadius: '100%',
            background: `radial-gradient(circle, rgba(0, 132, 40, .1) 0%, rgba(0, 132, 40, 0) 70%)`,
            width: '100%',
            height: '20rem',
            filter: 'blur(15px)',
          }}
        ></Box>
      ) : null}
      {!isDesktop ? (
        <Box
          sx={{
            position: 'absolute',
            top: '-10%',
          }}
        >
          <Image
            src={'/lineas.png'}
            alt="background lines"
            width={1000}
            height={563}
          />
        </Box>
      ) : null}
      <Box
        sx={{
          width: '100%',
          color: '#008428',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
          alignItems: 'center',
          position: 'relative',
          height: '100%',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            color: '#008428',
          }}
        >
          <Typography
            variant="shadow"
            sx={{
              position: 'absolute',
              fontSize: 'clamp(4rem, 10vw, 14.063rem)',
              textWrap: 'nowrap',
              fontWeight: 'bold',
              lineHeight: 'clamp(2.5rem, 5vw, 5.438rem)',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              height: '100%',
            }}
          >
            {titleShadow}
          </Typography>
        </Box>
        <Typography
          variant="main"
          sx={{
            fontSize: 'clamp(2.5rem, 5vw, 5rem)',
            fontWeight: 'bold',
            textAlign: 'center',
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
          {'//'}
          {location}
        </Typography>
      </Box>
    </Box>
  );
}

export default Title;
