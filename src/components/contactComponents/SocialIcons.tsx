import { pxToRem } from '@/helpers/pxToRem';
import { Box, Link, SxProps, Theme } from '@mui/material';
import React from 'react';

export const SocialIcons = ({ sx }: { sx?: SxProps<Theme> }) => {
  return (
    <Box
      sx={{
        display: { xs: 'none', lg: 'inline-flex' },
        alignItems: 'center',
        gap: '1rem',
        marginTop: '2rem',
        marginLeft: pxToRem(35),
        ...sx,
      }}
    >
      <Link
        href="#"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <svg
          width="31"
          height="31"
          viewBox="0 0 31 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.445 0C6.91486 0 0 6.91486 0 15.445C0 23.9751 6.91486 30.89 15.445 30.89C23.9751 30.89 30.89 23.9751 30.89 15.445C30.89 6.91486 23.9751 0 15.445 0ZM11.6642 21.8466H8.53658V11.7816H11.6642V21.8466ZM10.0811 10.546C9.09324 10.546 8.45453 9.84619 8.45453 8.98062C8.45453 8.09736 9.11255 7.41843 10.1213 7.41843C11.1301 7.41843 11.7479 8.09736 11.7672 8.98062C11.7672 9.84619 11.1301 10.546 10.0811 10.546ZM23.0871 21.8466H19.9594V16.2687C19.9594 14.9704 19.5057 14.0887 18.3747 14.0887C17.5108 14.0887 16.9975 14.6856 16.7707 15.26C16.687 15.4643 16.6661 15.7539 16.6661 16.0419V21.845H13.5369V14.9913C13.5369 13.7348 13.4967 12.6842 13.4548 11.78H16.1722L16.3154 13.1781H16.3781C16.79 12.5217 17.7988 11.5532 19.4864 11.5532C21.5442 11.5532 23.0871 12.932 23.0871 15.8955V21.8466Z"
            fill="#464646"
          />
        </svg>
        <Box
          className="sr-only"
          sx={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: 0,
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            borderWidth: 0,
          }}
        >
          linkedin
        </Box>
      </Link>
      <Link
        href="#"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <svg
          width="32"
          height="31"
          viewBox="0 0 32 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.7796 15.4837C31.7796 6.9367 24.8603 0 16.3346 0C7.80901 0 0.889648 6.9367 0.889648 15.4837C0.889648 22.9778 6.20273 29.2178 13.2456 30.6577V20.1288H10.1566V15.4837H13.2456V11.6128C13.2456 8.62443 15.6705 6.19348 18.6514 6.19348H22.5126V10.8386H19.4236C18.5742 10.8386 17.8791 11.5354 17.8791 12.387V15.4837H22.5126V20.1288H17.8791V30.89C25.6789 30.1158 31.7796 23.5198 31.7796 15.4837Z"
            fill="#464646"
          />
        </svg>
        <Box
          className="sr-only"
          sx={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: 0,
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            borderWidth: 0,
          }}
        >
          Facebook
        </Box>
      </Link>
      <Link
        href="#"
        className="text-muted-foreground hover:text-primary transition-colors"
      >
        <svg
          width="32"
          height="31"
          viewBox="0 0 32 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.7104 15.8195C18.7011 16.3088 18.5467 16.7843 18.2669 17.1857C17.987 17.5871 17.5943 17.8964 17.1384 18.0744C16.6826 18.2524 16.1841 18.291 15.7063 18.1853C15.2285 18.0797 14.7928 17.8346 14.4544 17.4811C14.1161 17.1275 13.8903 16.6815 13.8057 16.1995C13.7212 15.7175 13.7816 15.2213 13.9794 14.7736C14.1772 14.326 14.5034 13.9472 14.9167 13.6852C15.3301 13.4233 15.8118 13.2899 16.3011 13.302C16.9511 13.3261 17.5663 13.6024 18.0161 14.0724C18.4658 14.5424 18.7149 15.169 18.7104 15.8195Z"
            fill="#464646"
          />
          <path
            d="M20.4921 8.08154H12.1133C11.2843 8.08154 10.4891 8.41089 9.9029 8.99714C9.31665 9.58338 8.9873 10.3785 8.9873 11.2076V19.7748C8.9873 20.1853 9.06816 20.5918 9.22526 20.9711C9.38236 21.3504 9.61262 21.695 9.9029 21.9852C10.1932 22.2755 10.5378 22.5058 10.9171 22.6629C11.2963 22.82 11.7028 22.9008 12.1133 22.9008H20.4921C20.9027 22.9008 21.3092 22.82 21.6884 22.6629C22.0677 22.5058 22.4123 22.2755 22.7026 21.9852C22.9929 21.695 23.2231 21.3504 23.3802 20.9711C23.5373 20.5918 23.6182 20.1853 23.6182 19.7748V11.223C23.6198 10.8113 23.5402 10.4033 23.3838 10.0225C23.2275 9.64161 22.9976 9.29533 22.7072 9.0035C22.4167 8.71166 22.0716 8.48 21.6915 8.3218C21.3114 8.16359 20.9039 8.08195 20.4921 8.08154ZM16.302 20.0096C15.4725 20.0283 14.6563 19.7995 13.9575 19.3523C13.2587 18.9051 12.709 18.2598 12.3785 17.4988C12.048 16.7378 11.9518 15.8956 12.1021 15.0797C12.2524 14.2638 12.6424 13.5111 13.2223 12.9178C13.8022 12.3245 14.5457 11.9174 15.358 11.7486C16.1703 11.5797 17.0145 11.6567 17.7828 11.9697C18.5512 12.2827 19.2088 12.8176 19.6718 13.506C20.1349 14.1944 20.3823 15.0052 20.3825 15.8348C20.3888 16.3769 20.2883 16.9149 20.0866 17.4182C19.8849 17.9214 19.5861 18.3799 19.2072 18.7676C18.8282 19.1553 18.3766 19.4645 17.8781 19.6776C17.3796 19.8907 16.8441 20.0035 16.302 20.0096ZM20.8366 11.6616C20.7347 11.6617 20.6338 11.6414 20.5398 11.6019C20.4458 11.5624 20.3607 11.5046 20.2893 11.4318C20.218 11.3591 20.1619 11.2728 20.1243 11.178C20.0867 11.0833 20.0684 10.982 20.0705 10.8801C20.0705 10.6729 20.1528 10.4741 20.2994 10.3275C20.446 10.181 20.6447 10.0986 20.852 10.0986C21.0593 10.0986 21.2581 10.181 21.4046 10.3275C21.5512 10.4741 21.6335 10.6729 21.6335 10.8801C21.6366 10.9905 21.6158 11.1002 21.5725 11.2017C21.5293 11.3033 21.4646 11.3942 21.3829 11.4685C21.3012 11.5427 21.2044 11.5984 21.0992 11.6317C20.994 11.6651 20.8828 11.6753 20.7732 11.6616H20.8366Z"
            fill="#464646"
          />
          <path
            d="M16.3025 0.000193329C12.2063 -0.0202878 8.2697 1.58729 5.35875 4.46927C2.44781 7.35125 0.800948 11.2716 0.780467 15.3678C0.759986 19.464 2.36756 23.4006 5.24954 26.3115C8.13152 29.2225 12.0518 30.8693 16.148 30.8898C18.1763 30.9 20.1867 30.5105 22.0644 29.7437C23.9421 28.9769 25.6504 27.8477 27.0918 26.4207C28.5332 24.9937 29.6793 23.2968 30.4649 21.4268C31.2504 19.5568 31.6599 17.5505 31.6701 15.5222C31.6802 13.494 31.2908 11.4836 30.524 9.60587C29.7572 7.72814 28.628 6.01983 27.201 4.57848C25.774 3.13712 24.0771 1.99095 22.2071 1.20541C20.3371 0.419868 18.3307 0.0103345 16.3025 0.000193329ZM25.6821 19.6182C25.6864 20.3111 25.5532 20.998 25.29 21.639C25.0269 22.28 24.6391 22.8624 24.1492 23.3524C23.6593 23.8425 23.0771 24.2304 22.4361 24.4937C21.7952 24.757 21.1084 24.8905 20.4154 24.8864H12.1926C11.4998 24.8903 10.8132 24.7567 10.1723 24.4935C9.53151 24.2302 8.94927 23.8424 8.45931 23.3526C7.96936 22.8628 7.58142 22.2807 7.31795 21.6399C7.05448 20.9992 6.92072 20.3125 6.92441 19.6197V11.3954C6.92011 10.7025 7.05338 10.0156 7.31651 9.37459C7.57965 8.73357 7.9674 8.15117 8.45729 7.66113C8.94719 7.17109 9.52948 6.78316 10.1704 6.51984C10.8114 6.25653 11.4982 6.12305 12.1911 6.12715H20.4154C21.1082 6.12305 21.7949 6.25648 22.4358 6.5197C23.0766 6.78292 23.6588 7.17071 24.1487 7.66058C24.6386 8.15046 25.0264 8.73268 25.2896 9.37352C25.5528 10.0143 25.6862 10.7011 25.6821 11.3938V19.6182Z"
            fill="#464646"
          />
        </svg>
        <Box
          className="sr-only"
          sx={{
            position: 'absolute',
            width: '1px',
            height: '1px',
            padding: 0,
            margin: '-1px',
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            whiteSpace: 'nowrap',
            borderWidth: 0,
          }}
        >
          Instagram
        </Box>
      </Link>
    </Box>
  );
};