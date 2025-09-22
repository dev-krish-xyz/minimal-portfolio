import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';

interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  description: string;
}

const EducationContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: `linear-gradient(135deg, ${theme.palette.grey[50]} 0%, ${theme.palette.background.default} 100%)`,
  position: 'relative'
}));

const TimelineContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxWidth: '800px',
  margin: '0 auto',
  '&::before': {
    content: '""',
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: '2px',
    background: `linear-gradient(to bottom, ${theme.palette.grey[300]}, ${theme.palette.grey[400]}, ${theme.palette.grey[300]})`,
    transform: 'translateX(-50%)',
    [theme.breakpoints.down('md')]: {
      left: '30px'
    }
  }
}));

const TimelineItem = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(6),
  '&:last-child': {
    marginBottom: 0
  }
}));

const TimelineContent = styled(Box)(({ theme }) => ({
  background: 'rgba(248, 249, 250, 0.8)',
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: '24px',
  padding: theme.spacing(4),
  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
  transition: 'all 0.3s ease',
  position: 'relative',
  width: 'calc(50% - 40px)',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)'
  },
  [theme.breakpoints.down('md')]: {
    width: 'calc(100% - 80px)',
    marginLeft: theme.spacing(10)
  }
}));

const TimelineContentLeft = styled(TimelineContent)(({ theme }) => ({
  marginLeft: 0,
  '&::after': {
    content: '""',
    position: 'absolute',
    right: '-20px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 0,
    height: 0,
    borderLeft: `20px solid ${theme.palette.grey[200]}`,
    borderTop: '15px solid transparent',
    borderBottom: '15px solid transparent',
    [theme.breakpoints.down('md')]: {
      left: '-20px',
      right: 'auto',
      borderLeft: 'none',
      borderRight: `20px solid ${theme.palette.grey[200]}`
    }
  }
}));

const TimelineContentRight = styled(TimelineContent)(({ theme }) => ({
  marginLeft: 'calc(50% + 40px)',
  '&::after': {
    content: '""',
    position: 'absolute',
    left: '-20px',
    top: '50%',
    transform: 'translateY(-50%)',
    width: 0,
    height: 0,
    borderRight: `20px solid ${theme.palette.grey[200]}`,
    borderTop: '15px solid transparent',
    borderBottom: '15px solid transparent',
    [theme.breakpoints.down('md')]: {
      borderRight: 'none',
      borderLeft: `20px solid ${theme.palette.grey[200]}`
    }
  },
  [theme.breakpoints.down('md')]: {
    marginLeft: theme.spacing(10)
  }
}));

const TimelineDot = styled(Box)(({ theme }) => ({
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: 60,
  height: 60,
  background: theme.palette.background.default,
  border: `3px solid ${theme.palette.primary.main}`,
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 2,
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.1)',
  [theme.breakpoints.down('md')]: {
    left: '30px'
  }
}));

const educationData: EducationItem[] = [
  {
    institution: "Lovely Professional University",
    degree: "Master of Computer Applications (MCA)",
    year: "2025 - 2027",
    description: "Advanced curriculum in C, C++, DSA, JAVA, Computer Networking, Web Development, Discrete Mathematics, Operating Systems, Digital Logic, Computer Graphics, Software Engineering, Calculus, DBMS, and modern software development practices."
  },
  {
    institution: "FM University, Balasore",
    degree: "Bachelor in Computer Science",
    year: "2022 - 2025",
    description: "Comprehensive study of C, C++, Data Structures & Algorithms, JAVA, Computer Networking, Web Development, Discrete Mathematics, Operating Systems, Digital Logic, Computer Graphics, Software Engineering, Calculus, and Database Management Systems."
  },
  {
    institution: "FM Higher Secondary School, Balasore",
    degree: "12th Grade in Science (PCM + Information Technology)",
    year: "2019 - 2021",
    description: "Focused on Physics, Chemistry, Mathematics, and Information Technology. Built strong foundation in analytical thinking and problem-solving skills essential for computer science."
  }
];

const EducationSection: React.FC = () => {
  return (
    <EducationContainer id="education">
      <Container maxWidth="lg">
        <Stack spacing={8}>
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
              Education
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ maxWidth: '600px', lineHeight: 1.8 }}
            >
              My academic journey in computer science and software engineering,
              building the foundation for my career in technology.
            </Typography>
          </Stack>
          
          <TimelineContainer>
            {educationData.map((item, index) => (
              <TimelineItem key={index}>
                <TimelineDot>
                  <SchoolOutlinedIcon color="primary" />
                </TimelineDot>
                
                {index % 2 === 0 ? (
                  <TimelineContentLeft>
                    <Stack spacing={2}>
                      <Typography variant="h6" color="text.primary" fontWeight="600">
                        {item.degree}
                      </Typography>
                      <Typography variant="subtitle1" color="primary.main" fontWeight="500">
                        {item.institution}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" fontWeight="500">
                        {item.year}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {item.description}
                      </Typography>
                    </Stack>
                  </TimelineContentLeft>
                ) : (
                  <TimelineContentRight>
                    <Stack spacing={2}>
                      <Typography variant="h6" color="text.primary" fontWeight="600">
                        {item.degree}
                      </Typography>
                      <Typography variant="subtitle1" color="primary.main" fontWeight="500">
                        {item.institution}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" fontWeight="500">
                        {item.year}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                        {item.description}
                      </Typography>
                    </Stack>
                  </TimelineContentRight>
                )}
              </TimelineItem>
            ))}
          </TimelineContainer>
        </Stack>
      </Container>
    </EducationContainer>
  );
};

export default EducationSection;