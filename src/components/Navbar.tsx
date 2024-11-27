'use client';

import { DiagonalArrow } from '@/app/components/svg/DiagonalArrow';
import { Box, Button, useMediaQuery } from '@mui/material';
import Image from 'next/image';

export const Navbar = () => {
  const isMobile = useMediaQuery('(min-width: 600px)');

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
          position: 'absolute',
          left: 0,
          top: 0,
          marginLeft: '2rem',
          marginTop: '2rem',
        }}
        src={'/logo.svg'}
        alt="logo"
        width={107}
        height={56}
        id="logo"
      />
      <Box
        position={'absolute'}
        right={0}
        top={0}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={2}
        sx={{ marginRight: '2rem', marginTop: '2rem' }}
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
