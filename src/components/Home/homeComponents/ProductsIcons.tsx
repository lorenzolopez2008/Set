'use client';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

export const ProductsIcons = () => {
  const services = [
    {
      title: 'IMPRESIÓN',
      brands: ['hanglobal.svg', '/dowell.svg', 'hanglobal.svg'],
    },
    {
      title: 'ACABADO',
      brands: ['/dowell.svg', 'hanglobal.svg', '/dowell.svg', 'hanglobal.svg'],
    },
    {
      title: 'PERIFÉRICOS',
      brands: ['/dowell.svg', 'hanglobal.svg', '/dowell.svg', 'hanglobal.svg'],
    },
    {
      title: 'COMPLEMENTOS',
      brands: ['/dowell.svg', 'hanglobal.svg', '/dowell.svg', 'hanglobal.svg'],
    },
  ];

  const [currentService, setCurrentService] = useState(services[0]);
  const [opacity, setOpacity] = useState(1);

  const handleServiceChange = (service: (typeof services)[0]) => {
    setOpacity(0);
    setTimeout(() => {
      setCurrentService(service);
      setOpacity(1);
    }, 300);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: { xs: 'flex-start', sm: 'center' },
        overflowX: 'auto',
        justifyContent: 'center',
        zIndex: 10,
      }}
      id="productsIcons"
    >
      <Box
        sx={{ display: 'flex', itemsAlign: 'center', justifyContent: 'center' }}
      >
        <Box
          sx={{
            display: 'flex',
            itemsAlign: 'center',
            justifyContent: 'center',
            gap: '1rem',
            width: 'clamp( 34.063rem, 80vw,50.563rem)',
          }}
        >
          {services.map((service, index) => (
            <Typography
              key={index}
              variant="productDescription"
              sx={{
                flexGrow: 1,
                textAlign: 'center',
                fontWeight: currentService.title === service.title ? 800 : 600,
                color:
                  currentService.title === service.title ? '#00598F' : '#000',
                transition: 'color 0.3s ease-in-out',
                ':hover': {
                  cursor: 'pointer',
                  color: '#00598F',
                },
              }}
              onClick={() => handleServiceChange(service)} // Usar la nueva función para cambiar de servicio
            >
              {service.title}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          itemsAlign: 'center',
          justifyContent: 'center',
          opacity: opacity,
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        {currentService.brands.map((image, i) => {
          return (
            <Image
              key={i}
              src={image}
              alt={currentService.brands[i]}
              width={145}
              height={50}
              style={{
                height: 'clamp(2.188, 45vw, 3.25rem)',
                width: 'clamp(6.063, 40vw, 9.063rem)',
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
};
