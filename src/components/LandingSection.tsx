import React from 'react';
import { Box, Typography, Stack, Avatar } from '@mui/material';
import { styled } from '@mui/material/styles';

const LandingContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: theme.palette.background.default,
  padding: theme.spacing(4),
}));

const LandingContent = styled(Stack)(() => ({
  textAlign: 'center',
  maxWidth: '600px',
}));

const ProfileAvatar = styled(Avatar)(() => ({
  width: 150,
  height: 150,
  margin: '0 auto',
  marginBottom: '2rem',
}));

const LandingSection: React.FC = () => {
  return (
    <LandingContainer id="home">
      <LandingContent spacing={4}>
        <ProfileAvatar 
          src="https://i.pravatar.cc/300?img=12"
          alt="Kalpataru Behera"
        />
        
        <Stack spacing={2}>
          <Typography variant="h2" fontWeight="bold" color="text.primary">
            Kalpataru Behera
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Full-Stack Developer
          </Typography>
        </Stack>
        
        <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
          Passionate about creating scalable web solutions with modern technologies. 
          Specializing in React, Node.js, and full-stack development.
        </Typography>
        
        <Box sx={{ 
          background: '#f8f9fa', 
          borderRadius: 3, 
          padding: 3,
          border: '1px solid #e9ecef'
        }}>
          <Stack spacing={2}>
            <Typography variant="h6" color="text.primary">
              Contact Information
            </Typography>
            <Typography variant="body2" color="text.secondary">
              📧 enigmatic.coder.075@gmail.com
            </Typography>
            <Typography variant="body2" color="text.secondary">
              📱 +91 7735643254
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" sx={{ pt: 1 }}>
              <Typography 
                component="a" 
                href="https://github.com/dev-krish-xyz"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'primary.main', 
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                GitHub
              </Typography>
              <Typography 
                component="a" 
                href="https://www.linkedin.com/in/kalpatarubehera/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'primary.main', 
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                LinkedIn
              </Typography>
              <Typography 
                component="a" 
                href="https://x.com/krishdotdev"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ 
                  color: 'primary.main', 
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' }
                }}
              >
                Twitter
              </Typography>
            </Stack>
          </Stack>
        </Box>
        
        <Typography variant="body2" color="text.secondary" sx={{ pt: 2 }}>
          © 2024 Kalpataru Behera. Available for freelance opportunities.
        </Typography>
      </LandingContent>
    </LandingContainer>
  );
};

export default LandingSection;