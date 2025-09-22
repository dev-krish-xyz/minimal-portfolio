import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level: string;
}

const StyledCard = styled(Box)(({ theme }) => ({
  background: 'rgba(248, 249, 250, 0.4)',
  backdropFilter: 'blur(10px)',
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: '16px',
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
    background: 'rgba(248, 249, 250, 0.8)',
    '&::before': {
      left: '100%'
    },
    '& .skill-icon': {
      transform: 'scale(1.1) rotate(5deg)',
      color: theme.palette.text.primary
    }
  }
}));

const IconContainer = styled(Box)(({ theme }) => ({
  fontSize: '3rem',
  color: theme.palette.grey[600],
  marginBottom: theme.spacing(2),
  transition: 'all 0.3s ease',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const SkillCard: React.FC<SkillCardProps> = ({ icon, name, level }) => {
  return (
    <StyledCard>
      <Stack spacing={2} alignItems="center">
        <IconContainer className="skill-icon">
          {icon}
        </IconContainer>
        
        <Stack spacing={0.5} alignItems="center">
          <Typography variant="h6" color="text.primary" fontWeight="600">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {level}
          </Typography>
        </Stack>
      </Stack>
    </StyledCard>
  );
};

export default SkillCard;