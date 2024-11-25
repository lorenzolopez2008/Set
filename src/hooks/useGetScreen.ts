import { Breakpoint, useMediaQuery, useTheme } from '@mui/material';

export const useGetScreen = (query: Breakpoint) => {
  const theme = useTheme();
  const screen = useMediaQuery(theme.breakpoints.down(query));

  return { screen };
};
