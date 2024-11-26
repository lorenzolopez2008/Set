'use client';

import { Box, Button, Typography } from '@mui/material';
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from './CarouselButtons/CarouselButtons';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { DiagonalArrow } from '../svg/DiagonalArrow';

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
    <>
      <Box style={{ width: '76%' }}>
        <Box className="embla">
          <Box className="embla__viewport" ref={emblaRef}>
            <Box className="embla__container">
              {images.map((image) => {
                return (
                  <Box className="embla__slide">
                    <img
                      src={image}
                      alt=""
                      style={{
                        height: 'clamp(13.353rem, 40vw, 37.298rem)',
                        width: 'clamp(13.353rem, 40vw, 37.298rem)',
                      }}
                    />
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
      {/* buttons */}
      <Box
        width={'100%'}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'center'}
        padding={'0 5rem'}
      >
        <Box sx={{ marginLeft: 'auto' }}>
          <Box>
            <Typography
              fontWeight={'bold'}
              color="#008428"
              fontSize={'2.25rem'}
              lineHeight={'91%'}
            >
              Servicios de <br /> Mantenimiento
            </Typography>
            <Typography
              fontWeight={'semibold'}
              color="#848282"
              fontSize={'1.75rem'}
              lineHeight={'2.094rem'}
              paddingTop={'2rem'}
              paddingBottom={'3rem'}
            >
              Servico de mantenimiento
              <br /> correctivo, preventivo y<br /> implementación de
              tecnología.
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: '100%',
              maxWidth: '420rem',
              justifyContent: 'space-between',
              padding: '0 .5rem',
            }}
          >
            <PrevButton
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <NextButton
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            height: '100%',
            alignItems: 'end',
            paddingBottom: '2rem',
            marginLeft: 'auto',
          }}
        >
          <Button variant="mainGreen" endIcon={<DiagonalArrow />}>
            Servicios
          </Button>
        </Box>
      </Box>
    </>
  );
};
