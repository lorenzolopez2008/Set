import { Box } from '@mui/material';
import { useState, useEffect } from 'react';

export const BlueDotBackground = () => {
  const [randomPosition1, setRandomPosition1] = useState<number>(40);
  const [randomPosition2, setRandomPosition2] = useState<number>(40);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPos1 = Math.floor(Math.random() * 350);
      const newPos2 = Math.floor(Math.random() * 350);

      setRandomPosition1(newPos1);
      setRandomPosition2(newPos2);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 101,
        width: '100vw',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          backgroundColor: '#00598F',
          height: '350px',
          width: '350px',
          borderRadius: '50%',
          position: 'absolute',
          transform: `translate(${randomPosition1}px, ${randomPosition2}px)`,
          transition: 'transform 4s ease-in-out',
          filter: 'blur(100px)',
          opacity: 0,
        }}
        className="bubble"
      ></Box>
      <Box
        sx={{
          backgroundColor: '#00598F',
          height: '350px',
          width: '350px',
          borderRadius: '50%',
          position: 'absolute',
          bottom: '0',
          right: '0',
          transform: `translate(${-randomPosition2}px, ${-randomPosition1}px)`,
          transition: 'transform 4s ease-in-out',
          filter: 'blur(100px)',
          opacity: 0,
        }}
        className="bubble"
      ></Box>
    </Box>
  );
};
