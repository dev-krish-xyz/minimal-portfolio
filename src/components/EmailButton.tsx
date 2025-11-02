import { type FC } from 'react';
import { styled } from '@mui/material/styles';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';

interface EmailButtonProps {
  email: string;
  children?: React.ReactNode;
}

const StyledEmailButton = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, rgba(0, 0, 0, 0.08) 100%)',
  border: `2px solid ${theme.palette.grey[300]}`,
  borderRadius: '50px',
  padding: theme.spacing(2, 4),
  color: theme.palette.text.primary,
  textDecoration: 'none',
  fontSize: '1.125rem',
  fontWeight: 600,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '100%',
    background: theme.palette.text.primary,
    transition: 'left 0.3s ease',
    zIndex: -1
  },
  '&:hover': {
    color: theme.palette.background.default,
    transform: 'translateY(-3px)',
    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.25)',
    borderColor: theme.palette.text.primary,
    '&::before': {
      left: 0
    }
  }
}));

const EmailButton: FC<EmailButtonProps> = ({ email, children }) => {
  return (
    <StyledEmailButton href={`mailto:${email}`}>
      <AlternateEmailOutlinedIcon sx={{ fontSize: 28 }} />
      {children || email}
    </StyledEmailButton>
  );
};

export default EmailButton;