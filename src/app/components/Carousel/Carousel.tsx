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
    <Box className="embla">
      <Box className="embla__viewport" ref={emblaRef}>
        <Box className="embla__container">
          {images.map((image) => {
            return (
              <Box className="embla__slide">
                <Box
                  className="embla__slide__number"
                  width="clamp(13.353rem, 50vw, 35.064rem)"
                  height="clamp(13.353rem, 50vw, 50.064rem)"
                >
                  <Image src={image} alt="" fill />
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>

      <Box
        position={'absolute'}
        right={'5%'}
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
    </Box>
  );
};
