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
  bottom: 20,
  left: '50%',
  transform: 'translateX(-50%)',
  background: theme.palette.mode === 'light'
    ? 'rgba(255, 255, 255, 0.95)'
    : 'rgba(30, 30, 30, 0.95)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: `2px solid ${theme.palette.divider}`,
  borderRadius: '50px',
  padding: theme.spacing(1, 1.5),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(1),
  boxShadow: theme.palette.mode === 'light'
    ? '0 8px 32px rgba(0, 0, 0, 0.12)'
    : '0 8px 32px rgba(0, 0, 0, 0.6)',
  zIndex: 1000,
  transition: 'all 0.3s ease',
  maxWidth: 'calc(100vw - 32px)',
  width: 'auto',
  '&:hover': {
    boxShadow: theme.palette.mode === 'light'
      ? '0 12px 40px rgba(0, 0, 0, 0.18)'
      : '0 12px 40px rgba(0, 0, 0, 0.7)',
    transform: 'translateX(-50%) translateY(-3px)'
  },
  [theme.breakpoints.down('md')]: {
    bottom: 16,
    padding: theme.spacing(0.75, 1.25),
    gap: theme.spacing(0.75),
    maxWidth: 'calc(100vw - 24px)'
  },
  [theme.breakpoints.down('sm')]: {
    bottom: 12,
    padding: theme.spacing(0.6, 1),
    gap: theme.spacing(0.5),
    maxWidth: 'calc(100vw - 16px)',
    borderWidth: '1.5px'
  }
}));

const NavButton = styled(IconButton)<{ active?: boolean }>(({ theme, active }) => ({
  width: 48,
  height: 48,
  minWidth: 48,
  minHeight: 48,
  borderRadius: '50%',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  flexShrink: 0,
  padding: 0,
  color: active 
    ? theme.palette.mode === 'light' ? '#ffffff' : '#121212'
    : theme.palette.text.secondary,
  background: active 
    ? theme.palette.mode === 'light' ? '#000000' : '#e0e0e0'
    : 'transparent',
  '& .MuiSvgIcon-root': {
    fontSize: '1.3rem'
  },
  '&:hover': {
    background: active 
      ? theme.palette.mode === 'light' ? '#000000' : '#e0e0e0'
      : theme.palette.mode === 'light' 
        ? 'rgba(0, 0, 0, 0.06)' 
        : 'rgba(255, 255, 255, 0.08)',
    color: active 
      ? theme.palette.mode === 'light' ? '#ffffff' : '#121212'
      : theme.palette.text.primary,
    transform: 'scale(1.08)'
  },
  [theme.breakpoints.down('md')]: {
    width: 44,
    height: 44,
    minWidth: 44,
    minHeight: 44,
    '& .MuiSvgIcon-root': {
      fontSize: '1.2rem'
    }
  },
  [theme.breakpoints.down('sm')]: {
    width: 38,
    height: 38,
    minWidth: 38,
    minHeight: 38,
    '& .MuiSvgIcon-root': {
      fontSize: '1.05rem'
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