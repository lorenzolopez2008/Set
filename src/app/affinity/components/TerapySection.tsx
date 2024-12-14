'use client';

import { Box, Divider, Typography } from '@mui/material';

export default function TerapySection() {
  return (
    <Box
      sx={{
        py: 6,
        paddingInline: { xs: 2, md: '9.125rem' },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: '#FFFFFF',
        gap: 8,
      }}
    >
      {/* Left Column */}
      <Box width={'40.3125rem'}>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: '1.5rem', md: '1.75rem' },
            color: '#9D41CB',
            fontWeight: 400,
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          Autologous TCR-T cell therapies
        </Typography>
        <Typography
          sx={{
            lineHeight: 1.75,
            fontSize: '1rem',
          }}
        >
          Our in-house, proprietary and differentiated T cell receptor
          engineered T cell (TCR-T) therapy-enabling platforms (TAILOR™, TUNE™,
          THRIVE™) harness state-of-the-art engineering, synthetic biology, and
          manufacturing technologies to optimize T cell function in the
          immunosuppressive tumor microenvironment, aiming at sustained clinical
          responses in patients with solid tumors.
        </Typography>
      </Box>

      {/* Divider */}
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ height: '11.25rem', alignSelf: 'center', borderColor: '#9D41CB' }}
      />

      {/* Right Column */}
      <Box width={'40.3125rem'}>
        <Typography
          component="h2"
          sx={{
            fontSize: { xs: '1.5rem', md: '1.75rem' },
            color: '#9D41CB',
            fontWeight: 400,
            mb: 2,
            lineHeight: 1.2,
          }}
        >
          Bispecific T Cell Engagers
        </Typography>
        <Typography
          sx={{
            lineHeight: 1.75,
            fontSize: '1rem',
          }}
        >
          Our in-house, proprietary and differentiated bispecific T Cell Engager
          therapy-enabling platform (TETHER™) harness state-of-the-art affinity
          maturation capabilities using yeast display modalities to identify
          specific high affinity TCRs and biotherapeutic technologies to produce
          T Cell Engager with balanced CD3 binders and extended half-life for
          optimal T cell engagement, aiming at sustained T cell responses
          against solid tumors.
        </Typography>
      </Box>
    </Box>
  );
}
