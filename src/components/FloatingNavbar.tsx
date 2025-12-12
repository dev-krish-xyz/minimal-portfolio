import { type FC, useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import WorkIcon from '@mui/icons-material/Work';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmailIcon from '@mui/icons-material/Email';

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

const FloatingNav = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  left: '50%',
  transform: 'translateX(-50%)',
  background: theme.palette.mode === 'light'
    ? 'rgba(248, 249, 250, 0.95)'
    : 'rgba(26, 26, 26, 0.95)',
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '50px',
  padding: theme.spacing(0.75, 1),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(0.5),
  boxShadow: theme.palette.mode === 'light'
    ? '0 8px 32px rgba(0, 0, 0, 0.15)'
    : '0 8px 32px rgba(0, 0, 0, 0.5)',
  zIndex: 1000,
  transition: 'all 0.3s ease',
  maxWidth: '90vw',
  overflowX: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none'
  },
  '&:hover': {
    boxShadow: theme.palette.mode === 'light'
      ? '0 12px 40px rgba(0, 0, 0, 0.2)'
      : '0 12px 40px rgba(0, 0, 0, 0.6)',
    transform: 'translateX(-50%) translateY(-2px)'
  },
  [theme.breakpoints.down('sm')]: {
    bottom: theme.spacing(1.5),
    padding: theme.spacing(0.5, 0.75),
    gap: theme.spacing(0.25)
  }
}));

const NavButton = styled(IconButton)<{ active?: boolean }>(({ theme, active }) => ({
  width: 48,
  height: 48,
  borderRadius: '50%',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  flexShrink: 0,
  color: active 
    ? theme.palette.background.default 
    : theme.palette.text.secondary,
  background: active 
    ? theme.palette.text.primary 
    : 'transparent',
  '& .MuiSvgIcon-root': {
    fontSize: '1.3rem'
  },
  '&:hover': {
    background: active 
      ? theme.palette.text.primary 
      : theme.palette.mode === 'light' 
        ? 'rgba(0, 0, 0, 0.05)' 
        : 'rgba(255, 255, 255, 0.05)',
    color: active 
      ? theme.palette.background.default 
      : theme.palette.text.primary,
    transform: 'scale(1.1)'
  },
  [theme.breakpoints.down('sm')]: {
    width: 40,
    height: 40,
    '& .MuiSvgIcon-root': {
      fontSize: '1.1rem'
    }
  }
}));

const navItems: NavItem[] = [
  { id: 'home', icon: <HomeIcon />, label: 'Home' },
  { id: 'education', icon: <SchoolIcon />, label: 'Education' },
  { id: 'skills', icon: <CodeIcon />, label: 'Skills' },
  { id: 'projects', icon: <WorkIcon />, label: 'Projects' },
  { id: 'certifications', icon: <WorkspacePremiumIcon />, label: 'Certifications' },
  { id: 'contact', icon: <EmailIcon />, label: 'Contact' }
];

const FloatingNavbar: FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <FloatingNav>
      {navItems.map((item) => (
        <NavButton
          key={item.id}
          active={activeSection === item.id}
          onClick={() => scrollToSection(item.id)}
          aria-label={item.label}
        >
          {item.icon}
        </NavButton>
      ))}
    </FloatingNav>
  );
};

export default FloatingNavbar;