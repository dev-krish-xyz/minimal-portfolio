import React, { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

interface NavItem {
  id: string;
  icon: React.ReactNode;
  label: string;
}

const FloatingNav = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(3),
  left: '50%',
  transform: 'translateX(-50%)',
  background: 'rgba(248, 249, 250, 0.9)',
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: '50px',
  padding: theme.spacing(1),
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(1),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
  zIndex: 1000,
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
    transform: 'translateX(-50%) translateY(-2px)'
  }
}));

const NavButton = styled(IconButton)<{ active?: boolean }>(({ theme, active }) => ({
  width: 48,
  height: 48,
  borderRadius: '50%',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  color: active ? theme.palette.background.default : theme.palette.text.secondary,
  background: active ? theme.palette.text.primary : 'transparent',
  '&:hover': {
    background: active ? theme.palette.text.primary : 'rgba(0, 0, 0, 0.05)',
    color: active ? theme.palette.background.default : theme.palette.text.primary,
    transform: 'scale(1.1)'
  }
}));

const navItems: NavItem[] = [
  { id: 'home', icon: <HomeOutlinedIcon />, label: 'Home' },
  { id: 'education', icon: <SchoolOutlinedIcon />, label: 'Education' },
  { id: 'skills', icon: <CodeOutlinedIcon />, label: 'Skills' },
  { id: 'projects', icon: <WorkOutlinedIcon />, label: 'Projects' },
  { id: 'contact', icon: <EmailOutlinedIcon />, label: 'Contact' }
];

const FloatingNavbar: React.FC = () => {
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
  }, [navItems]);

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