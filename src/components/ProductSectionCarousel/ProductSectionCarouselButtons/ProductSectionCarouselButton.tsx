'use client';
import { Arrow } from '@/app/components/svg/Arrow';
import { Box, Button, Typography } from '@mui/material';
import { EmblaCarouselType } from 'embla-carousel';

interface CarruselButtonsProps {
  emblaApi?: EmblaCarouselType | null;
  id?: string;
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
