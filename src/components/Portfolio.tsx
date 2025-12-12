import { type FC } from 'react';
import { CssBaseline } from '@mui/material';
import LandingSection from './LandingSection';
import EducationSection from './EducationSection';
import TechnicalSkillsSection from './TechnicalSkillsSection';
import ProjectsSection from './ProjectsSection';
import CertificationsSection from './CertificationsSection';
import ContactSection from './ContactSection';
import FloatingNavbar from './FloatingNavbar';
import ThemeToggle from './ThemeToggle';

const Portfolio: FC = () => {
  return (
    <>
      <CssBaseline />
      <ThemeToggle />
      <LandingSection />
      <EducationSection />
      <TechnicalSkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <FloatingNavbar />
    </>
  );
};

export default Portfolio;