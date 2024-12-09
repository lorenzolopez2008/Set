'use client';
import { Box, Button } from '@mui/material';
import { HeadingSection } from '../components/ui/HeadingSection/HeadingSection';
import { DiagonalArrow } from '../components/svg/DiagonalArrow';
import { ProductSectionCarrusel } from '@/components/ProductSectionCarousel/ProductSectionCarousel';
import { useGetScreen } from '@/hooks/useGetScreen';
import Link from 'next/link';

export default function Page() {
  const { screen } = useGetScreen('sm');

  return (
    <Box>
      <HeadingSection
        page="Home"
        section="Productos"
        shadow="Nuestros Productos"
        text="Nuestros Productos"
      />
      <ProductSectionCarrusel />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: screen ? '0' : '-9rem',
          marginBottom: '5rem',
        }}
      >
        <Button
          LinkComponent={Link}
          variant="mainGreen"
          endIcon={<DiagonalArrow />}
          href="/lista-productos"
        >
          Ver más
        </Button>
      </Box>
    </Box>
  );
}
