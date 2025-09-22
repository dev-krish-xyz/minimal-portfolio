import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

const HeroContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.grey[50]} 100%)`,
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '20%',
    right: '-10%',
    width: '40%',
    height: '60%',
    background: `radial-gradient(circle, ${theme.palette.grey[100]} 0%, transparent 70%)`,
    borderRadius: '50%',
    opacity: 0.3,
    zIndex: 0
  }
}));

const HeroContent = styled(Stack)(({ theme }) => ({
  textAlign: 'center',
  maxWidth: '800px',
  padding: theme.spacing(0, 3),
  position: 'relative',
  zIndex: 1
}));

const GlassButton = styled(Button)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.05)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: '50px',
  padding: theme.spacing(1.5, 4),
  fontSize: '1.1rem',
  fontWeight: 500,
  color: theme.palette.text.primary,
  textTransform: 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    background: 'rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
  }
}));

const AnimatedText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.grey[600]} 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: 'fadeInUp 1s ease-out'
}));

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <HeroContent spacing={4}>
        <Stack spacing={2}>
          <AnimatedText variant="h1">
            Alex Johnson
          </AnimatedText>
          <Typography 
            variant="h3" 
            color="text.secondary"
            sx={{ 
              fontWeight: 400,
              opacity: 0.8,
              animation: 'fadeInUp 1s ease-out 0.2s both'
            }}
          >
            Full Stack Developer
          </Typography>
        </Stack>
        
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ 
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: 1.8,
            animation: 'fadeInUp 1s ease-out 0.4s both'
          }}
        >
          Crafting digital experiences with modern technologies and clean code. 
          Passionate about creating scalable solutions that make a difference.
        </Typography>
        
        <Box sx={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}>
          <GlassButton 
            size="large"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </GlassButton>
        </Box>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;