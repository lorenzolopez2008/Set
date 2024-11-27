import {
  NextButton,
  PrevButton,
} from '@/app/components/Carousel/CarouselButtons/CarouselButtons';
import { Box } from '@mui/material';
import Image from 'next/image';

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
        top: '35%',
      }}
    >
      <Box
        width="clamp(30rem, 40vw, 67rem)"
        height="clamp(18rem, 40vw, 30rem)"
        id="machine"
      >
        <Image src={'/machine.svg'} alt="machine" fill />
      </Box>
      <Box
        sx={{ display: 'flex', justifyContent: 'space-between', width: '90%' }}
        id="machine-buttons"
      >
        <PrevButton />
        <NextButton />
      </Box>
    </Box>
  );
};
