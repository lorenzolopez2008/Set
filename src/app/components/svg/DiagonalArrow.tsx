'use client';
import Image from 'next/image';
import { Box } from '@mui/material';

export const DiagonalArrow = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '50px',
        width: '32px',
        height: '32px',
      }}
    >
      <Image
        src={'/icons/diagonalArrow.png'}
        alt="arrow"
        width={13}
        height={13}
      />
    </Box>
  );
};
