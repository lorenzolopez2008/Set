'use client';
import { pxToRem } from '@/helpers/pxToRem';
import { Box, Typography } from '@mui/material';
import brother from '@/public/assets/brother.png';
import Image from 'next/image';
import { Star } from '../Star/Star';
import { useGetScreen } from '@/hooks/useGetScreen';

export const SpeechBubble = ({ children }: { children: React.ReactNode }) => {
  const { screen } = useGetScreen('sm');

  return (
    <Box
      sx={{
        position: 'relative',
        backgroundColor: 'black',
        color: 'white',
        border: '2px solid green',
        borderRadius: `0 ${pxToRem(15)} 0 ${pxToRem(15)}`,
        padding: screen ? '0.2rem' : '0.7rem',
        width: screen ? 'fit-content' : pxToRem(200),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{ borderRadius: `0 ${pxToRem(15)} 0 ${pxToRem(15)}` }}>
            <Image src={brother} alt="brother" width={50} height={50} />
          </Box>
        </Box>

        {!screen ? (
          <Box>
            <Typography sx={{ fontSize: pxToRem(18) }}>{children}</Typography>
            <Star /> 4.8
          </Box>
        ) : null}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: '-10px',
          right: screen ? '4px' : '20px',
          width: 0,
          height: 0,
          borderLeft: '10px solid transparent',
          borderRight: '5px solid transparent',
          borderTop: '10px solid green',
        }}
      />
    </Box>
  );
};
