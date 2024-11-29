import { Box } from '@mui/material';
import { ProductCarrusel } from '../components/ui/ProductsCarrusel/ProductCarrusel';

const page = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
        }}
      />

      <ProductCarrusel />
      <Box
        sx={{
          width: '100%',
          height: '100vh',
        }}
      />
    </>
  );
};

export default page;
