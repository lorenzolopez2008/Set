'use client';

import { Box, Button, List, ListItem, Typography } from '@mui/material';
import { labelStyles } from './Products.style';
import { SvgProducts } from '@/components/svgProducts/SvgProducts';
import { CardGradient } from '@/components/base/CardGradient';
import { DiagonalArrow } from '@/app/components/svg/DiagonalArrow';
import Image from 'next/image';
import HontecImg from '@/public/assets/products/hontec.png';
import DmsImg from '@/public/assets/products/dms.png';
import HciImg from '@/public/assets/products/hci.png';
import DymImg from '@/public/assets/products/dym.png';
import ImavisionImg from '@/public/assets/products/imavision.png';
import { inter } from '@/fonts';

export const Products = () => {
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
    <Box
      sx={{
        display: 'flex',
        flexDirection: { lg: 'row', xs: 'column' },
        justifyContent: { lg: 'space-between', xs: 'center' },
        alignContent: { lg: 'start', xs: 'center' },
        padding: '3.313rem',
      }}
    >
      <List
        sx={{
          width: { lg: '30%', xs: '100%' },
          display: { lg: 'block', xs: 'flex' },
          overflow: 'auto',
          marginBottom: { lg: '0', xs: '2.5rem' },
        }}
      >
        <ListItem sx={labelStyles}>
          <SvgProducts svg="impresion" />
          Impresión Flexográfica
        </ListItem>
        <ListItem sx={labelStyles}>
          <SvgProducts svg="digital" />
          Impresión Digital
        </ListItem>
        <ListItem sx={labelStyles}>
          <SvgProducts svg="acabados" />
          Acabados
        </ListItem>
        <ListItem sx={labelStyles}>
          <SvgProducts svg="equipos" />
          Equipos periféricos
        </ListItem>
        <ListItem sx={labelStyles}>
          <SvgProducts svg="complementos" />
          Complementos
        </ListItem>
      </List>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '4.563rem',
          width: { lg: '70%', xs: '100%' },
        }}
      >
        {products.map((product, index) => (
          <CardGradient>
            <Box
              key={index}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '2.063rem',
                width: '100%',
                height: '100%',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2.063rem',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    minWidth: {
                      lg: '27.125rem',
                      sm: '20.875rem',
                      xs: '15.875rem',
                    },
                    maxWidth: {
                      lg: '27.125rem',
                      sm: '20.875rem',
                      xs: '15.875rem',
                    },
                    minHeight: '14.625rem',
                    maxHeight: '14.625rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
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
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    gap: '0.188rem',
                  }}
                >
                  <Typography
                    component={'h2'}
                    sx={{
                      fontSize: { lg: '1.875rem', xs: '1.75rem' },
                      fontWeight: '700',
                      fontFamily: inter.style.fontFamily,
                      color: '#00346D',
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Typography variant="paragraph">
                    {product.description}
                  </Typography>
                </Box>
              </Box>
              <Button
                sx={{
                  width: { xs: '12.938rem', lg: '18.063rem' },
                  height: { lg: '3.813rem', xs: '3.563rem' },
                  background: '#00598F',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '0 0.75rem',
                  gap: '1rem',
                  marginRight: 'auto',
                  fontSize: { lg: '1.625rem', xs: '1.188rem' },
                  fontWeight: '500',
                  fontFamily: inter.style.fontFamily,
                  textTransform: 'none',
                }}
              >
                Descargar PDF <DiagonalArrow />
              </Button>
            </Box>
          </CardGradient>
        ))}
      </Box>
    </Box>
  );
};
