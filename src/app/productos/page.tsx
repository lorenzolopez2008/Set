'use client';
import { Box } from '@mui/material';

import { ProductSectionCarrusel } from '@/components/ProductSectionCarousel/ProductSectionCarousel';

import Title from '@/components/Title';

export default function Page() {
  return (
    <Box sx={{ overflowX: 'hidden', marginBottom: '6rem' }}>
      <Title
        location="Productos"
        title="Nuestros Productos"
        titleShadow="Productos SET"
      />

      <ProductSectionCarrusel />
    </Box>
  );
}
