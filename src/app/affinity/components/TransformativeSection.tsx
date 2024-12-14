'use client';

import { Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';
interface Cards {
  icon: string;
  text: string;
  color: string;
}

const cards = [
  {
    icon: 'lala',
    text: 'Engineered CD4/CD8 T Cell Products',
    color: '#9D41CB',
  },
  { icon: 'lala', text: 'High Avidity TCR Library', color: '#E96F31' },
  ,
  {
    icon: 'lala',
    text: 'Tumor Microenviroment/ Synthetic Biology Toolkit',
    color: '#000000',
  },
] as Cards[];
export default function TransformativeSection() {
  return (
    <Box
      sx={{
        overflowX: 'hidden',

        background: 'white',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          margin: '2rem',
          marginTop: '6rem',

          backgroundImage:
            'url("/affini/rightBlur.png"), url("/affini/leftBlur.png"),linear-gradient(0deg, rgba(240,216,255,1) 0%, rgba(215,181,237,1) 100%)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right 170%, left top, center center',
          borderRadius: '1.5rem',
          minHeight: '100% ',
          height: 'calc(100vh - 8rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '500px',
              minWidth: '500px',
              height: '500px',
            }}
          >
            <Image
              src="/affini/cell image.png"
              alt="Yellow spherical cell illustration"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </Box>
        </Box>
        <GlassCards cards={cards} />
      </Box>
    </Box>
  );
}
const GlassCards = ({ cards }: { cards: Cards[] }) => {
  return (
    <Box marginLeft={'4rem'}>
      {' '}
      {/* Purple Card */}
      {cards.map((card, i) => (
        <Box
          key={i}
          sx={{
            position: 'relative',
            width: { xs: '100%', md: '33.625rem' },
            height: '13.9375rem',
            bgcolor: card.color + '40',
            borderRadius: '24px',
            p: '0 6rem 0 3.25rem',
            display: 'flex',
            alignItems: 'center',
            mb: { xs: 2, md: '1.6875rem' },
            ml: { xs: 0, md: i * (i > 1 ? 12 : 14) + 'rem' },
            gap: '1.7rem',
            color: 'white',
            backdropFilter: 'blur(42px )',
            '-webkit-backdrop-filter': 'blur( 42px )',
          }}
        >
          <Box width={32} height={32} bgcolor={'red'} />
          <Divider
            orientation="vertical"
            variant="middle"
            flexItem
            sx={{ height: '3rem', alignSelf: 'center', borderColor: 'white' }}
          />
          <Typography sx={{ fontSize: '1.75rem', fontWeight: 400 }}>
            {card.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
