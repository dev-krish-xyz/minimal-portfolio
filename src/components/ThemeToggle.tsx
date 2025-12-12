import { type FC } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useThemeMode } from '../contexts/ThemeContext';

const StyledToggleButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  top: 20,
  right: 20,
  width: 56,
  height: 56,
  background: theme.palette.mode === 'light' 
    ? 'rgba(0, 0, 0, 0.06)' 
    : 'rgba(255, 255, 255, 0.08)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: `2px solid ${theme.palette.divider}`,
  borderRadius: '50%',
  boxShadow: theme.palette.mode === 'light'
    ? '0 4px 12px rgba(0, 0, 0, 0.1)'
    : '0 4px 12px rgba(0, 0, 0, 0.5)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  zIndex: 1100,
  color: theme.palette.text.primary,
  '&:hover': {
    background: theme.palette.mode === 'light'
      ? 'rgba(0, 0, 0, 0.12)'
      : 'rgba(255, 255, 255, 0.15)',
    transform: 'scale(1.1) rotate(15deg)',
    boxShadow: theme.palette.mode === 'light'
      ? '0 6px 20px rgba(0, 0, 0, 0.15)'
      : '0 6px 20px rgba(0, 0, 0, 0.6)'
  },
  '& .MuiSvgIcon-root': {
    fontSize: '1.5rem',
    transition: 'transform 0.3s ease'
  },
  [theme.breakpoints.down('md')]: {
    width: 50,
    height: 50,
    top: 16,
    right: 16,
    '& .MuiSvgIcon-root': {
      fontSize: '1.35rem'
    }
  },
  [theme.breakpoints.down('sm')]: {
    width: 44,
    height: 44,
    top: 12,
    right: 12,
    '& .MuiSvgIcon-root': {
      fontSize: '1.2rem'
    }
  }
}));

const ThemeToggle: FC = () => {
  const { mode, toggleTheme } = useThemeMode();

  return (
    <Tooltip title={mode === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'} arrow>
      <StyledToggleButton
        onClick={toggleTheme}
        aria-label="toggle theme"
        color="primary"
      >
        {mode === 'light' ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
      </StyledToggleButton>
    </Tooltip>
  );
};

export default ThemeToggle;