import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistryProvider from '../providers/ThemeRegistryProvider';

import { GsapProvider } from '@/providers/GsapProvider';
import { VisibilityProvider } from '@/providers/Testing';

export const metadata: Metadata = {
  title: 'Set',
  description: 'Consultoria en Tecnologia',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <VisibilityProvider disabled>
          <ThemeRegistryProvider>
            <GsapProvider>{children}</GsapProvider>
          </ThemeRegistryProvider>
        </VisibilityProvider>
      </body>
    </html>
  );
}
