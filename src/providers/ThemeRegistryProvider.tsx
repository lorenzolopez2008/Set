'use client';

import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useState } from 'react';
import { theme } from '../app/styles/theme/theme';
import createEmotionCache from '../app/styles/theme/emotionCache';

export interface ThemeRegistryProps {
  children: React.ReactNode;
}

export default function ThemeRegistryProvider({
  children,
}: ThemeRegistryProps) {
  const emotionCache = createEmotionCache();
  const [cache] = useState<EmotionCache>(emotionCache);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
