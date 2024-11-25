import { pxToRem } from '@/helpers/pxToRem';
import maquinola from '@/public/assets/maquinola.png';
import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { DiagonalArrow } from '../../svg/DiagonalArrow';
export const ProductCard = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: pxToRem(600),
        width: pxToRem(580),
        borderRadius: `0 ${pxToRem(50)} 0 ${pxToRem(50)}`,
        overflow: 'hidden',
        background:
          'linear-gradient(120deg, #00598F 0%, #fafafa 30%, #008428 100%)', // El gradiente como fondo
        padding: '3px',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: pxToRem(16),
          height: '100%',
          width: '100%',
          borderRadius: `0 ${pxToRem(50)} 0 ${pxToRem(50)}`,
          background: '#fff',
          padding: `${pxToRem(36)}`,
        }}
      >
        <Image src={maquinola} alt="maquinola" width={470} height={240} />
        <Typography variant="productTitle">Maquinola</Typography>
        <Typography variant="productDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corporis
          dolore voluptatibus dolor at cumque voluptate voluptatem sequi rerum
          iure, explicabo ratione quibusdam quo nesciunt illum, temporibus
          officia mollitia perspiciatis.
        </Typography>
        <Button variant="mainBlue" endIcon={<DiagonalArrow />}>
          Descargar PDF
        </Button>
      </Box>
    </Box>
  );
};
