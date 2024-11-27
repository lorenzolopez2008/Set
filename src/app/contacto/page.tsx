'use client';
import { Box, useMediaQuery } from '@mui/material';
import { HeadingSection } from '../components/ui/HeadingSection/HeadingSection';
import Title from '@/components/Title';
import { DecoratedText } from '@/components/contactComponents/DecoratedText';
import Map from '@/components/contactComponents/Map';
import ContactInfo from '@/components/contactComponents/ContactInfo';

export default function Page() {
  const isMobile = useMediaQuery('(max-width:780px)');
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Title
        title="Contáctanos"
        titleShadow="Contáctanos"
        location="Contacto"
      />
      <Box sx={{ paddingLeft: 'clamp(0.2rem, 5vw,3rem)', paddingTop: '5rem' }}>
        <DecoratedText />
      </Box>
      <Box
        sx={{
          paddingLeft: 'clamp(0.2rem, 5vw,3rem)',
          paddingTop: '3rem',
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          gap: '3rem',
        }}
      >
        <Map />
        <ContactInfo />
      </Box>
    </Box>
  );
}
