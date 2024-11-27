import { Box } from '@mui/material';

export const CardGradient = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        width: 'fit-content',
        height: '37.5rem',
        maxWidth: { lg: '35rem', xs: '24.688rem' },
        maxHeight: '37.5rem',
        borderRadius: '0 3.125rem',
        overflow: 'visible',
        padding: '0.188rem',
        background:
          'linear-gradient(97deg, #00598F 0%, #00000026 30%, #00000000 40%, #00000026 60%, #008428 100%)',
      }}
    >
      <Box
        sx={{
          borderRadius: '0 2.938rem',
          padding: '2.125rem 2.375rem',
          width: '100%',
          height: '100%',
          background: '#FAFAFA',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};
