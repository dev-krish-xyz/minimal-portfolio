import React from 'react';
import { Box, Typography, Container, Stack, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

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

const SocialButton = styled(IconButton)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.05)',
  border: `1px solid ${theme.palette.grey[300]}`,
  color: theme.palette.text.primary,
  width: 56,
  height: 56,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    background: theme.palette.text.primary,
    color: theme.palette.background.default,
    transform: 'translateY(-2px) scale(1.05)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
  }
}));

const EmailButton = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  background: 'rgba(0, 0, 0, 0.05)',
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: '50px',
  padding: theme.spacing(1.5, 3),
  color: theme.palette.text.primary,
  textDecoration: 'none',
  fontSize: '1.1rem',
  fontWeight: 500,
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  '&:hover': {
    background: theme.palette.text.primary,
    color: theme.palette.background.default,
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)'
  }
}));

const ContactSection: React.FC = () => {
  return (
    <ContactContainer id="contact">
      <Container maxWidth="lg">
        <Stack spacing={8} alignItems="center">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography 
              variant="h2"
              sx={{ 
                background: 'linear-gradient(135deg, #000000 0%, #495057 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              Let's Connect
            </Typography>
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
            <Stack spacing={4} alignItems="center">
              <EmailButton 
                component="a" 
                href="mailto:enigmatic.coder@gmail.com"
              >
                <EmailOutlinedIcon />
                enigmatic.coder@gmail.com
              </EmailButton>
              
              <Stack direction="row" spacing={3}>
                <SocialButton 
                  component="a"
                  href="https://github.com/dev-krish-xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon />
                </SocialButton>
                
                <SocialButton 
                  component="a"
                  href="https://www.linkedin.com/in/kalpatarubehera/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon />
                </SocialButton>
                
                <SocialButton 
                  component="a"
                  href="https://x.com/krishdotdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                >
                  <CloseOutlinedIcon />
                </SocialButton>
              </Stack>
              
              <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                Available for freelance opportunities and collaborations
              </Typography>
              
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                Phone: +91 7735643254
              </Typography>
            </Stack>
          </ContactCard>
        </Stack>
      </Container>
    </ContactContainer>
  );
};

export default ContactSection;