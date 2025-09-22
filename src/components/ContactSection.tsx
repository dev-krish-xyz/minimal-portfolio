import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import GradientText from './GradientText';
import ContactInfo from './ContactInfo';

const ContactContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: `linear-gradient(135deg, ${theme.palette.grey[50]} 0%, ${theme.palette.background.default} 100%)`,
  position: 'relative'
}));

const ContactCard = styled(Box)(({ theme }) => ({
  background: 'rgba(248, 249, 250, 0.8)',
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: '24px',
  padding: theme.spacing(6),
  textAlign: 'center',
  maxWidth: '600px',
  margin: '0 auto',
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
  }
}));



const ContactSection: React.FC = () => {
  return (
    <ContactContainer id="contact">
      <Container maxWidth="lg">
        <Stack spacing={8} alignItems="center">
          <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center' }}>
            <GradientText 
              variant="h2"
              gradient="linear-gradient(135deg, #000000 0%, #495057 100%)"
            >
              Let's Connect
            </GradientText>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ maxWidth: '500px', lineHeight: 1.8 }}
            >
              Ready to bring your ideas to life? Let's discuss your next project 
              and create something amazing together.
            </Typography>
          </Stack>
          
          <ContactCard>
            <ContactInfo
              email="enigmatic.coder.075@gmail.com"
              phone="+91 7735643254"
              githubUrl="https://github.com/dev-krish-xyz"
              linkedinUrl="https://www.linkedin.com/in/kalpatarubehera/"
              twitterUrl="https://x.com/krishdotdev"
            />
          </ContactCard>
        </Stack>
      </Container>
    </ContactContainer>
  );
};

export default ContactSection;