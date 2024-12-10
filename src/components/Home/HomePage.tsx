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

gsap.registerPlugin(Observer);

export default function HomePage() {
  const images = [
    '/1.webp',
    '/2.webp',
    '/3.webp',
    '/1.webp',
    '/2.webp',
    '/3.webp',
  ];

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
