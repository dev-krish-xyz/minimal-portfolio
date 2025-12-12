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
    ? 'rgba(0, 0, 0, 0.04)' 
    : 'rgba(230, 232, 235, 0.06)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: '50%',
  boxShadow: theme.palette.mode === 'light'
    ? '0 2px 8px rgba(0, 0, 0, 0.08)'
    : '0 2px 8px rgba(0, 0, 0, 0.3)',
  transition: 'all 200ms cubic-bezier(0.4, 0, 0.2, 1)',
  zIndex: 1100,
  color: theme.palette.text.primary,
  '&:hover': {
    background: theme.palette.mode === 'light'
      ? 'rgba(0, 0, 0, 0.08)'
      : 'rgba(230, 232, 235, 0.12)',
    transform: 'scale(1.05) rotate(15deg)',
    boxShadow: theme.palette.mode === 'light'
      ? '0 4px 12px rgba(0, 0, 0, 0.12)'
      : '0 4px 12px rgba(0, 0, 0, 0.4)',
    borderColor: theme.palette.mode === 'light'
      ? 'rgba(0, 0, 0, 0.12)'
      : 'rgba(230, 232, 235, 0.2)'
  },
  '& .MuiSvgIcon-root': {
    fontSize: '1.5rem',
    transition: 'transform 200ms ease'
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
    width: 46,
    height: 46,
    top: 12,
    right: 12,
    '& .MuiSvgIcon-root': {
      fontSize: '1.25rem'
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