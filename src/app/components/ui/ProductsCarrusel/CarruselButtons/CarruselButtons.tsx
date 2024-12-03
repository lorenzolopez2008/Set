import { Arrow } from '@/app/components/svg/Arrow';
import { Box, Button, Typography } from '@mui/material';
import { EmblaCarouselType } from 'embla-carousel';

interface CarruselButtonsProps {
  emblaApi?: EmblaCarouselType | null;
  id: string;
}

export const CarruselButtons = ({ emblaApi, id }: CarruselButtonsProps) => {
  const handlePrev = () => {
    emblaApi?.scrollPrev();
  };

  const handleNext = () => {
    emblaApi?.scrollNext();
  };

  return (
    <Box
      id={id}
      sx={{
        position: 'absolute',
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        bottom: { xs: '-8rem', md: '2rem', xl: '-6rem' },
        paddingX: '2rem',
        zIndex: 20,
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
