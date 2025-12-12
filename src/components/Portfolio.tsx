import { type FC, Suspense, lazy } from 'react';
import { ThemeProvider, CssBaseline, Box, CircularProgress } from '@mui/material';
import theme from '../theme';

// Lazy load components for better error tracking
const LandingSection = lazy(() => import('./LandingSection'));
const EducationSection = lazy(() => import('./EducationSection'));
const TechnicalSkillsSection = lazy(() => import('./TechnicalSkillsSection'));
const ProjectsSection = lazy(() => import('./ProjectsSection'));
const CertificationsSection = lazy(() => import('./CertificationsSection'));
const ContactSection = lazy(() => import('./ContactSection'));
const FloatingNavbar = lazy(() => import('./FloatingNavbar'));

const LoadingFallback = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh'
    }}
  >
    <CircularProgress />
  </Box>
);

const Portfolio: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Suspense fallback={<LoadingFallback />}>
        <LandingSection />
        <EducationSection />
        <TechnicalSkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <ContactSection />
        <FloatingNavbar />
      </Suspense>
    </ThemeProvider>
  );
};

export default Portfolio;