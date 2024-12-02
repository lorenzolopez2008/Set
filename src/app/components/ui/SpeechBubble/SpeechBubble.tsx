'use client';
import { pxToRem } from '@/helpers/pxToRem';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { Star } from '../Star/Star';
import { useGetScreen } from '@/hooks/useGetScreen';

export const SpeechBubble = ({
  name,
  photoUrl,
  rate,
  handleClick,
}: {
  name: string;
  photoUrl: string;
  rate: number;
  handleClick: (name: string) => void;
}) => {
  const { screen } = useGetScreen('sm');

  return (
    <Box
      onClick={() => handleClick(name)}
      sx={{
        position: 'relative',
        backgroundColor: 'black',
        color: 'white',
        borderRadius: `0 ${pxToRem(15)} 0 ${pxToRem(15)}`,
        padding: screen ? '0.2rem' : '0.7rem',
        width: screen ? 'fit-content' : pxToRem(200),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        transform: 'translate(-60%, -50%) scale(0.7)',
        transition: 'transform 0.3s ease-in-out',
        cursor: 'pointer',
        ':hover': {
          transform: 'translate(-60%, -50%) scale(1)',
        },
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
            <Image src={photoUrl} alt="" width={60} height={60} />
          </Box>
        </Box>

        {!screen ? (
          <Box>
            <Typography sx={{ fontSize: pxToRem(18) }}>{name}</Typography>
            <Star /> {rate}
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
          borderTop: '10px solid black',
        }}
      />
    </Box>
  );
};
