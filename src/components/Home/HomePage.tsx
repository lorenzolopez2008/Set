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

const images = [
  {
    src: '/1.png',
    description: 'Image 1',
    title: 'tittle',
  },
  {
    src: '/2.png',
    description: 'Image 2',
    title: 'tittle',
  },
  {
    src: '/3.png',
    description: 'Image 3',
    title: 'tittle',
  },
  {
    src: '/1.png',
    description: 'Image 1',
    title: 'tittle',
  },
  {
    src: '/2.png',
    description: 'Image 2',
    title: 'tittle',
  },
  {
    src: '/3.png',
    description: 'Image 3',
    title: 'tittle',
  },
  {
    src: '/1.png',
    description: 'Image 1',
    title: 'tittle',
  },
  {
    src: '/2.png',
    description: 'Image 2',
    title: 'tittle',
  },
  {
    src: '/3.png',
    description: 'Image 3',
    title: 'tittle',
  },
];

export default function HomePage() {
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
