import React from 'react';
import { Card, CardMedia, CardContent, Typography, Stack, IconButton, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  githubUrl: string;
  liveUrl: string;
  technologies: string[];
}

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(248, 249, 250, 0.6)',
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: '20px',
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
    '& .project-image': {
      transform: 'scale(1.1)'
    },
    '& .project-overlay': {
      opacity: 1
    }
  }
}));

const ImageContainer = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  height: 240
});

const ProjectImage = styled('img')(({ theme }) => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.4s ease',
  filter: 'grayscale(20%)'
}));

const ImageOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  gap: theme.spacing(2)
}));

const ActionButton = styled(IconButton)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.9)',
  color: theme.palette.text.primary,
  '&:hover': {
    background: theme.palette.background.default,
    transform: 'scale(1.1)'
  }
}));

const TechChip = styled(Box)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.05)',
  border: `1px solid ${theme.palette.grey[300]}`,
  borderRadius: '20px',
  padding: theme.spacing(0.5, 1.5),
  fontSize: '0.75rem',
  fontWeight: 500,
  color: theme.palette.text.secondary,
  transition: 'all 0.2s ease',
  '&:hover': {
    background: 'rgba(0, 0, 0, 0.1)',
    transform: 'translateY(-1px)'
  }
}));

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  imageAlt,
  githubUrl,
  liveUrl,
  technologies
}) => {
  return (
    <StyledCard elevation={0}>
      <ImageContainer>
        <ProjectImage
          className="project-image"
          src={image}
          alt={imageAlt}
        />
        <ImageOverlay className="project-overlay">
          <ActionButton 
            onClick={(e) => {
              e.stopPropagation();
              window.open(githubUrl, '_blank');
            }}
          >
            <GitHubIcon />
          </ActionButton>
          <ActionButton 
            onClick={(e) => {
              e.stopPropagation();
              window.open(liveUrl, '_blank');
            }}
          >
            <LaunchIcon />
          </ActionButton>
        </ImageOverlay>
      </ImageContainer>
      
      <CardContent sx={{ p: 3 }}>
        <Stack spacing={2}>
          <Typography variant="h6" color="text.primary" fontWeight="600">
            {title}
          </Typography>
          
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
            {description}
          </Typography>
          
          <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
            {technologies.map((tech, index) => (
              <TechChip key={index}>
                {tech}
              </TechChip>
            ))}
          </Stack>
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

export default ProjectCard;