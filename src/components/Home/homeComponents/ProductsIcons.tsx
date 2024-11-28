import { pxToRem } from '@/helpers/pxToRem';
import { Box, Typography } from '@mui/material';

export const ProductsIcons = () => {
  const services = ['Impresión', 'Acabado', 'Periféricos', 'Complementos'];
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        alignItems: 'stretch',
        gap: '1rem',
      }}
      id="productsIcons"
    >
      <Box display="flex ">
        {services.map((service, index) => {
          return (
            <Box>
              <Typography
                variant={'productDescription'}
                color={index === 0 ? 'black' : ''}
              >
                {service}
              </Typography>
            </Box>
          );
        })}
      </Box>
      <Box></Box>
    </Box>
  );
};
