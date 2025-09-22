import React from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import theme from '../theme';
import LandingSection from './LandingSection';
import EducationSection from './EducationSection';
import TechnicalSkillsSection from './TechnicalSkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';
import FloatingNavbar from './FloatingNavbar';

const createEmotionCache = () => {
  return createCache({
    key: "mui",
    prepend: true,
  });
};

const emotionCache = createEmotionCache();

const Portfolio: React.FC = () => {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LandingSection />
        <EducationSection />
        <TechnicalSkillsSection />
        <ProjectsSection />
        <ContactSection />
        <FloatingNavbar />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default Portfolio;