import { pxToRem } from '@/helpers/pxToRem';
import { Box, Typography } from '@mui/material';

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
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        alignItems: 'stretch',
        gap: '1rem',
        left: 'clamp(1.25rem, 10vw, 10.625rem)',
      }}
      id="productsIcons"
    >
      <Box sx={{}}>
        <Box
          sx={{
            display: 'flex',
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
        {images.map((image) => {
          return (
            <img
              src={image}
              alt="Logo"
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
