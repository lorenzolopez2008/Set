'use client';

import { Chip, Typography, Box } from '@mui/material';

export default function OurScience() {
  return (
    <Box
      sx={{
        overflowX: 'hidden',

        background: 'white',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          margin: '2rem',
          marginTop: '8rem',
          background: 'url("/affini/dna.png")',
          borderRadius: '1.5rem',
          minHeight: '100% ',
          height: 'calc(100vh - 10rem)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
        }}
      >
        <Text />
        <Box
          sx={{
            height: '14vh',
            width: '27vw',
            background: 'white',
            borderTopRightRadius: '1.5rem',
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: '-40px',
              left: ' 0',
              height: '40px',
              width: '40px',
              borderBottomLeftRadius: '50%',
              backgroundColor: 'transparent',
              boxShadow: ' 0 20px 0 0 #FFF',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '0',
              right: '-40px',
              height: '40px',
              width: '40px',
              borderBottomLeftRadius: '50%',
              backgroundColor: 'transparent',
              boxShadow: ' 0 20px 0 0 #FFF',
            },
          }}
        ></Box>

        <Box
          sx={{
            height: '16vh',
            width: '40vw',
            background: 'white',
            borderTopRightRadius: '1.5rem',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: '0',
              right: '-40px',
              height: '40px',
              width: '40px',
              borderBottomLeftRadius: '50%',
              backgroundColor: 'transparent',
              boxShadow: ' 0 20px 0 0 #FFF',
            },
          }}
        ></Box>
      </Box>
    </Box>
  );
}

const Text = () => {
  return (
    <Box
      sx={{
        maxWidth: '610px',
        p: 3,
        position: 'absolute',
        bottom: 0,
        zIndex: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
          marginBottom: '1rem',
        }}
      >
        <Chip
          label="Unlocking"
          variant="outlined"
          size="small"
          sx={{
            borderRadius: '16px',
            padding: '1rem .75rem',
          }}
        />

        <Typography
          variant="subtitle1"
          sx={{
            color: 'text.secondary',
          }}
        >
          The power of T cells
        </Typography>
      </Box>
      <Box sx={{ position: 'relative', mb: 3 }}>
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '2.5rem', md: '3.5rem' },
            fontWeight: 300,
            lineHeight: 1.2,
          }}
        >
          Our Science
        </Typography>
        <Box
          sx={{
            position: 'absolute',
            bottom: -8,
            left: 0,
            width: '50%',
            height: '4px',
            background: 'linear-gradient(90deg, #9c27b0 0%, #ff9800 100%)',
          }}
        />
      </Box>

      <Typography
        variant="body1"
        sx={{
          color: 'text.secondary',
          lineHeight: 1.7,
        }}
      >
        Over the past decade, cancer treatment has rapidly advanced. Innovations
        in gene editing, synthetic biology, cell therapies, and KRAS-targeted
        treatments have significantly improved, offering new hope for patients.
      </Typography>
    </Box>
  );
};
