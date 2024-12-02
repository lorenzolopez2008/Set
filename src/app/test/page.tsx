import { Box } from '@mui/material';
import { Carousel } from '../components/Carousel/Carousel';

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
};
export default Test;
