'use client';

import { useMediaQuery } from '@mui/material';
import BgCanvasBlur from './BgCanvasBlur';

export const ReturnBgCanvas = () => {
  const isMobile = useMediaQuery('(max-width:780px)');

  return <>{!isMobile && <BgCanvasBlur />}</>;
};
