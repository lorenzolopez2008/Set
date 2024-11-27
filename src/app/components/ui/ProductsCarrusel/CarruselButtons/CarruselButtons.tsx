import { Arrow } from '@/app/components/svg/Arrow';
import { Box, Button, Typography } from '@mui/material';
import { EmblaCarouselType } from 'embla-carousel';

interface CarruselButtonsProps {
  emblaApi?: EmblaCarouselType | null;
}

export const CarruselButtons = ({ emblaApi }: CarruselButtonsProps) => {
  const handlePrev = () => {
    emblaApi?.scrollPrev();
  };

  const handleNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <Button
        onClick={handlePrev}
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
        onClick={handleNext}
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
