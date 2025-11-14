import React from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

const AboutContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(8, 0),
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

const AboutSection: React.FC = () => {
  return (
    <AboutContainer id="about">
      <Container maxWidth="lg">
        <Stack spacing={4} alignItems="center">
          <Typography 
            variant="h2" 
            textAlign="center"
            sx={{ 
              background: 'linear-gradient(135deg, #000000 0%, #495057 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}
          >
            About Me
          </Typography>
          
          <GlassCard sx={{ maxWidth: '900px', margin: '0 auto' }}>
            <Stack spacing={2.5}>
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                I'm a dedicated Full Stack MERN Developer focused on building scalable and user-friendly web applications. With practical experience in MongoDB, Express.js, React, and Node.js, I enjoy turning ideas into efficient and impactful digital solutions.
              </Typography>
              
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                I also work with Generative AI technologies, integrating features like embeddings, LLM automation, and smart chat systems into modern apps.
              </Typography>
              
              <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.8 }}>
                With a strong foundation in DSA, OOP, and multiple programming languages, I continuously strive to learn, innovate, and grow as a developer.
              </Typography>
            </Stack>
          </GlassCard>
        </Stack>
      </Container>
    </AboutContainer>
  );
};

export default AboutSection;