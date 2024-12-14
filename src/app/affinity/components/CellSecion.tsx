'use client';

import { Box, Divider, Typography } from '@mui/material';
import Image from 'next/image';

export default function CellSection() {
  return (
    <Box
      sx={{
        py: 6,
        paddingInline: { xs: 2, md: '6.18rem 10.18rem' },
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        background: '#FFFFFF url("/affini/rightBlur.png")',
        backgroundRepeat: 'no-repeat',
        backgroundPositionX: 'right',
        backgroundPositionY: 'center',
        gap: 8,
      }}
    >
      <Box
        sx={{
          position: 'relative',
          width: '300px',
          minWidth: '300px',
          height: '300px',
        }}
      >
        <Image
          src="/affini/cell image.png"
          alt="Yellow spherical cell illustration"
          fill
          style={{ objectFit: 'contain' }}
          priority
        />
      </Box>

      <Typography
        variant="h2"
        sx={{
          fontSize: { xs: '2rem', md: '2.5rem' },
          fontWeight: 300,
          lineHeight: 1.2,
          mb: 1,
        }}
      >
        Right Targets,
        <br />
        <span style={{ color: '#9c27b0' }}>Right Cells,</span>
        <br />
        Right Place.
      </Typography>
      <Divider
        orientation="vertical"
        variant="middle"
        flexItem
        sx={{ height: '11.25rem', alignSelf: 'center' }}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 3,
          mt: 4,
          maxWidth: '43.875rem',
        }}
      >
        <Typography variant="body1">
          From advancements in gene editing and synthetic biology to first
          approvals in cell therapies and KRAS-targeted treatments, the cadence
          of innovation in cancer therapeutics has accelerated over the past
          decade.
        </Typography>

        <Typography variant="body1">
          On their own, these new scientific and medical developments have
          brought treatment options to countless patients suffering from a
          variety of cancer types. However, for many patients, the potential of
          these approaches has yet to be fully realized, especially for those
          patients with advanced solid tumors.
        </Typography>

        <Typography variant="body1">
          Now is the right time to leverage scientific advancements to deliver
          potentially curative therapies by unlocking the power of T cells and
          targeting oncogenic driver mutations.
        </Typography>
      </Box>
    </Box>
  );
}
