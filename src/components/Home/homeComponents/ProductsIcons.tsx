import { pxToRem } from '@/helpers/pxToRem';
import { Box, Typography } from '@mui/material';

export const ProductsIcons = () => {
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
      <Box></Box>
      <Box></Box>
    </Box>
  );
};
