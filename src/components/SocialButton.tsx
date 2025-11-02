import { type FC } from 'react';
import { styled } from '@mui/material/styles';

interface SocialButtonProps {
  href: string;
  ariaLabel: string;
  children: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
}

const StyledSocialButton = styled('button')<{ buttonSize?: 'small' | 'medium' | 'large' }>(({ theme, buttonSize = 'medium' }) => {
  const sizes = {
    small: { width: 48, height: 48, fontSize: 20 },
    medium: { width: 56, height: 56, fontSize: 24 },
    large: { width: 64, height: 64, fontSize: 28 }
  };

  return {
    background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.04) 0%, rgba(0, 0, 0, 0.08) 100%)',
    border: `2px solid ${theme.palette.grey[300]}`,
    borderRadius: '50%',
    color: theme.palette.text.primary,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    width: sizes[buttonSize].width,
    height: sizes[buttonSize].height,
    fontSize: sizes[buttonSize].fontSize,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'relative',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: 0,
      height: 0,
      borderRadius: '50%',
      background: theme.palette.text.primary,
      transform: 'translate(-50%, -50%)',
      transition: 'width 0.3s ease, height 0.3s ease'
    },
    '&:hover': {
      color: theme.palette.background.default,
      transform: 'translateY(-3px) scale(1.08)',
      boxShadow: '0 12px 35px rgba(0, 0, 0, 0.25)',
      borderColor: theme.palette.text.primary,
      '&::before': {
        width: '200%',
        height: '200%'
      },
      '& > *': {
        position: 'relative',
        zIndex: 1
      }
    }
  };
});

const SocialButton: FC<SocialButtonProps> = ({ href, ariaLabel, children, size = 'medium' }) => {
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