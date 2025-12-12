import { type FC } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '../theme';
import LandingSection from './LandingSection';
import EducationSection from './EducationSection';
import TechnicalSkillsSection from './TechnicalSkillsSection';
import ProjectsSection from './ProjectsSection';
import CertificationsSection from './CertificationsSection';
import ContactSection from './ContactSection';
import FloatingNavbar from './FloatingNavbar';

const Portfolio: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LandingSection />
      <EducationSection />
      <TechnicalSkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <FloatingNavbar />
    </ThemeProvider>
  );
};

export default Portfolio;