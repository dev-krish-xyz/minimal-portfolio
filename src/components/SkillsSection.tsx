import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import SkillCard from './SkillCard';

// Import Material-UI icons for tech stack
import JavascriptOutlinedIcon from '@mui/icons-material/JavascriptOutlined';
import BlurCircularOutlinedIcon from '@mui/icons-material/BlurCircularOutlined';
import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import TextFieldsOutlinedIcon from '@mui/icons-material/TextFieldsOutlined';

const SkillsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: theme.palette.background.default,
  position: 'relative'
}));

const SkillsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: theme.spacing(2)
  }
}));

const skills = [
  {
    icon: <JavascriptOutlinedIcon />,
    name: "JavaScript",
    level: "Expert"
  },
  {
    icon: <BlurCircularOutlinedIcon />,
    name: "React",
    level: "Expert"
  },
  {
    icon: <HexagonOutlinedIcon />,
    name: "Node.js",
    level: "Advanced"
  },
  {
    icon: <ApiOutlinedIcon />,
    name: "Python",
    level: "Advanced"
  },
  {
    icon: <TextFieldsOutlinedIcon />,
    name: "TypeScript",
    level: "Expert"
  }
];

const SkillsSection: React.FC = () => {
  return (
    <SkillsContainer id="skills">
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
              Skills & Technologies
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ maxWidth: '600px', lineHeight: 1.8 }}
            >
              A curated selection of technologies I work with to build 
              modern, scalable, and performant applications.
            </Typography>
          </Stack>
          
          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                icon={skill.icon}
                name={skill.name}
                level={skill.level}
              />
            ))}
          </SkillsGrid>
        </Stack>
      </Container>
    </SkillsContainer>
  );
};

export default SkillsSection;