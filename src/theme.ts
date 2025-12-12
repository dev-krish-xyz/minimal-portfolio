import { createTheme, type PaletteMode } from '@mui/material/styles';

export const getTheme = (mode: PaletteMode) => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#000000' : '#e0e0e0',
      light: mode === 'light' ? '#212529' : '#f5f5f5',
      dark: mode === 'light' ? '#000000' : '#bdbdbd',
      contrastText: mode === 'light' ? '#ffffff' : '#121212'
    },
    secondary: {
      main: mode === 'light' ? '#6c757d' : '#90a4ae',
      light: mode === 'light' ? '#adb5bd' : '#b0bec5',
      dark: mode === 'light' ? '#495057' : '#607d8b',
      contrastText: mode === 'light' ? '#ffffff' : '#121212'
    },
    text: {
      primary: mode === 'light' ? '#000000' : '#e0e0e0',
      secondary: mode === 'light' ? '#495057' : '#b0bec5',
      disabled: mode === 'light' ? '#adb5bd' : '#757575'
    },
    background: {
      default: mode === 'light' ? '#ffffff' : '#121212',
      paper: mode === 'light' ? '#f8f9fa' : '#1e1e1e'
    },
    grey: {
      50: mode === 'light' ? '#f8f9fa' : '#1e1e1e',
      100: mode === 'light' ? '#e9ecef' : '#252525',
      200: mode === 'light' ? '#dee2e6' : '#2c2c2c',
      300: mode === 'light' ? '#ced4da' : '#383838',
      400: mode === 'light' ? '#adb5bd' : '#4a4a4a',
      500: mode === 'light' ? '#6c757d' : '#6c757d',
      600: mode === 'light' ? '#495057' : '#9e9e9e',
      700: mode === 'light' ? '#343a40' : '#b0b0b0',
      800: mode === 'light' ? '#212529' : '#d0d0d0',
      900: mode === 'light' ? '#000000' : '#e0e0e0'
    },
    divider: mode === 'light' ? '#dee2e6' : '#2c2c2c',
    action: {
      active: mode === 'light' ? 'rgba(0, 0, 0, 0.54)' : 'rgba(255, 255, 255, 0.7)',
      hover: mode === 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.08)',
      selected: mode === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.16)',
      disabled: mode === 'light' ? 'rgba(0, 0, 0, 0.26)' : 'rgba(255, 255, 255, 0.3)',
      disabledBackground: mode === 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)'
    }
  },
  typography: {
    fontFamily: '"Inter", "Roboto Mono", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, monospace',
    fontSize: 16,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: '"JetBrains Mono", "Roboto Mono", monospace',
      fontSize: 'clamp(2.5rem, 8vw, 4rem)',
      fontWeight: 700,
      lineHeight: 1.1,
      letterSpacing: '-0.01em'
    },
    h2: {
      fontFamily: '"JetBrains Mono", "Roboto Mono", monospace',
      fontSize: 'clamp(2rem, 6vw, 3rem)',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '0em'
    },
    h3: {
      fontFamily: '"JetBrains Mono", "Roboto Mono", monospace',
      fontSize: 'clamp(1.5rem, 4vw, 2rem)',
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: '0em'
    },
    h4: {
      fontFamily: '"JetBrains Mono", "Roboto Mono", monospace',
      fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: '0em'
    },
    h5: {
      fontFamily: '"JetBrains Mono", "Roboto Mono", monospace',
      fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
      fontWeight: 500,
      lineHeight: 1.4
    },
    h6: {
      fontFamily: '"JetBrains Mono", "Roboto Mono", monospace',
      fontSize: 'clamp(1rem, 2vw, 1.125rem)',
      fontWeight: 600,
      lineHeight: 1.4
    },
    body1: {
      fontFamily: '"Inter", sans-serif',
      fontSize: 'clamp(1rem, 2vw, 1.125rem)',
      lineHeight: 1.6,
      fontWeight: 400
    },
    body2: {
      fontFamily: '"Inter", sans-serif',
      fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
      lineHeight: 1.5,
      fontWeight: 400
    }
  },
  shape: {
    borderRadius: 12
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 16,
          paddingRight: 16,
          '@media (min-width: 600px)': {
            paddingLeft: 24,
            paddingRight: 24
          }
        }
      }
    }
  }
});

const theme = getTheme('light');
export default theme;