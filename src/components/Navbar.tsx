'use client';

import { DiagonalArrow } from '@/app/components/svg/DiagonalArrow';
import { Box, Button, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';

export const Navbar = () => {
  const isMobile = useMediaQuery('(min-width: 600px)');

  return (
    <Box
      position={'sticky'}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      top={0}
      padding={'2rem'}
      zIndex={100}
    >
      <Image src={'/logo.svg'} alt="logo" width={107} height={56} />
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        gap={2}
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
