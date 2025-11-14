import { type FC } from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// Import Material-UI icons for soft skills
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';

interface SoftSkill {
  name: string;
  icon: React.ReactNode;
  color: string;
  description: string;
}

const SkillsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)',
  position: 'relative'
}));

const SkillsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
  gap: theme.spacing(3),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(2)
  }
}));

const SkillCard = styled(Box)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.9)',
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: '24px',
  padding: theme.spacing(4),
  textAlign: 'center',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  minHeight: '200px',
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
    transform: 'translateY(-8px)',
    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.12)',
    background: 'rgba(255, 255, 255, 1)',
    '&::before': {
      left: '100%'
    },
    '& .skill-icon': {
      transform: 'scale(1.15) rotate(-5deg)'
    }
  }
}));

const IconContainer = styled(Box)<{ skillColor: string }>(({ theme, skillColor }) => ({
  fontSize: '3.5rem',
  color: skillColor,
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const softSkills: SoftSkill[] = [
  { 
    name: "Leadership", 
    icon: <TrendingUpOutlinedIcon />, 
    color: "#2563eb",
    description: "Guiding teams towards success"
  },
  { 
    name: "Adaptability", 
    icon: <AutoAwesomeOutlinedIcon />, 
    color: "#7c3aed",
    description: "Thriving in changing environments"
  },
  { 
    name: "Teamwork", 
    icon: <GroupsOutlinedIcon />, 
    color: "#059669",
    description: "Collaborating effectively"
  },
  { 
    name: "Creativity", 
    icon: <EmojiObjectsOutlinedIcon />, 
    color: "#ea580c",
    description: "Innovative problem solving"
  },
  { 
    name: "Critical Thinking", 
    icon: <PsychologyOutlinedIcon />, 
    color: "#dc2626",
    description: "Analytical decision making"
  }
];

const SoftSkillsSection: FC = () => {
  return (
    <SkillsContainer id="soft-skills">
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
              Soft Skills
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ maxWidth: '600px', lineHeight: 1.8 }}
            >
              Essential interpersonal skills that complement my technical expertise 
              and drive collaborative success.
            </Typography>
          </Stack>
          
          <SkillsGrid>
            {softSkills.map((skill, index) => (
              <SkillCard key={index}>
                <Stack spacing={2} alignItems="center">
                  <IconContainer 
                    className="skill-icon"
                    skillColor={skill.color}
                  >
                    {skill.icon}
                  </IconContainer>
                  
                  <Typography variant="h5" color="text.primary" fontWeight="600">
                    {skill.name}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ lineHeight: 1.6 }}
                  >
                    {skill.description}
                  </Typography>
                </Stack>
              </SkillCard>
            ))}
          </SkillsGrid>
        </Stack>
      </Container>
    </SkillsContainer>
  );
};

export default SoftSkillsSection;