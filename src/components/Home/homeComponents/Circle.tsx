import { Box } from '@mui/material';
import Image from 'next/image';

export const Circle = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: 'clamp(25rem, 60vw, 55rem)',
        height: 'clamp(15rem, 60vw, 37rem)',
      }}
    >
      <Image
        src={'/circle.png'}
        alt="circle"
        sizes="full"
        fill
        style={{ aspectRatio: '1/1' }}
      />
    </Box>
  );
};
