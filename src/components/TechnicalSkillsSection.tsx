import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// Import Material-UI icons for tech stack
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import SettingsBluetoothOutlinedIcon from '@mui/icons-material/SettingsBluetoothOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import JavascriptOutlinedIcon from '@mui/icons-material/JavascriptOutlined';
import BlurCircularOutlinedIcon from '@mui/icons-material/BlurCircularOutlined';
import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import DynamicFormOutlinedIcon from '@mui/icons-material/DynamicFormOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import StreamOutlinedIcon from '@mui/icons-material/StreamOutlined';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
}

interface SkillCategory {
  title: string;
  skills: Skill[];
}

const SkillsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: theme.palette.background.default,
  position: 'relative'
}));

const CategorySection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  '&:last-child': {
    marginBottom: 0
  }
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

const SkillCard = styled(Box)(({ theme }) => ({
  background: 'rgba(248, 249, 250, 0.6)',
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: '24px',
  padding: theme.spacing(3),
  textAlign: 'center',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: '-100%',
    width: '100%',
    height: '2px',
    background: `linear-gradient(90deg, transparent, ${theme.palette.grey[400]}, transparent)`,
    transition: 'left 0.5s ease'
  },
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.1)',
    background: 'rgba(248, 249, 250, 0.9)',
    '&::before': {
      left: '100%'
    },
    '& .skill-icon': {
      transform: 'scale(1.1) rotate(5deg)'
    }
  }
}));

const IconContainer = styled(Box)<{ skillColor: string }>(({ theme, skillColor }) => ({
  fontSize: '3rem',
  color: skillColor,
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: <CopyrightOutlinedIcon />, color: "#A8B9CC" },
      { name: "C++", icon: <SettingsBluetoothOutlinedIcon />, color: "#00599C" },
      { name: "Python", icon: <ApiOutlinedIcon />, color: "#3776AB" },
      { name: "JavaScript", icon: <JavascriptOutlinedIcon />, color: "#F7DF1E" }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <BlurCircularOutlinedIcon />, color: "#61DAFB" },
      { name: "shadcn", icon: <AccountBalanceWalletOutlinedIcon />, color: "#000000" },
      { name: "TailwindCSS", icon: <StreamOutlinedIcon />, color: "#06B6D4" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <HexagonOutlinedIcon />, color: "#339933" },
      { name: "Express.js", icon: <DnsOutlinedIcon />, color: "#000000" },
      { name: "REST APIs", icon: <ApiOutlinedIcon />, color: "#FF6B35" }
    ]
  },
  {
    title: "Databases & ORMs",
    skills: [
      { name: "MySQL", icon: <DnsOutlinedIcon />, color: "#4479A1" },
      { name: "PostgreSQL", icon: <DnsOutlinedIcon />, color: "#336791" },
      { name: "MongoDB", icon: <DynamicFormOutlinedIcon />, color: "#47A248" },
      { name: "Prisma", icon: <AccountBalanceWalletOutlinedIcon />, color: "#2D3748" },
      { name: "Mongoose", icon: <DynamicFormOutlinedIcon />, color: "#880000" },
      { name: "Drizzle", icon: <StreamOutlinedIcon />, color: "#C5F74F" }
    ]
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "LangChain", icon: <ApiOutlinedIcon />, color: "#1C3C3C" }
    ]
  }
];

const TechnicalSkillsSection: React.FC = () => {
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
              Technical Skills
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ maxWidth: '600px', lineHeight: 1.8 }}
            >
              A comprehensive overview of my technical expertise across different 
              domains of software development and emerging technologies.
            </Typography>
          </Stack>
          
          <Stack spacing={6}>
            {skillCategories.map((category, categoryIndex) => (
              <CategorySection key={categoryIndex}>
                <Typography 
                  variant="h4" 
                  color="text.primary" 
                  fontWeight="600"
                  sx={{ mb: 3, textAlign: 'center' }}
                >
                  {category.title}
                </Typography>
                
                <SkillsGrid>
                  {category.skills.map((skill, skillIndex) => (
                    <SkillCard key={skillIndex}>
                      <Stack spacing={2} alignItems="center">
                        <IconContainer 
                          className="skill-icon"
                          skillColor={skill.color}
                        >
                          {skill.icon}
                        </IconContainer>
                        
                        <Typography variant="h6" color="text.primary" fontWeight="600">
                          {skill.name}
                        </Typography>
                      </Stack>
                    </SkillCard>
                  ))}
                </SkillsGrid>
              </CategorySection>
            ))}
          </Stack>
        </Stack>
      </Container>
    </SkillsContainer>
  );
};

export default TechnicalSkillsSection;