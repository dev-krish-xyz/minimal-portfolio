import React from 'react';
import { Box, Typography, Stack, Avatar, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const LandingContainer = styled(Box)(({ theme }) => ({
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

const LandingContent = styled(Stack)(({ theme }) => ({
  textAlign: 'center',
  maxWidth: '600px',
  padding: theme.spacing(0, 3),
  position: 'relative',
  zIndex: 1
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 180,
  height: 180,
  border: `4px solid ${theme.palette.background.default}`,
  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.3s ease',
  margin: '0 auto',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 16px 50px rgba(0, 0, 0, 0.2)'
  }
}));

const ContactCard = styled(Box)(({ theme }) => ({
  background: 'rgba(248, 249, 250, 0.8)',
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: '24px',
  padding: theme.spacing(3),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
  }
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.05)',
  border: `1px solid ${theme.palette.grey[300]}`,
  color: theme.palette.text.primary,
  width: 48,
  height: 48,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    background: theme.palette.text.primary,
    color: theme.palette.background.default,
    transform: 'translateY(-2px) scale(1.05)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
  }
}));

const AnimatedText = styled(Typography)(({ theme }) => ({
  background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.grey[600]} 100%)`,
  backgroundClip: 'text',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  animation: 'fadeInUp 1s ease-out'
}));

const LandingSection: React.FC = () => {
  return (
    <LandingContainer id="home">
      <LandingContent spacing={4}>
        <Box sx={{ animation: 'fadeInUp 1s ease-out' }}>
          <ProfileAvatar 
            src="/images/goku-profile.jpg"
            alt="Kalpataru Behera - Full Stack Developer"
          />
        </Box>
        
        <Stack spacing={1} sx={{ animation: 'fadeInUp 1s ease-out 0.2s both' }}>
          <AnimatedText variant="h1" sx={{ fontSize: { xs: '2.5rem', md: '3.5rem' } }}>
            Kalpataru Behera
          </AnimatedText>
          <Typography 
            variant="h4" 
            color="text.secondary"
            sx={{ 
              fontWeight: 400,
              opacity: 0.8
            }}
          >
            Full-Stack Developer
          </Typography>
        </Stack>
        
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ 
            lineHeight: 1.8,
            animation: 'fadeInUp 1s ease-out 0.4s both',
            maxWidth: '500px',
            margin: '0 auto'
          }}
        >
          Passionate about creating scalable web solutions with modern technologies. 
          Specializing in React, Node.js, and full-stack development.
        </Typography>
        
        <ContactCard sx={{ animation: 'fadeInUp 1s ease-out 0.6s both' }}>
          <Stack spacing={2}>
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
              <EmailOutlinedIcon color="action" />
              <Typography variant="body2" color="text.secondary">
                enigmatic.coder.075@gmail.com
              </Typography>
            </Stack>
            
            <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
              <PhoneOutlinedIcon color="action" />
              <Typography variant="body2" color="text.secondary">
                +91 7735643254
              </Typography>
            </Stack>
            
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ pt: 1 }}>
              <SocialButton 
                component="a"
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <GitHubIcon fontSize="small" />
              </SocialButton>
              
              <SocialButton 
                component="a"
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <LinkedInIcon fontSize="small" />
              </SocialButton>
              
              <SocialButton 
                component="a"
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
              >
                <TwitterIcon fontSize="small" />
              </SocialButton>
            </Stack>
          </Stack>
        </ContactCard>
      </LandingContent>
    </LandingContainer>
  );
};

export default LandingSection;