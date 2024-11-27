import { Box, Button, Typography } from '@mui/material';
import { HeadingSection } from '../components/ui/HeadingSection/HeadingSection';
import { pxToRem } from '@/helpers/pxToRem';
import { DiagonalArrow } from '../components/svg/DiagonalArrow';
import { ProductCarrusel } from '../components/ui/ProductsCarrusel/ProductCarrusel';

const page = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        paddingBottom: '2rem',
      }}
    >
      <HeadingSection
        page="Home"
        section="Productos"
        text="Nuestros Productos"
      />
      <Typography
        variant="main"
        sx={{
          fontSize: pxToRem(44),
          fontWeight: 700,
          marginBottom: '3rem',
        }}
      >
        Impresión digital
      </Typography>
      <ProductCarrusel />

      <Button
        variant="mainGreen"
        sx={{
          position: 'absolute',
          bottom: '2rem',
        }}
        endIcon={<DiagonalArrow />}
      >
        Ver más
      </Button>
    </Box>
  );
};

export default page;
