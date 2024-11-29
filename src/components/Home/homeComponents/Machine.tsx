import {
  NextButton,
  PrevButton,
} from '@/app/components/Carousel/CarouselButtons/CarouselButtons';
import { Box } from '@mui/material';
import Image from 'next/image';
import { ProductsIcons } from './ProductsIcons';
import { ProductCarrusel } from '@/app/components/ui/ProductsCarrusel/ProductCarrusel';

export const Machine = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        top: '5%',
        zIndex: 10,
      }}
      id="machinePage"
    >
      <Box
        width="clamp(20rem, 60vw, 80rem)"
        height="clamp(8rem, 60vw, 43rem)"
        zIndex={2}
        id="machine"
      >
        <Image src={'/machine.svg'} alt="machine" fill />
      </Box>
      <Box
        position={'absolute'}
        width="clamp(30rem, 60vw, 55rem)"
        height="clamp(15rem, 60vw, 37rem)"
        id="circle"
      >
        <Image src={'/circle.png'} alt="circle" fill />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
        id="machine-buttons"
      >
        <PrevButton />
        <NextButton />
      </Box>
      <ProductsIcons />
      <ProductCarrusel />
    </Box>
  );
};
