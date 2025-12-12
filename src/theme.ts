import { createTheme, type PaletteMode } from '@mui/material/styles';

export const getTheme = (mode: PaletteMode) => {
  const isDark = mode === 'dark';
  
  return createTheme({
    palette: {
      mode,
      primary: {
        main: isDark ? '#e6e8eb' : '#000000',
        light: isDark ? '#f0f2f5' : '#212529',
        dark: isDark ? '#d1d4d9' : '#000000',
        contrastText: isDark ? '#0f1115' : '#ffffff'
      },
      secondary: {
        main: isDark ? '#a1a6b0' : '#6c757d',
        light: isDark ? '#b8bcc4' : '#adb5bd',
        dark: isDark ? '#8a8f99' : '#495057',
        contrastText: isDark ? '#0f1115' : '#ffffff'
      },
      text: {
        primary: isDark ? '#e6e8eb' : '#000000',
        secondary: isDark ? '#a1a6b0' : '#495057',
        disabled: isDark ? '#6b707a' : '#adb5bd'
      },
      background: {
        default: isDark ? '#0f1115' : '#ffffff',
        paper: isDark ? '#161a1f' : '#f8f9fa'
      },
      grey: {
        50: isDark ? '#1f2430' : '#f8f9fa',
        100: isDark ? '#1b1f26' : '#e9ecef',
        200: isDark ? '#2a2f38' : '#dee2e6',
        300: isDark ? '#3a3f4a' : '#ced4da',
        400: isDark ? '#4a4f5c' : '#adb5bd',
        500: isDark ? '#6b707a' : '#6c757d',
        600: isDark ? '#8a8f99' : '#495057',
        700: isDark ? '#a1a6b0' : '#343a40',
        800: isDark ? '#b8bcc4' : '#212529',
        900: isDark ? '#d1d4d9' : '#000000'
      },
      divider: isDark ? 'rgba(161, 166, 176, 0.12)' : 'rgba(0, 0, 0, 0.08)',
      action: {
        active: isDark ? 'rgba(230, 232, 235, 0.7)' : 'rgba(0, 0, 0, 0.54)',
        hover: isDark ? 'rgba(230, 232, 235, 0.08)' : 'rgba(0, 0, 0, 0.04)',
        selected: isDark ? 'rgba(230, 232, 235, 0.16)' : 'rgba(0, 0, 0, 0.08)',
        disabled: isDark ? 'rgba(230, 232, 235, 0.3)' : 'rgba(0, 0, 0, 0.26)',
        disabledBackground: isDark ? 'rgba(230, 232, 235, 0.12)' : 'rgba(0, 0, 0, 0.12)'
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
        lineHeight: isDark ? 1.15 : 1.1,
        letterSpacing: '-0.01em'
      },
      h2: {
        fontFamily: '"JetBrains Mono", "Roboto Mono", monospace',
        fontSize: 'clamp(2rem, 6vw, 3rem)',
        fontWeight: 600,
        lineHeight: isDark ? 1.25 : 1.2,
        letterSpacing: '0em'
      },
      h3: {
        fontFamily: '"JetBrains Mono", "Roboto Mono", monospace',
        fontSize: 'clamp(1.5rem, 4vw, 2rem)',
        fontWeight: 600,
        lineHeight: isDark ? 1.35 : 1.3,
        letterSpacing: '0em'
      },
      h4: {
        fontFamily: '"JetBrains Mono", "Roboto Mono", monospace',
        fontSize: 'clamp(1.25rem, 3vw, 1.5rem)',
        fontWeight: 500,
        lineHeight: isDark ? 1.45 : 1.4,
        letterSpacing: '0em'
      },
      h5: {
        fontFamily: '"JetBrains Mono", "Roboto Mono", monospace',
        fontSize: 'clamp(1.125rem, 2.5vw, 1.25rem)',
        fontWeight: 500,
        lineHeight: isDark ? 1.45 : 1.4
      },
      h6: {
        fontFamily: '"JetBrains Mono", "Roboto Mono", monospace',
        fontSize: 'clamp(1rem, 2vw, 1.125rem)',
        fontWeight: 600,
        lineHeight: isDark ? 1.45 : 1.4
      },
      body1: {
        fontFamily: '"Inter", sans-serif',
        fontSize: 'clamp(1rem, 2vw, 1.125rem)',
        lineHeight: isDark ? 1.7 : 1.6,
        fontWeight: 400
      },
      body2: {
        fontFamily: '"Inter", sans-serif',
        fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
        lineHeight: isDark ? 1.6 : 1.5,
        fontWeight: 400
      }
    },
    shape: {
      borderRadius: 12
    },
    shadows: isDark ? [
      'none',
      '0px 2px 4px rgba(0, 0, 0, 0.3)',
      '0px 4px 8px rgba(0, 0, 0, 0.35)',
      '0px 6px 12px rgba(0, 0, 0, 0.4)',
      '0px 8px 16px rgba(0, 0, 0, 0.45)',
      '0px 10px 20px rgba(0, 0, 0, 0.5)',
      '0px 12px 24px rgba(0, 0, 0, 0.55)',
      '0px 14px 28px rgba(0, 0, 0, 0.6)',
      '0px 16px 32px rgba(0, 0, 0, 0.65)',
      '0px 18px 36px rgba(0, 0, 0, 0.7)',
      '0px 20px 40px rgba(0, 0, 0, 0.75)',
      '0px 22px 44px rgba(0, 0, 0, 0.8)',
      '0px 24px 48px rgba(0, 0, 0, 0.85)',
      '0px 26px 52px rgba(0, 0, 0, 0.9)',
      '0px 28px 56px rgba(0, 0, 0, 0.95)',
      '0px 30px 60px rgba(0, 0, 0, 1)',
      '0px 32px 64px rgba(0, 0, 0, 1)',
      '0px 34px 68px rgba(0, 0, 0, 1)',
      '0px 36px 72px rgba(0, 0, 0, 1)',
      '0px 38px 76px rgba(0, 0, 0, 1)',
      '0px 40px 80px rgba(0, 0, 0, 1)',
      '0px 42px 84px rgba(0, 0, 0, 1)',
      '0px 44px 88px rgba(0, 0, 0, 1)',
      '0px 46px 92px rgba(0, 0, 0, 1)',
      '0px 48px 96px rgba(0, 0, 0, 1)'
    ] : [
      'none',
      '0px 2px 4px rgba(0, 0, 0, 0.05)',
      '0px 4px 8px rgba(0, 0, 0, 0.08)',
      '0px 8px 16px rgba(0, 0, 0, 0.1)',
      '0px 12px 24px rgba(0, 0, 0, 0.12)',
      '0px 16px 32px rgba(0, 0, 0, 0.15)',
      '0px 20px 40px rgba(0, 0, 0, 0.18)',
      '0px 24px 48px rgba(0, 0, 0, 0.2)',
      '0px 32px 64px rgba(0, 0, 0, 0.25)',
      '0px 40px 80px rgba(0, 0, 0, 0.3)',
      '0px 48px 96px rgba(0, 0, 0, 0.35)',
      '0px 56px 112px rgba(0, 0, 0, 0.4)',
      '0px 64px 128px rgba(0, 0, 0, 0.45)',
      '0px 72px 144px rgba(0, 0, 0, 0.5)',
      '0px 80px 160px rgba(0, 0, 0, 0.55)',
      '0px 88px 176px rgba(0, 0, 0, 0.6)',
      '0px 96px 192px rgba(0, 0, 0, 0.65)',
      '0px 104px 208px rgba(0, 0, 0, 0.7)',
      '0px 112px 224px rgba(0, 0, 0, 0.75)',
      '0px 120px 240px rgba(0, 0, 0, 0.8)',
      '0px 128px 256px rgba(0, 0, 0, 0.85)',
      '0px 136px 272px rgba(0, 0, 0, 0.9)',
      '0px 144px 288px rgba(0, 0, 0, 0.95)',
      '0px 152px 304px rgba(0, 0, 0, 1)',
      '0px 160px 320px rgba(0, 0, 0, 1)'
    ],
    transitions: {
      duration: {
        shortest: 150,
        shorter: 200,
        short: 250,
        standard: 300,
        complex: 375,
        enteringScreen: 225,
        leavingScreen: 195
      },
      easing: {
        easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
        easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
        easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
        sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
      }
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
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: 'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1)'
          }
        }
      },
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
};

const theme = getTheme('light');
export default theme;