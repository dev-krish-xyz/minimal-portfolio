import React from 'react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import LandingSection from './components/LandingSection';

// Simple working theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fa'
    },
    text: {
      primary: '#000000',
      secondary: '#495057',
    },
    grey: {
      50: '#f8f9fa',
      100: '#e9ecef',
      200: '#dee2e6',
      300: '#ced4da',
      400: '#adb5bd',
      500: '#6c757d',
      600: '#495057',
    }
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  }
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingSection />
    </ThemeProvider>
  );
};

export default App;