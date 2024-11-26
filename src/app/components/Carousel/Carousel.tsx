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
      <Box style={{ width: '80%' }}>
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
        display={'flex'}
        width={'62.5rem'}
        height={'18.75rem'}
        alignItems={'center'}
        justifyContent={'end'}
      >
        <Box width={'80%'}>
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
              width: '25rem',
              justifyContent: 'space-between',
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
