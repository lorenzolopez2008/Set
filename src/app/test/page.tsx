import { Box } from '@mui/material';
import { ProductCarrusel } from '../components/ui/ProductsCarrusel/ProductCarrusel';

<<<<<<< HEAD
const page = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: '100vh',
        }}
      />

      <ProductCarrusel />
      <Box
        sx={{
          width: '100%',
          height: '100vh',
        }}
      />
    </>
  );
=======
const Test = () => {
  const images = [
    {
      src: '/1.png',
      title: 'Image 1',
      description: 'This is image 1',
    },
    {
      src: '/2.png',
      title: 'Image 2',
      description: 'This is image 2',
    },
    {
      src: '/3.png',
      title: 'Image 3',
      description: 'This is image 3',
    },
    {
      src: '/1.png',
      title: 'Image 1',
      description: 'This is image 1',
    },
    {
      src: '/2.png',
      title: 'Image 2',
      description: 'This is image 2',
    },
    {
      src: '/3.png',
      title: 'Image 3',
      description: 'This is image 3',
    },
    {
      src: '/1.png',
      title: 'Image 1',
      description: 'This is image 1',
    },
    {
      src: '/2.png',
      title: 'Image 2',
      description: 'This is image 2',
    },
    {
      src: '/3.png',
      title: 'Image 3',
      description: 'This is image 3',
    },
  ];
  return <Carousel images={images} />;
>>>>>>> ba4c93c85d46459b86a969dc68a516971be1d2bd
};

export default page;
