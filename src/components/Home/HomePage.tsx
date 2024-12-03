'use client';
import { Observer } from 'gsap/dist/Observer';
import { Box } from '@mui/material';
import gsap from 'gsap';
import { useVisibility } from '@/providers/Testing';
import { OurServices } from './homeComponents/OurServices';
import { FadeUpImage } from './homeComponents/FadeUpImage';
import { Carousel } from '@/app/components/Carousel/Carousel';
import { OurClients } from '../ourClients/OurClients';
import { FirstSection } from './homeComponents/FirstSection';
import { SecondSection } from './homeComponents/SecondSection';
import { ThirdSection } from './homeComponents/ThirdSection';
import { useEffect } from 'react';

gsap.registerPlugin(Observer);

export default function HomePage() {
  const images = ['/1.png', '/2.png', '/3.png', '/1.png', '/2.png', '/3.png'];

  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const { isVisible } = useVisibility('HomePage');
  if (!isVisible) return null;
  return (
    <Box
      sx={{
        width: '100%',
        overflowX: 'hidden',
      }}
    >
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <OurServices />
      <FadeUpImage />
      <Carousel images={images} />
      <OurClients />
    </Box>
  );
}
