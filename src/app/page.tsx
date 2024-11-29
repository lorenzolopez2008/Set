import HomePage from '@/components/Home/HomePage';
import { OurClients } from '@/components/ourClients/OurClients';
import { Box } from '@mui/material';
import { ProductCarrusel } from './components/ui/ProductsCarrusel/ProductCarrusel';

export default function Home() {
  return (
    <Box>
      <HomePage />
      <ProductCarrusel />
      <OurClients />
      {/* <HomePage /> */}
      {/* <Footer /> */}
    </Box>
  );
}
