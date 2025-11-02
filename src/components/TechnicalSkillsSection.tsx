import { type FC } from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// Import Material-UI icons for tech stack
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import SettingsBluetoothOutlinedIcon from '@mui/icons-material/SettingsBluetoothOutlined';
import ApiOutlinedIcon from '@mui/icons-material/ApiOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import BlurCircularOutlinedIcon from '@mui/icons-material/BlurCircularOutlined';
import HexagonOutlinedIcon from '@mui/icons-material/HexagonOutlined';
import DnsOutlinedIcon from '@mui/icons-material/DnsOutlined';
import DynamicFormOutlinedIcon from '@mui/icons-material/DynamicFormOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import StreamOutlinedIcon from '@mui/icons-material/StreamOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';

interface Skill {
  name: string;
  icon: React.ReactNode;
  color: string;
  level: string;
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
  minHeight: '160px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
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
  marginBottom: theme.spacing(1.5),
  transition: 'all 0.3s ease',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const LevelBadge = styled(Box)<{ level: string }>(({ theme, level }) => {
  const getLevelStyles = () => {
    switch (level) {
      case 'Advanced':
        return {
          background: 'rgba(0, 0, 0, 0.08)',
          color: theme.palette.text.primary,
          border: `1px solid ${theme.palette.grey[400]}`
        };
      case 'Intermediate':
        return {
          background: 'rgba(0, 0, 0, 0.05)',
          color: theme.palette.text.secondary,
          border: `1px solid ${theme.palette.grey[300]}`
        };
      case 'Beginner':
        return {
          background: 'rgba(0, 0, 0, 0.03)',
          color: theme.palette.text.secondary,
          border: `1px solid ${theme.palette.grey[200]}`
        };
      default:
        return {
          background: theme.palette.grey[100],
          color: theme.palette.text.secondary,
          border: `1px solid ${theme.palette.grey[200]}`
        };
    }
  };

  return {
    ...getLevelStyles(),
    padding: theme.spacing(0.4, 1.2),
    borderRadius: '8px',
    fontSize: '0.7rem',
    fontWeight: 500,
    letterSpacing: '0.3px',
    transition: 'all 0.3s ease',
    display: 'inline-block'
  };
});

const skillCategories: SkillCategory[] = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: <CopyrightOutlinedIcon />, color: "#A8B9CC", level: "Advanced" },
      { name: "C++", icon: <SettingsBluetoothOutlinedIcon />, color: "#00599C", level: "Intermediate" },
      { name: "Python", icon: <ApiOutlinedIcon />, color: "#3776AB", level: "Beginner" },
      { name: "JavaScript", icon: <CodeOutlinedIcon />, color: "#F7DF1E", level: "Advanced" },
      { name: "TypeScript", icon: <CodeOutlinedIcon />, color: "#3178C6", level: "Intermediate" },
      { name: "SQL", icon: <DnsOutlinedIcon />, color: "#4479A1", level: "Intermediate" }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <BlurCircularOutlinedIcon />, color: "#61DAFB", level: "Beginner" },
      { name: "shadcn", icon: <AccountBalanceWalletOutlinedIcon />, color: "#000000", level: "Intermediate" },
      { name: "TailwindCSS", icon: <StreamOutlinedIcon />, color: "#06B6D4", level: "Intermediate" }
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <HexagonOutlinedIcon />, color: "#339933", level: "Intermediate" },
      { name: "Express.js", icon: <DnsOutlinedIcon />, color: "#000000", level: "Intermediate" },
      { name: "REST APIs", icon: <ApiOutlinedIcon />, color: "#FF6B35", level: "Intermediate" }
    ]
  },
  {
    title: "Databases & ORMs",
    skills: [
      { name: "MySQL", icon: <DnsOutlinedIcon />, color: "#4479A1", level: "Intermediate" },
      { name: "PostgreSQL", icon: <DnsOutlinedIcon />, color: "#336791", level: "Intermediate" },
      { name: "MongoDB", icon: <DynamicFormOutlinedIcon />, color: "#47A248", level: "Intermediate" },
      { name: "Prisma", icon: <AccountBalanceWalletOutlinedIcon />, color: "#2D3748", level: "Intermediate" },
      { name: "Mongoose", icon: <DynamicFormOutlinedIcon />, color: "#880000", level: "Intermediate" },
      { name: "Drizzle", icon: <StreamOutlinedIcon />, color: "#C5F74F", level: "Intermediate" }
    ]
  },
  {
    title: "AI & Machine Learning",
    skills: [
      { name: "LangChain", icon: <ApiOutlinedIcon />, color: "#1C3C3C", level: "Beginner" },
      { name: "GenAI", icon: <PsychologyOutlinedIcon />, color: "#8E44AD", level: "Beginner" }
    ]
  },
  {
    title: "DevOps & Tools",
    skills: [
      { name: "Docker", icon: <StorageOutlinedIcon />, color: "#2496ED", level: "Intermediate" },
      { name: "Git", icon: <GitHubIcon />, color: "#F05032", level: "Advanced" },
      { name: "Linux", icon: <TerminalOutlinedIcon />, color: "#FCC624", level: "Advanced" }
    ]
  }
];

const TechnicalSkillsSection: FC = () => {
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
                      <Stack spacing={1.5} alignItems="center">
                        <IconContainer 
                          className="skill-icon"
                          skillColor={skill.color}
                        >
                          {skill.icon}
                        </IconContainer>
                        
                        <Typography variant="h6" color="text.primary" fontWeight="600">
                          {skill.name}
                        </Typography>
                        
                        <LevelBadge level={skill.level}>
                          {skill.level}
                        </LevelBadge>
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