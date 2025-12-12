import { type FC } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { styled } from '@mui/material/styles';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { useThemeMode } from '../contexts/ThemeContext';

const StyledToggleButton = styled(IconButton)(({ theme }) => ({
  position: 'fixed',
  top: theme.spacing(2),
  right: theme.spacing(2),
  width: 56,
  height: 56,
  background: theme.palette.mode === 'light' 
    ? 'rgba(0, 0, 0, 0.05)' 
    : 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: `2px solid ${theme.palette.divider}`,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  zIndex: 1100,
  '&:hover': {
    background: theme.palette.mode === 'light'
      ? 'rgba(0, 0, 0, 0.1)'
      : 'rgba(255, 255, 255, 0.1)',
    transform: 'scale(1.1) rotate(15deg)',
    boxShadow: theme.shadows[8]
  },
  '& .MuiSvgIcon-root': {
    fontSize: '1.5rem',
    transition: 'transform 0.3s ease'
  },
  [theme.breakpoints.down('sm')]: {
    width: 48,
    height: 48,
    top: theme.spacing(1.5),
    right: theme.spacing(1.5),
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