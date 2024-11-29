'use client';

import { Box } from '@mui/material';
import useEmblaCarousel from 'embla-carousel-react';
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType,
} from 'embla-carousel';
import { useCallback, useEffect, useRef } from 'react';
import { CarruselButtons } from '../ui/ProductsCarrusel/CarruselButtons/CarruselButtons';
import { pxToRem } from '@/helpers/pxToRem';
import './Carousel.css';

interface Props {
  images: string[];
}

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

export const Carousel = ({ images }: Props) => {
  const options: EmblaOptionsType = {
    loop: true,
    watchDrag: true,
  };
  const slides = images;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__number') as HTMLElement;
    });
  }, []);

  const tweenScale = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine();
      const scrollProgress = emblaApi.scrollProgress();
      const slidesInView = emblaApi.slidesInView();
      const isScrollEvent = eventName === 'scroll';

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress;
        const slidesInSnap = engine.slideRegistry[snapIndex];

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target();

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target);

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress);
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress);
                }
              }
            });
          }

          const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current);
          const scale = numberWithinRange(tweenValue, 0, 1).toString();
          const tweenNode = tweenNodes.current[slideIndex];
          tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale);
  }, [emblaApi, tweenScale, setTweenNodes]);

  return (
    <Box sx={{}}>
      <Box sx={{ width: '100%', position: 'relative' }}>
        <Box className="embla">
          <Box className="embla__viewport" ref={emblaRef}>
            <Box className="embla__container">
              {slides.map((img, index) => (
                <Box className="embla__slide" key={index}>
                  <Box className="embla__slide__number">
                    <img
                      src={img}
                      style={{
                        width: `clamp(13.3531rem, 7.1275rem + 31.1283vw, 31.2519rem)`,
                        height: 'auto',
                      }}
                      alt={img}
                    />
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Box
        sx={{
          position: 'relative',
          top: '30rem',
          width: '30%',
          margin: 'auto',
        }}
      > */}
      <CarruselButtons emblaApi={emblaApi} />
      {/* </Box> */}
    </Box>
    // <>
    //   <Box style={{ width: '76%' }}>
    //     <Box className="embla">
    //       <Box className="embla__viewport" ref={emblaRef}>
    //         <Box className="embla__container">
    //           {images.map((image, index) => {
    //             return (
    //               <Box className="embla__slide" key={index}>
    //                 <img
    //                   src={image}
    //                   alt=""
    //                   style={{
    //                     height: 'clamp(13.353rem, 40vw, 37.298rem)',
    //                     width: 'clamp(13.353rem, 40vw, 37.298rem)',
    //                   }}
    //                 />
    //               </Box>
    //             );
    //           })}
    //         </Box>
    //       </Box>
    //     </Box>
    //   </Box>
    //   {/* buttons */}
    //   {isMobile ? (
    //     <Box
    //       width={'100%'}
    //       display={'flex'}
    //       alignItems={'center'}
    //       justifyContent={'center'}
    //       padding={'0 5rem'}
    //     >
    //       <Box sx={{ marginLeft: 'auto' }}>
    //         <Box>
    //           <Typography
    //             fontWeight={'bold'}
    //             color="#008428"
    //             fontSize={'2.25rem'}
    //             lineHeight={'91%'}
    //           >
    //             Servicios de <br /> Mantenimiento
    //           </Typography>
    //           <Typography
    //             fontWeight={'semibold'}
    //             color="#848282"
    //             fontSize={'1.75rem'}
    //             lineHeight={'2.094rem'}
    //             paddingTop={'2rem'}
    //             paddingBottom={'3rem'}
    //           >
    //             Servico de mantenimiento
    //             <br /> correctivo, preventivo y<br /> implementación de
    //             tecnología.
    //           </Typography>
    //         </Box>
    //         <Box
    //           sx={{
    //             display: 'flex',
    //             width: '100%',
    //             maxWidth: '420rem',
    //             justifyContent: 'space-between',
    //             padding: '0 .5rem',
    //           }}
    //         >
    //           <PrevButton
    //             onClick={onPrevButtonClick}
    //             disabled={prevBtnDisabled}
    //           />
    //           <NextButton
    //             onClick={onNextButtonClick}
    //             disabled={nextBtnDisabled}
    //           />
    //         </Box>
    //       </Box>
    //       <Box
    //         sx={{
    //           display: 'flex',
    //           height: '100%',
    //           alignItems: 'end',
    //           paddingBottom: '2rem',
    //           marginLeft: 'auto',
    //         }}
    //       >
    //         <Button variant="mainGreen" endIcon={<DiagonalArrow />}>
    //           Servicios
    //         </Button>
    //       </Box>
    //     </Box>
    //   ) : (
    //     <Box
    //       width={'100%'}
    //       display={'flex'}
    //       alignItems={'center'}
    //       justifyContent={'center'}
    //       padding={'0 2rem'}
    //       marginTop={'1rem'}
    //     >
    //       <Box sx={{ marginLeft: 'auto' }}>
    //         <Box>
    //           <Typography
    //             fontWeight={'bold'}
    //             color="#008428"
    //             fontSize={'2.25rem'}
    //             lineHeight={'91%'}
    //           >
    //             Hola que hace
    //           </Typography>

    //           <Typography
    //             fontWeight={'semibold'}
    //             color="#848282"
    //             fontSize={'1.75rem'}
    //             lineHeight={'2.094rem'}
    //             paddingTop={'2rem'}
    //             paddingBottom={'3rem'}
    //           >
    //             Servico de mantenimiento
    //             <br /> correctivo, preventivo y<br /> implementación de
    //             tecnología.
    //           </Typography>
    //         </Box>
    //         <Box
    //           sx={{
    //             display: 'flex',
    //             width: '100%',
    //             maxWidth: '420rem',
    //             justifyContent: 'space-between',
    //           }}
    //         >
    //           <Box
    //             sx={{
    //               width: '60%',
    //               display: 'flex',
    //               justifyContent: 'space-between',
    //               paddingRight: '5rem',
    //             }}
    //           >
    //             <PrevButton
    //               onClick={onPrevButtonClick}
    //               disabled={prevBtnDisabled}
    //             />
    //             <NextButton
    //               onClick={onNextButtonClick}
    //               disabled={nextBtnDisabled}
    //             />
    //           </Box>
    //           <Box
    //             sx={{
    //               display: 'flex',
    //               alignItems: 'center',
    //               width: '40%',
    //             }}
    //           >
    //             <Button
    //               variant="mainGreen"
    //               sx={{ padding: 1 }}
    //               endIcon={<DiagonalArrow />}
    //             >
    //               Servicios
    //             </Button>
    //           </Box>
    //         </Box>
    //       </Box>
    //     </Box>
    //   )}
    // </>
  );
};
