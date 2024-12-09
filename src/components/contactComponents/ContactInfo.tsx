'use client';
import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import { pxToRem } from '@/helpers/pxToRem';

function ContactInfo() {
  const isMobile = useMediaQuery('(max-width: 760px)');

  return (
    <Box
      sx={{
        width: isMobile ? '100%' : '50%',
        color: '#008428',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'start',
      }}
    >
      <Box
        sx={{
          width: '100%',
          height: '33%',
          display: 'flex',
          alignItems: 'start',
          justifyItems: 'start',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Typography variant="productTitle">Atención al cliente</Typography>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ paddingRight: '1rem' }}>
            <Image width={24} height={24} src="/icons/envelope.svg" alt="map" />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="paragraph">Clientes@setindutry.com</Typography>
            <Typography
              sx={{ fontSize: `clamp(${pxToRem(14)}, 1.3vw, ${pxToRem(23)})` }}
              variant="main"
            >
              +52 33 2171 1832
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '33%',
          display: 'flex',
          alignItems: 'start',
          justifyItems: 'start',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Typography variant="productTitle">
          Administración De Nuestra Empresa
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Box sx={{ paddingRight: '1rem' }}>
            <Image width={24} height={24} src="/icons/envelope.svg" alt="map" />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Typography variant="paragraph">
              Administracion@setindutry.com
            </Typography>
            <Typography
              sx={{ fontSize: `clamp(${pxToRem(14)}, 1.3vw, ${pxToRem(23)})` }}
              variant="main"
            >
              +52 33 2301 6197
            </Typography>
          </Box>
        </Box>
      </Box>
      {!isMobile ? (
        <Box sx={{ height: '33%', width: '90%' }}>
          <Box
            sx={{
              backgroundColor: '#00598F',
              borderRadius: '0.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'inter',
              fontSize: 'clamp(0.1rem, 10vw ,1rem)',
              flexDirection: isMobile ? 'column' : 'row',
              color: 'white',
              padding: '2rem',
              height: '80%',
              width: '100%',
            }}
          >
            <Box>
              Canal de Tezontle 57A,
              <br /> Col. P. de Churubusco,
              <br /> Iztapalapa, CDMX.
            </Box>
            <Box
              sx={{ width: '4px', height: '100%', backgroundColor: 'white' }}
            ></Box>
            <Box>
              Blvrd del rodeo 245, El
              <br /> vigia, Zapopan, Jalisco
              <br /> México
            </Box>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            height: '33%',
            width: '100%',
            paddingTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            sx={{
              backgroundColor: '#00598F',
              borderRadius: '0.5rem',
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'inter',
              fontSize: '1.2rem',
              flexDirection: isMobile ? 'column' : 'row',
              color: 'white',
              padding: '2rem',
              height: '80%',
              width: '90%',
              gap: '1rem',
            }}
          >
            <Box>
              Canal de Tezontle 57A, Col. P. de Churubusco, Iztapalapa, CDMX.
            </Box>
            <Box
              sx={{ width: '2px', height: '100%', backgroundColor: 'white' }}
            ></Box>
            <Box>Blvrd del rodeo 245, El vigia, Zapopan, Jalisco México</Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default ContactInfo;
