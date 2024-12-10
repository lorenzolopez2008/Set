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
  console.log('ola no mergees');
  return (
    <html lang="en" id="smooth-wrapper">
      <body id="smooth-content">
        <VisibilityProvider disabled>
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
