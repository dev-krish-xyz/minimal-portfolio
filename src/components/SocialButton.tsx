import React from 'react';
import { styled } from '@mui/material/styles';

interface SocialButtonProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const StyledSocialButton = styled('button')<{ buttonSize?: 'small' | 'medium' | 'large' }>(({ theme, buttonSize = 'medium' }) => {
  const sizes = {
    small: { width: 48, height: 48 },
    medium: { width: 56, height: 56 },
    large: { width: 64, height: 64 }
  };

  return {
    background: 'rgba(0, 0, 0, 0.05)',
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: '50%',
    color: theme.palette.text.primary,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    ...sizes[buttonSize],
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      background: theme.palette.text.primary,
      color: theme.palette.background.default,
      transform: 'translateY(-2px) scale(1.05)',
      boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
    }
  };
});

const SocialButton: React.FC<SocialButtonProps> = ({ href, ariaLabel, children, size = 'medium' }) => {
  return (
    <StyledSocialButton
      aria-label={ariaLabel}
      buttonSize={size}
      onClick={() => {
        window.open(href, '_blank', 'noopener,noreferrer');
      }}
    >
      {children}
    </StyledSocialButton>
  );
};

export default SocialButton;