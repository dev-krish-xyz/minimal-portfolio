import { type FC } from 'react';
import { Box, Typography, Stack, Avatar, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PhoneIphoneOutlinedIcon from '@mui/icons-material/PhoneIphoneOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import kalpa from "../images/Picsart_25-11-03_12-42-12-632.jpg";

const LandingContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: `linear-gradient(135deg, ${theme.palette.background.default} 0%, ${theme.palette.grey[50]} 50%, ${theme.palette.background.default} 100%)`,
  padding: theme.spacing(4),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-50%',
    right: '-20%',
    width: '60%',
    height: '100%',
    background: `radial-gradient(circle, ${theme.palette.grey[100]} 0%, transparent 70%)`,
    borderRadius: '50%',
    opacity: 0.4,
    animation: 'float 6s ease-in-out infinite'
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    bottom: '-30%',
    left: '-10%',
    width: '50%',
    height: '80%',
    background: `radial-gradient(circle, ${theme.palette.grey[100]} 0%, transparent 70%)`,
    borderRadius: '50%',
    opacity: 0.3,
    animation: 'float 8s ease-in-out infinite reverse'
  }
}));

const LandingContent = styled(Stack)(() => ({
  textAlign: 'center',
  maxWidth: '700px',
  position: 'relative',
  zIndex: 1
}));

const ProfileAvatar = styled(Avatar)(({ theme }) => ({
  width: 250,
  height: 250,
  margin: '0 auto',
  marginBottom: '2rem',
  border: `5px solid ${theme.palette.grey[200]}`,
  boxShadow: '0 12px 48px rgba(0, 0, 0, 0.12)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  display: 'block',
  '&:hover': {
    transform: 'scale(1.08)',
    boxShadow: '0 16px 56px rgba(0, 0, 0, 0.18)',
    borderColor: theme.palette.grey[300]
  },
  [theme.breakpoints.down('sm')]: {
    width: 200,
    height: 200
  }
}));

const SocialIconButton = styled('a')(({ theme }) => ({
  width: 48,
  height: 48,
  background: 'rgba(0, 0, 0, 0.04)',
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: '50%',
  color: theme.palette.text.primary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  '&:hover': {
    background: theme.palette.text.primary,
    color: theme.palette.background.default,
    transform: 'translateY(-2px) scale(1.05)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
  }
}));

const ActionButton = styled(Button)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.05)',
  border: `2px solid ${theme.palette.grey[300]}`,
  borderRadius: '50px',
  padding: theme.spacing(1.5, 3),
  color: theme.palette.text.primary,
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    background: theme.palette.text.primary,
    color: theme.palette.background.default,
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.2)',
    borderColor: theme.palette.text.primary
  }
}));

const DownloadButton = styled(Button)(({ theme }) => ({
  background: theme.palette.text.primary,
  border: `2px solid ${theme.palette.text.primary}`,
  borderRadius: '50px',
  padding: theme.spacing(1.5, 3.5),
  color: theme.palette.background.default,
  fontSize: '1rem',
  fontWeight: 600,
  textTransform: 'none',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    background: theme.palette.grey[900],
    borderColor: theme.palette.grey[900],
    transform: 'translateY(-3px)',
    boxShadow: '0 12px 35px rgba(0, 0, 0, 0.3)'
  }
}));

