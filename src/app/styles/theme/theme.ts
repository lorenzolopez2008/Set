import { inter } from '@/fonts';
import { pxToRem } from '@/helpers/pxToRem';
import { createTheme } from '@mui/material';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    main: true;
    title: true;
    paragraph: true;
    shadow: true;
    productTitle: true;
    productDescription: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    mainGreen: true;
    mainBlue: true;
  }
}
declare module '@mui/material/Container' {
  interface ContainerPropsVariantOverrides {
    '2xl': true;
  }
}
export const theme = createTheme({
  cssVariables: true,
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'main' },
              style: {
                color: '#008428',
                fontSize: `clamp(${pxToRem(40)}, 3vw ,${pxToRem(102)})`,
                fontFamily: inter.style.fontFamily,
                fontWeight: 800,
              },
            },
            {
              props: { variant: 'title' },
              style: {
                color: '#000',
                fontSize: `clamp(${pxToRem(31)}, 3vw, ${pxToRem(60)})`,
                fontFamily: inter.style.fontFamily,
                fontWeight: 800,
              },
            },
            {
              props: { variant: 'shadow' },
              style: {
                color: '#1D1D1F',
                opacity: 0.06,
                fontSize: `clamp(${pxToRem(85)}, 9vw, ${pxToRem(225)})`,
                fontFamily: inter.style.fontFamily,
                fontWeight: 900,
                position: 'absolute',
                top: '5rem',
              },
            },
            {
              props: { variant: 'paragraph' },
              style: {
                color: '#86868B',
                fontSize: `clamp(${pxToRem(14)}, 1.3vw, ${pxToRem(23)})`,
                fontFamily: inter.style.fontFamily,
                fontWeight: 600,
              },
            },
            {
              props: { variant: 'productTitle' },
              style: {
                color: '#00346D',
                fontSize: `clamp(${pxToRem(28)}, 1.3vw, ${pxToRem(30)})`,
                fontFamily: inter.style.fontFamily,
                fontWeight: 800,
              },
            },
            {
              props: { variant: 'productDescription' },
              style: {
                color: '#86868B',
                fontSize: `clamp(${pxToRem(16)}, 1.3vw, ${pxToRem(23)})`,
                fontFamily: inter.style.fontFamily,
                fontWeight: 600,
              },
            },
          ],
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'mainGreen' },
              style: {
                backgroundColor: '#008428',
                fontSize: pxToRem(14),
                color: '#fff',
                borderRadius: `0 ${pxToRem(12)} 0 ${pxToRem(12)}`,
                height: pxToRem(53),
                width: pxToRem(180),
                display: 'flex',
                justifyContent: 'space-around',
              },
            },
            {
              props: { variant: 'mainBlue' },
              style: {
                backgroundColor: '#00598F',
                fontSize: pxToRem(14),
                color: '#fff',
                borderRadius: `0 ${pxToRem(12)} 0 ${pxToRem(12)}`,
                height: pxToRem(53),
                width: pxToRem(200),
                display: 'flex',
                justifyContent: 'space-around',
              },
            },
          ],
        },
      },
    }, MuiContainer: {
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: '2xl' },
              style: {
                maxWidth: '1920px',
              },
            },
          ],
        },
      }
    }
  },
});
