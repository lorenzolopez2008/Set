import { inter } from '@/fonts';

export const labelStyles = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.9rem',
  fontSize: 'clamp(1.25rem, 1.125rem + 0.625vw, 1.875rem)',
  textWrap:'nowrap',
  fontWeight: '700',
  color: '#515151',
  width: 'fit-content',
  fontFamily: inter.style.fontFamily,
  transition: 'color 0.4s',
  '& svg': {
    transition: 'color 0.4s',
    color: '#008428',
  },
  ':hover': {
    '& svg': {
      color: '#00598F',
    },
    color: '#00598F',
    cursor: 'pointer',
  },
};
