import React from 'react';
import { IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';

interface SocialButtonProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const StyledSocialButton = styled(IconButton)<{ buttonSize?: 'small' | 'medium' | 'large' }>(({ theme, buttonSize = 'medium' }) => {
  const sizes = {
    small: { width: 48, height: 48 },
    medium: { width: 56, height: 56 },
    large: { width: 64, height: 64 }
  };

  return {
    background: 'rgba(0, 0, 0, 0.05)',
    border: `1px solid ${theme.palette.grey[300]}`,
    color: theme.palette.text.primary,
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
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      buttonSize={size}
    >
      {children}
    </StyledSocialButton>
  );
};

export default SocialButton;