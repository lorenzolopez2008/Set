'use client';

import { DiagonalArrow } from '@/app/components/svg/DiagonalArrow';
import { useVisibility } from '@/providers/Testing';
import { Box, Button, useMediaQuery } from '@mui/material';
import Image from 'next/image';

export const Navbar = () => {
  const isMobile = useMediaQuery('(min-width: 600px)');
  const { isVisible } = useVisibility('Navbar');
  if (!isVisible) return null;
  return (
    <Box
      position={'sticky'}
      height={'8rem'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      top={0}
      padding={'2rem'}
      zIndex={80}
    >
      <Image
        style={{
          marginLeft: '1rem',
          marginTop: '1rem',
        }}
        src={'/logo.svg'}
        alt="logo"
        width={107}
        height={56}
        id="logo"
      />
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={2}
        sx={{ marginRight: '1rem', marginTop: '1rem' }}
        id="navbarButtons"
      >
        {isMobile && (
          <Button
            variant="mainGreen"
            sx={{ padding: 1 }}
            endIcon={<DiagonalArrow />}
          >
            Contactanos
          </Button>
        )}

        <Image
          src={'/icons/hamburguer.svg'}
          alt="logo"
          width={90}
          height={40}
        />
      </Box>
    </Box>
  );
};
