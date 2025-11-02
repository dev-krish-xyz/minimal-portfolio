import { type FC } from 'react';
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
    image: "https://magesolution.com/wp-content/uploads/2022/07/ecommerce-website-design-examples-1024x768.jpg",
    imageAlt: "E-commerce website interface, online shopping platform, modern web design - Laura Chouette on Unsplash",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "TypeScript"]
  },
  {
    title: "Extrack",
    description: "A comprehensive analytics dashboard with real-time data visualization, custom reporting, and interactive charts for business intelligence.",
    image: "https://uizard.io/static/d976ff1d2f51413207c7c944c5d3d563/0cfa7/ac6597f9ca9857740d4b2b5ee17ddc4557fd083e-1440x835.webp",
    imageAlt: "Modern web application dashboard interface, clean UI design, professional software - Growtika on Unsplash",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    technologies: ["React", "D3.js", "Python", "FastAPI", "PostgreSQL"]
  },
  {
    title: "Taskio",
    description: "An application for project management, project tracking, team collaboration, checklists, goals & deadlines and smart notifications.",
    image: "https://www.cloudapper.ai/wp-content/uploads/custom_images/projects/device-1.png",
    imageAlt: "Mobile app interface, smartphone application, modern mobile design - Maccy on Unsplash",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    technologies: ["React Native", "Firebase", "Redux", "Expo", "TypeScript"]
  }
];

const ProjectsSection: FC = () => {
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