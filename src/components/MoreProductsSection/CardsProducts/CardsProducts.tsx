import { DiagonalArrow } from '@/app/components/svg/DiagonalArrow';
import { CardGradient } from '@/components/base/CardGradient';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import HontecImg from '@/public/assets/products/hontec.png';
import DmsImg from '@/public/assets/products/dms.png';
import HciImg from '@/public/assets/products/hci.png';
import DymImg from '@/public/assets/products/dym.png';
import ImavisionImg from '@/public/assets/products/imavision.png';
import {
  buttonStyles,
  cardStyles,
  containerImageStyles,
  containerStyles,
  containerTitleStyles,
  titleStyles,
} from './CardsProducts.style';

export const CardsProducts = () => {
  const products = [
    {
      img: HontecImg,
      title: 'Hontec',
      description:
        'Empresa dedicada a la manufactura y desarrollo de equipos de acabado e impresión Flexo.',
    },
    {
      img: DmsImg,
      title: 'DMS',
      description:
        'Tecnología digital de primer nivel especializada en acabado de cold & hot foil.',
    },
    {
      img: HciImg,
      title: 'HCI Manga Te',
      description:
        'Especialista en equipos de conversión y maquinaria cortadora para paquetes flexibles y semiconductores.',
    },
    {
      img: DymImg,
      title: 'DYM (Equipos Non-Stop)',
      description:
        'Tecnología Non-stop para automatizar la impresión de etiquetas con tensión sub-acoplada y de matriz',
    },
    {
      img: ImavisionImg,
      title: 'IMAVISIÓN',
      description:
        'Inspección de impresión para reducir desperdicios, prevenir etiquetas defectuosas y mejorar calidad.',
    },
  ];
  return (
    <Box sx={containerStyles}>
      {products.map((product, index) => (
        <CardGradient key={index}>
          <Box sx={cardStyles}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '2.063rem',
                alignItems: 'center',
              }}
            >
              <Box sx={containerImageStyles}>
                <Image
                  src={product.img}
                  alt="product image"
                  style={{
                    width: '100%',
                    height: '100%',
                    aspectRatio: 'auto',
                  }}
                />
              </Box>
              <Box sx={containerTitleStyles}>
                <Typography component={'h2'} sx={titleStyles}>
                  {product.title}
                </Typography>
                <Typography variant="paragraph">
                  {product.description}
                </Typography>
              </Box>
            </Box>
            <Button sx={buttonStyles}>
              Descargar PDF <DiagonalArrow />
            </Button>
          </Box>
        </CardGradient>
      ))}
    </Box>
  );
};
