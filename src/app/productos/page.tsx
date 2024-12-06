import { Box, Button, Typography } from '@mui/material';
import { HeadingSection } from '../components/ui/HeadingSection/HeadingSection';
import { ProductCarrusel } from '../components/ui/ProductsCarrusel/ProductCarrusel';
import { DiagonalArrow } from '../components/svg/DiagonalArrow';

export default function Page() {
  return (
    <Box>
      <HeadingSection
        page="Home"
        section="Productos"
        shadow="Nuestros Productos"
        text="Nuestros Productos"
      />
      <ProductCarrusel>
        <Box
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography
            sx={{
              color: '#00598F',
              fontSize: `clamp(20px, 3vw, 44px)`,
              fontWeight: 600,
              position: 'relative',
            }}
          >
            Impresión digital
          </Typography>
        </Box>
      </ProductCarrusel>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '-9rem',
          marginBottom: '5rem',
        }}
      >
        <Button variant="mainGreen" endIcon={<DiagonalArrow />}>
          Ver más
        </Button>
      </Box>
    </Box>
  );
}
