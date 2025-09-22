import React from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import ProjectCard from './ProjectCard';

const ProjectsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: `linear-gradient(135deg, ${theme.palette.grey[50]} 0%, ${theme.palette.background.default} 100%)`,
  position: 'relative'
}));

const ProjectsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(3)
  }
}));

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payments, and an intuitive admin dashboard.",
    image: "https://images.unsplash.com/photo-1592839930500-3445eb72b8ad?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHw4fHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHdlYnNpdGUlMjBvbmxpbmUlMjByZXRhaWx8ZW58MHwwfHx8MTc1ODExMzUwN3ww&ixlib=rb-4.1.0&q=85",
    imageAlt: "E-commerce website interface, online shopping platform, modern web design - Laura Chouette on Unsplash",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "TypeScript"]
  },
  {
    title: "Analytics Dashboard",
    description: "A comprehensive analytics dashboard with real-time data visualization, custom reporting, and interactive charts for business intelligence.",
    image: "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwyfHxkYXNoYm9hcmQlMjB3ZWIlMjBhcHBsaWNhdGlvbiUyMGludGVyZmFjZSUyMHNvZnR3YXJlfGVufDB8MHx8fDE3NTgxMTM1MDd8MA&ixlib=rb-4.1.0&q=85",
    imageAlt: "Modern web application dashboard interface, clean UI design, professional software - Growtika on Unsplash",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"]
  },
  {
    title: "Mobile Task Manager",
    description: "A cross-platform mobile application for task management with offline sync, team collaboration, and smart notifications.",
    image: "https://images.unsplash.com/photo-1621691187532-bbeb671757ac?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTAwNDR8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBzbWFydHBob25lJTIwaW50ZXJmYWNlJTIwYXBwbGljYXRpb258ZW58MHwxfHx8MTc1ODExMzUwN3ww&ixlib=rb-4.1.0&q=85",
    imageAlt: "Mobile app interface, smartphone application, modern mobile design - Maccy on Unsplash",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    technologies: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"]
  }
];

const ProjectsSection: React.FC = () => {
  return (
    <ProjectsContainer id="projects">
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
              Featured Projects
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ maxWidth: '600px', lineHeight: 1.8 }}
            >
              A showcase of my recent work, featuring modern web applications 
              built with cutting-edge technologies and best practices.
            </Typography>
          </Stack>
          
          <ProjectsGrid>
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                image={project.image}
                imageAlt={project.imageAlt}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                technologies={project.technologies}
              />
            ))}
          </ProjectsGrid>
        </Stack>
      </Container>
    </ProjectsContainer>
  );
};

export default ProjectsSection;