import { inter } from '@/fonts';
import { pxToRem } from '@/helpers/pxToRem';
import { createTheme } from '@mui/material';

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    main: true;
    title: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    main: true;
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
                fontSize: pxToRem(102),
                fontFamily: inter.style.fontFamily,
                fontWeight: 600,
              },
            },
            {
              props: { variant: 'title' },
              style: {
                color: '#000',
                fontSize: `clamp(${pxToRem(31)}, 3vw, ${pxToRem(60)})`,
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
              props: { variant: 'main' },
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
          ],
        },
      },
    },
  },
});
