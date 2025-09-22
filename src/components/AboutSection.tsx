import React from 'react';
import { Box, Typography, Stack, Avatar, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const AboutContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: theme.palette.background.default,
  position: 'relative'
}));

const GlassCard = styled(Box)(({ theme }) => ({
  background: 'rgba(248, 249, 250, 0.8)',
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: '24px',
  padding: theme.spacing(6),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
  }
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 200,
  height: 200,
  border: `4px solid ${theme.palette.background.default}`,
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'scale(1.05)'
  }
}));

const AboutSection: React.FC = () => {
  return (
    <AboutContainer id="about">
      <Container maxWidth="lg">
        <Stack spacing={8} alignItems="center">
          <Typography 
            variant="h2" 
            textAlign="center"
            sx={{ 
              mb: 4,
              background: 'linear-gradient(135deg, #000000 0%, #495057 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            About Me
          </Typography>
          
          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={6} 
            alignItems="center"
            sx={{ width: '100%' }}
          >
            <Box sx={{ flex: '0 0 auto' }}>
              <ProfileAvatar 
                src="https://i.pravatar.cc/400?img=12"
                alt="Alex Johnson - Full Stack Developer"
              />
            </Box>
            
            <GlassCard sx={{ flex: 1, maxWidth: { xs: '100%', md: '600px' } }}>
              <Stack spacing={3}>
                <Typography variant="h4" color="text.primary">
                  Hello, I'm Alex
                </Typography>
                
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  I'm a passionate full-stack developer with over 5 years of experience 
                  building modern web applications. I specialize in React, Node.js, and 
                  cloud technologies, with a keen eye for user experience and performance optimization.
                </Typography>
                
                <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                  When I'm not coding, you'll find me exploring new technologies, contributing 
                  to open-source projects, or sharing knowledge with the developer community. 
                  I believe in writing clean, maintainable code that solves real-world problems.
                </Typography>
                
                <Stack direction="row" spacing={4} sx={{ mt: 2 }}>
                  <Box>
                    <Typography variant="h5" color="primary.main" fontWeight="bold">
                      50+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Projects Completed
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h5" color="primary.main" fontWeight="bold">
                      5+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Years Experience
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="h5" color="primary.main" fontWeight="bold">
                      20+
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Happy Clients
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
            </GlassCard>
          </Stack>
        </Stack>
      </Container>
    </AboutContainer>
  );
};

export default AboutSection;