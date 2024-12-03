/* eslint-disable @next/next/no-img-element */
'use client';

import { Box, Button, Typography } from '@mui/material';
import './Carousel.css';
import { DiagonalArrow } from '../svg/DiagonalArrow';
import { NextButton, PrevButton } from './CarouselButtons/CarouselButtons';
import { EmblaCarouselType } from 'embla-carousel';

const ServicesContent: React.FC<{
  emblaApi?: EmblaCarouselType;
  services: { title: string; description: string }[];
  selectedIndex: number;
}> = ({ emblaApi, services, selectedIndex }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: 'fit-content',
        margin: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: '0.375rem',
        }}
      >
        <Typography
          fontWeight="bold"
          color="#008428"
          fontSize="2.25rem"
          lineHeight="91%"
          maxWidth={'30ch'}
        >
          {services[selectedIndex ?? 0]?.title} {/* Título dinámico */}
        </Typography>
        <Typography
          fontWeight="semibold"
          color="#848282"
          fontSize="clamp(0.875rem, 0.5707rem + 1.5217vw, 1.75rem)"
          lineHeight="2.094rem"
          maxWidth={'30ch'}
        >
          {services[selectedIndex ?? 0]?.description}{' '}
          {/* Descripción dinámica */}
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          gap: '1rem',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            width: {
              xs: '55%',
              sm: '55%',
              md: '100%',
              lg: '100%',
            },

            maxWidth: '420rem',
            justifyContent: 'space-between',
            padding: '0 0.5rem',
            marginTop: '1rem',
          }}
        >
          <PrevButton onClick={() => emblaApi?.scrollPrev()} />
          <NextButton onClick={() => emblaApi?.scrollNext()} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: '2rem',
            position: {
              xs: 'relative',
              sm: 'relative',
              md: 'relative',
              lg: 'absolute',
              xl: 'absolute',
            },
            right: {
              xs: '0',
              sm: '0',
              md: '0',
              lg: 'clamp(3rem,5vw, 5rem)',
              xl: 'clamp(3rem,5vw, 5rem)',
            },
            bottom: {
              xs: '0',
              sm: '0',
              md: '0',
              lg: '4rem',
              xl: '4rem',
            },
            zIndex: 10,
            transform: {
              xs: 'scale(0.8)',
              sm: 'scale(0.8)',
              md: 'scale(1)',
              lg: 'scale(1)',
              xl: 'scale(1)',
            },
            width: {
              xs: '45%',
              sm: '45%',
              md: '100%',
              lg: '100%',
            },
            marginBottom: {
              xs: '1rem',
              sm: '1rem',
              md: '0',
              lg: '0',
            },
          }}
        >
          <Button variant="mainGreen" endIcon={<DiagonalArrow />}>
            Servicios
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ServicesContent;
