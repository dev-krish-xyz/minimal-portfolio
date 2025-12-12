import { createTheme, type PaletteMode } from '@mui/material/styles';

export const getTheme = (mode: PaletteMode) => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#000000' : '#ffffff',
      light: mode === 'light' ? '#212529' : '#e9ecef',
      dark: mode === 'light' ? '#000000' : '#ffffff',
      contrastText: mode === 'light' ? '#ffffff' : '#000000'
    },
    secondary: {
      main: mode === 'light' ? '#6c757d' : '#adb5bd',
      light: mode === 'light' ? '#adb5bd' : '#ced4da',
      dark: mode === 'light' ? '#495057' : '#6c757d',
      contrastText: '#ffffff'
    },
    text: {
      primary: mode === 'light' ? '#000000' : '#ffffff',
      secondary: mode === 'light' ? '#495057' : '#adb5bd',
      disabled: mode === 'light' ? '#adb5bd' : '#6c757d'
    },
    background: {
      default: mode === 'light' ? '#ffffff' : '#0a0a0a',
      paper: mode === 'light' ? '#f8f9fa' : '#1a1a1a'
    },
    grey: {
      50: mode === 'light' ? '#f8f9fa' : '#1a1a1a',
      100: mode === 'light' ? '#e9ecef' : '#212529',
      200: mode === 'light' ? '#dee2e6' : '#343a40',
      300: mode === 'light' ? '#ced4da' : '#495057',
      400: mode === 'light' ? '#adb5bd' : '#6c757d',
      500: '#6c757d',
      600: mode === 'light' ? '#495057' : '#adb5bd',
      700: mode === 'light' ? '#343a40' : '#ced4da',
      800: mode === 'light' ? '#212529' : '#dee2e6',
      900: mode === 'light' ? '#000000' : '#f8f9fa'
    },
    divider: mode === 'light' ? '#dee2e6' : '#343a40'
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