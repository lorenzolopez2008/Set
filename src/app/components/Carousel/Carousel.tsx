'use client';

import { Box } from '@mui/material';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './CarouselButtons/CarouselButtons';
import useEmblaCarousel from 'embla-carousel-react';

interface Props {
  images: string[];
}

export const Carousel = ({ images }: Props) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <Box className="embla">
      <Box className="embla__viewport" ref={emblaRef}>
        <Box className="embla__container">
          {images.map((image) => {
            return (
              <Box className="embla__slide">
                <Box className="embla__slide__number">
                  <img src={image} alt="" />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box className="embla__controls">
        <Box className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </Box>
      </Box>
    </Box>
  );
};
