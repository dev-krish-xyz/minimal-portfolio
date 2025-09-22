import React from 'react';
import { styled } from '@mui/material/styles';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

interface EmailButtonProps {
  email: string;
  children?: React.ReactNode;
}

const StyledEmailButton = styled('a')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  background: 'rgba(0, 0, 0, 0.05)',
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: '50px',
  padding: theme.spacing(1.5, 3),
  color: theme.palette.text.primary,
  textDecoration: 'none',
  fontSize: '1.1rem',
  fontWeight: 500,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  '&:hover': {
    background: theme.palette.text.primary,
    color: theme.palette.background.default,
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
  }
}));

const EmailButton: React.FC<EmailButtonProps> = ({ email, children }) => {
  return (
    <StyledEmailButton href={`mailto:${email}`}>
      <EmailOutlinedIcon />
      {children || email}
    </StyledEmailButton>
  );
};

export default EmailButton;