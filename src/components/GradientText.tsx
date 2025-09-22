import React from 'react';
import { Typography, TypographyProps } from '@mui/material';
import { styled } from '@mui/material/styles';

interface GradientTextProps extends TypographyProps {
  gradient?: string;
}

const StyledGradientText = styled(Typography)<{ gradientColors?: string }>(({ theme, gradientColors }) => ({
  background: gradientColors || `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.grey[600]} 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  display: 'inline-block'
}));

const GradientText: React.FC<GradientTextProps> = ({ gradient, children, ...props }) => {
  return (
    <StyledGradientText gradientColors={gradient} {...props}>
      {children}
    </StyledGradientText>
  );
};

export default GradientText;