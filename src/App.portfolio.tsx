import React from 'react';
import { Box, Typography, Container, Stack, Avatar } from '@mui/material';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';

// Simple theme
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    background: {
      default: '#ffffff',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', py: 8 }}>
        <Container maxWidth="md">
          <Stack spacing={6} alignItems="center" textAlign="center">
            {/* Hero Section */}
            <Stack spacing={3} alignItems="center">
              <Avatar 
                src="https://i.pravatar.cc/200?img=12"
                alt="Kalpataru Behera"
                sx={{ width: 150, height: 150 }}
              />
              <Stack spacing={1}>
                <Typography variant="h2" fontWeight="bold">
                  Kalpataru Behera
                </Typography>
                <Typography variant="h5" color="text.secondary">
                  Full-Stack Developer
                </Typography>
              </Stack>
              <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 600 }}>
                Passionate about creating scalable web solutions with modern technologies. 
                Specializing in React, Node.js, and full-stack development.
              </Typography>
            </Stack>

            {/* Contact Info */}
            <Box sx={{ 
              background: '#f8f9fa', 
              borderRadius: 3, 
              p: 4,
              border: '1px solid #e9ecef'
            }}>
              <Stack spacing={2}>
                <Typography variant="h6">Get In Touch</Typography>
                <Typography variant="body2">
                  📧 enigmatic.coder.075@gmail.com
                </Typography>
                <Typography variant="body2">
                  📱 +91 7735643254
                </Typography>
                <Stack direction="row" spacing={2} justifyContent="center">
                  <Typography 
                    component="a" 
                    href="https://github.com/dev-krish-xyz"
                    target="_blank"
                    sx={{ textDecoration: 'none', color: 'primary.main' }}
                  >
                    GitHub
                  </Typography>
                  <Typography 
                    component="a" 
                    href="https://www.linkedin.com/in/kalpatarubehera/"
                    target="_blank"
                    sx={{ textDecoration: 'none', color: 'primary.main' }}
                  >
                    LinkedIn
                  </Typography>
                  <Typography 
                    component="a" 
                    href="https://x.com/krishdotdev"
                    target="_blank"
                    sx={{ textDecoration: 'none', color: 'primary.main' }}
                  >
                    Twitter
                  </Typography>
                </Stack>
              </Stack>
            </Box>

            {/* Skills */}
            <Stack spacing={3} sx={{ width: '100%' }}>
              <Typography variant="h4" fontWeight="600">
                Technical Skills
              </Typography>
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
                gap: 2 
              }}>
                {['React.js', 'Node.js', 'TypeScript', 'Python', 'MongoDB', 'PostgreSQL'].map((skill) => (
                  <Box 
                    key={skill}
                    sx={{ 
                      p: 2, 
                      background: '#f8f9fa', 
                      borderRadius: 2,
                      border: '1px solid #e9ecef',
                      textAlign: 'center'
                    }}
                  >
                    <Typography variant="body1" fontWeight="500">
                      {skill}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Stack>

            {/* Footer */}
            <Typography variant="body2" color="text.secondary">
              © 2024 Kalpataru Behera. Available for freelance opportunities.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default App;