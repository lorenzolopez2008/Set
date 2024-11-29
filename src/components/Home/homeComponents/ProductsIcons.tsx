import { Box, Typography } from '@mui/material';
import Image from 'next/image';

export const ProductsIcons = () => {
  const services = ['Impresión', 'Acabado', 'Periféricos', 'Complementos'];
  const images = [
    '/dowell.svg',
    'hanglobal.svg',
    '/dowell.svg',
    'hanglobal.svg',
  ];

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
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
              sx={{ flexGrow: 1, textAlign: 'center' }}
            >
              {service}
            </Typography>
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          itemsAlign: 'center',
          justifyContent: 'center',
        }}
      >
        {images.map((image, i) => {
          return (
            <Image
              key={i}
              src={image}
              alt=""
              width={145}
              height={145}
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