const LandingSection: FC = () => {
  return (
    <LandingContainer id="home">
      <LandingContent spacing={4} alignItems="center">
        <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <ProfileAvatar 
            src = {kalpa}
            alt="Kalpataru Behera"
          />
        </Box>
        
        <Stack spacing={2}>
          <Typography 
            variant="h1" 
            fontWeight="700" 
            sx={{
              background: 'linear-gradient(135deg, #000000 0%, #495057 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
              letterSpacing: '-0.02em',
              animation: 'fadeInUp 0.8s ease-out'
            }}
          >
            Kalpataru Behera
          </Typography>
          <Typography 
            variant="h4" 
            color="text.secondary"
            sx={{ 
              fontWeight: 500,
              opacity: 0.9,
              animation: 'fadeInUp 0.8s ease-out 0.2s both'
            }}
          >
            Full-Stack Developer
          </Typography>
        </Stack>
        
        <Stack spacing={3} alignItems="center" sx={{ width: '100%' }}>
          <Typography 
            variant="body1" 
            color="text.secondary" 
            sx={{ 
              lineHeight: 1.8,
              fontSize: '1.125rem',
              maxWidth: '600px',
              margin: '0 auto',
              animation: 'fadeInUp 0.8s ease-out 0.4s both'
            }}
          >
            Passionate about creating scalable web solutions with modern technologies. 
            Specializing in Node.js, Express.js,React and full-stack development.
          </Typography>
          
          <DownloadButton
            startIcon={<DownloadOutlinedIcon />}
            onClick={() => {
              // Create a link to download CV
              const link = document.createElement('a');
              link.href = '/cv.pdf'; // You'll need to add your CV to the public folder
              link.download = 'Kalpataru_Behera_CV.pdf';
              link.click();
            }}
            sx={{ animation: 'fadeInUp 0.8s ease-out 0.5s both' }}
          >
            Download CV
          </DownloadButton>
        </Stack>
        
        <Box sx={{ 
          background: 'rgba(248, 249, 250, 0.6)',
          backdropFilter: 'blur(20px)',
          borderRadius: 4, 
          padding: { xs: 3, sm: 4, md: 5 },
          border: '1px solid',
          borderColor: 'grey.200',
          boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
          transition: 'all 0.3s ease',
          animation: 'fadeInUp 0.8s ease-out 0.6s both',
          width: '100%',
          maxWidth: '650px',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)'
          }
        }}>
          <Stack spacing={3}>
            <Typography variant="h5" color="text.primary" fontWeight="600" textAlign="center">
              Let's Connect
            </Typography>
            
            <Stack spacing={2}>
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <EmailOutlinedIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  component="a"
                  href="mailto:enigmatic.coder.075@gmail.com"
                  sx={{ 
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    '&:hover': { 
                      color: 'primary.main',
                      transform: 'translateX(4px)'
                    }
                  }}
                >
                  enigmatic.coder.075@gmail.com
                </Typography>
              </Stack>
              
              <Stack direction="row" spacing={2} alignItems="center" justifyContent="center">
                <PhoneIphoneOutlinedIcon sx={{ color: 'primary.main', fontSize: 24 }} />
                <Typography 
                  variant="body1" 
                  color="text.secondary"
                  component="a"
                  href="tel:+917735643254"
                  sx={{ 
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                    '&:hover': { 
                      color: 'primary.main',
                      transform: 'translateX(4px)'
                    }
                  }}
                >
                  +91 7735643254
                </Typography>
              </Stack>
            </Stack>
            
            <Stack spacing={3} alignItems="center" sx={{ width: '100%' }}>
              <Stack direction="row" spacing={2} justifyContent="center">
                <SocialIconButton 
                  href="https://github.com/dev-krish-xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <GitHubIcon sx={{ fontSize: 24 }} />
                </SocialIconButton>
                <SocialIconButton 
                  href="https://www.linkedin.com/in/kalpatarubehera/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInIcon sx={{ fontSize: 24 }} />
                </SocialIconButton>
                <SocialIconButton 
                  href="https://x.com/krishdotdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter) Profile"
                >
                  <XIcon sx={{ fontSize: 24 }} />
                </SocialIconButton>
              </Stack>
              
              <ActionButton
                startIcon={<CalendarMonthOutlinedIcon />}
                onClick={() => {
                  window.open('https://calendly.com/your-calendly-link', '_blank');
                }}
              >
                Book a Call
              </ActionButton>
            </Stack>
          </Stack>
        </Box>
        
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            pt: 2,
            animation: 'fadeInUp 0.8s ease-out 0.8s both',
            opacity: 0.8
          }}
        >
          © 2024 Kalpataru Behera. Available for freelance opportunities.
        </Typography>
      </LandingContent>
    </LandingContainer>
  );
};

export default LandingSection;