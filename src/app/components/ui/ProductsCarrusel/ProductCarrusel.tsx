// 'use client';
// import { Box } from '@mui/material';
// import useEmblaCarousel from 'embla-carousel-react';
// import { useEffect, useState, useCallback } from 'react';
// import Image from 'next/image';

// import photo1 from '@/public/assets/products/photo-1.png';
// import photo2 from '@/public/assets/products/photo-2.png';
// import photo3 from '@/public/assets/products/photo-3.png';

// const ProductCarrusel = () => {
//   const [emblaRef, emblaApi] = useEmblaCarousel({
//     loop: true,
//     align: 'center',
//     skipSnaps: false,
//   });
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   const images = [photo1, photo2, photo3];

//   const onSelect = useCallback(() => {
//     if (!emblaApi) return;
//     setSelectedIndex(emblaApi.selectedScrollSnap());
//   }, [emblaApi]);

//   useEffect(() => {
//     if (emblaApi) {
//       emblaApi.scrollTo(0);
//       emblaApi.on('select', onSelect);
//     }
//   }, [emblaApi, onSelect]);

//   return (
//     <Box
//       ref={emblaRef}
//       sx={{
//         overflow: 'hidden',
//         width: '100%',
//         position: 'relative',
//       }}
//     >
//       <Box
//         sx={{
//           display: 'flex',
//           willChange: 'transform',
//         }}
//       >
//         {images.map((image, index) => {
//           const isActive = index === selectedIndex;

//           return (
//             <Box
//               key={index}
//               sx={{
//                 flex: '0 0 80%', // Cada elemento ocupa el ancho completo
//                 transform: `scale(${isActive ? 1.1 : 1})`, // Aumenta el tamaño del activo
//                 opacity: isActive ? 1 : 0.6,
//                 transition:
//                   'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
//                 textAlign: 'center',
//               }}
//             >
//               <Image
//                 src={image}
//                 alt={`Product ${index + 1}`}
//                 width={400} // Ajusta este valor según el tamaño deseado
//                 height={400}
//                 style={{
//                   borderRadius: '8px',
//                   boxShadow: isActive
//                     ? '0px 8px 20px rgba(0, 0, 0, 0.3)'
//                     : 'none',
//                 }}
//               />
//             </Box>
//           );
//         })}
//       </Box>
//     </Box>
//   );
// };

// export default ProductCarrusel;

'use client';
import photo1 from '@/public/assets/products/photo-1.png';
import photo2 from '@/public/assets/products/photo-2.png';
import photo3 from '@/public/assets/products/photo-3.png';
import './ProductCard.css';

import React, { useCallback, useEffect, useRef } from 'react';
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

const TWEEN_FACTOR_BASE = 0.52;
import Image from 'next/image';

const numberWithinRange = (number: number, min: number, max: number): number =>
  Math.min(Math.max(number, min), max);

const ProductCarrusel = () => {
  const images = [photo1, photo2, photo3];

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'center',
    skipSnaps: false,
  });
  const tweenFactor = useRef(0);
  const tweenNodes = useRef<HTMLElement[]>([]);

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__slide__number') as HTMLElement;
    });
  }, []);

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
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
          //   tweenNode.style.transform = `scale(${scale})`;
        });
      });
    },
    []
  );

  useEffect(() => {
    if (!emblaApi) return;

    setTweenNodes(emblaApi);
    setTweenFactor(emblaApi);
    tweenScale(emblaApi);

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenScale)
      .on('scroll', tweenScale)
      .on('slideFocus', tweenScale);
  }, [emblaApi, tweenScale]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((image, index) => (
            <div className="embla__slide" key={index}>
              <Image
                src={image}
                alt={`Product ${index + 1}`}
                width={400}
                height={400}
                style={{
                  borderRadius: '8px',
                  boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCarrusel;
