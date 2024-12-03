import { Box } from '@mui/material';
import Image from 'next/image';

export const Circle = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: 'clamp(25rem, 16.3043rem + 30.4783vw, 50rem)',
        height: 'clamp(15rem, 7.3478rem + 20.2609vw, 37rem)',
      }}
    >
      <Image
        src={'/circle.png'}
        alt="circle"
        fill
        style={{ aspectRatio: '1/1' }}
      />
    </Box>
  );
};
