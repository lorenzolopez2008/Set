import { Box } from '@mui/material';
import { ListItems } from '@/components/MoreProductsSection/ListItems/ListItems';
import { CardsProducts } from '@/components/MoreProductsSection/CardsProducts/CardsProducts';
import { containerStyles } from './Products.style';

export const Products = () => {
  return (
    <Box sx={containerStyles}>
      <ListItems />
      <CardsProducts />
    </Box>
  );
};
