import type { Metadata } from 'next';
import './globals.css';
import ThemeRegistryProvider from '../providers/ThemeRegistryProvider';
import Loader from '@/components/Loader/Loader';
import { Navbar } from '@/components/Navbar';
import { GsapProvider } from '@/providers/GsapProvider';
import { VisibilityProvider } from '@/providers/Testing';
import DevTools from '@/hooks/Panel';
import Footer from '@/components/Footer';

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
    <html lang="en">
      <body>
        <VisibilityProvider>
          <Loader />
          <ThemeRegistryProvider>
            <GsapProvider>
              <Navbar />
              {children}
              <Footer />
            </GsapProvider>
            <DevTools />
          </ThemeRegistryProvider>
        </VisibilityProvider>
      </body>
    </html>
  );
}
