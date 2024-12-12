import { Box } from '@mui/material';
import { ListItems } from '@/components/MoreProductsSection/ListItems/ListItems';
import { CardsProducts } from '@/components/MoreProductsSection/CardsProducts/CardsProducts';
import { containerStyles } from './Products.style';
import Title from '../Title';

export const Products = () => {
  return (
    <Box sx={{ marginBottom: '8rem' }}>
      <Title
        title="Nuestros Productos"
        location="Productos"
        titleShadow="Productos SET"
      />
      <Box sx={containerStyles}>
        <ListItems />
        <CardsProducts />
      </Box>
    </Box>
  );
};
