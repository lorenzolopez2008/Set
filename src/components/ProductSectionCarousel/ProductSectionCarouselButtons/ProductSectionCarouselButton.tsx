'use client';
import { Arrow } from '@/app/components/svg/Arrow';
import { DiagonalArrow } from '@/app/components/svg/DiagonalArrow';
import { Box, Button, Typography } from '@mui/material';
import { EmblaCarouselType } from 'embla-carousel';
import Link from 'next/link';

interface CarruselButtonsProps {
  emblaApi?: EmblaCarouselType | null;
  id?: string;
  showMore?: boolean;
  prevFunction?: () => void;
  nextFunction?: () => void;
  style?: {
    [key: string]: string | number;
  };
}

export const ProductSectionCarouselButton = ({
  emblaApi,
  id,
  prevFunction = () => {
    emblaApi?.scrollPrev();
  },
  nextFunction = () => {
    emblaApi?.scrollNext();
  },
  style,
  showMore = false,
}: CarruselButtonsProps) => {
  return (
    <Box
      id={id}
      sx={
        style || {
          position: 'absolute',
          display: 'flex',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'start',
          bottom: '15%',
          paddingX: '2rem',
          zIndex: 20,
        }
      }
    >
      <Button
        onClick={prevFunction}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <Arrow rotate />

        <Typography
          variant="paragraph"
          sx={{
            color: '#464646',
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          ANT
        </Typography>
      </Button>
      {showMore && (
        <Button
          variant="mainGreen"
          endIcon={<DiagonalArrow />}
          sx={{ marginTop: { xs: '6rem', md: 0 } }}
          LinkComponent={Link}
          href="/lista-productos"
        >
          Ver más
        </Button>
      )}
      <Button
        onClick={nextFunction}
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}
      >
        <Typography
          variant="paragraph"
          sx={{
            color: '#464646',
            fontSize: 14,
            fontWeight: 700,
          }}
        >
          SIG
        </Typography>
        <Arrow />
      </Button>
    </Box>
  );
};
