import { type FC } from 'react';
import { Box, Typography, Container, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import CertificationCard from './CertificationCard';
import kalpataru from "../images/Kalpataru_Behera_decode_DSA.jpg";
import cert from "../images/screenshot-2025-11-11_14-57-15.png";

const CertificationsContainer = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  background: theme.palette.background.default,
  position: 'relative'
}));

const CertificationsGrid = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
  gap: theme.spacing(4),
  [theme.breakpoints.down('sm')]: {
    gridTemplateColumns: '1fr',
    gap: theme.spacing(3)
  }
}));

const certifications = [
  {
    title: "Oracle OCI Generative AI Professional",
    issuer: "Oracle University",
    date: "October 2025",
    description: "Learn the fundamentals of LLMs and Generative AI on OCI, covering model architectures, fine-tuning, and prompt engineering. Build and deploy a LangChain-based chatbot using RAG, vector databases, and semantic search on OCI.",
    image: cert,
    imageAlt: "nothing",
    credentialUrl: "https://mylearn.oracle.com",
    skills: ["GenAI", "Transformers", "Langchain", "RAG", "fine-tuning", "Vector DB"]
  },
  {
    title: "Full Stack Web Development",
    issuer: "chaicode.com",
    date: "April 2025",
    description: "Intensive program covering modern web development with React, Node.js, databases, and deployment. Hands-on projects building real-world applications.",
    image: "https://learnyst-user-assets.s3.ap-south-1.amazonaws.com/school-assets/schools/171024/schoolLogo/1717484431216banner_lyst1717484431227.png",
    imageAlt: "Fullstack web developement",
    credentialUrl: "https://www.chaicode.com/",
    skills: ["Express.js", "Node.js", "MongoDB", "REST APIs", "React", "Docker"]
  },
  {
    title: "Advanced Javascript",
    issuer: "Udemy",
    date: "July 2025",
    description: "Advanced course in Javascript and its internals. Learned asynchronous Javascript, how JS works behind the scene, Promises, Event Loops, V8 engine, Call stacks along with Error handeling mechanism in Javascript.",
    image: "https://img-c.udemycdn.com/course/750x422/851712_fc61_6.jpg",
    imageAlt: "Advanced JS",
    credentialUrl: "https://udemy.com",
    skills: ["Asynchronous JS", "Promises", "Event Loops", "V8 engine", "Error handeliing"]
  },
  {
    title: "Web3",
    issuer: "100xdevs",
    date: "July 2025",
    description: "complete guide to build projects with Rust & solidity, along with writing smart contracts",
    image: "https://appxcontent.kaxa.in/paid_course3/2024-07-07-0.8201249093606604.png",
    imageAlt: "web3",
    credentialUrl: "https://www.100xdevs.com/",
    skills: ["Docker", "Kubernetes", "CI/CD", "Microservices"]
  },
  {
    title: "C++ with DSA",
    issuer: "PW Skills",
    date: "July 2022",
    description: "Comprehensive learning of C++ programming along with problem solving with Data structures and algorithms concepts",
    image: kalpataru,
    imageAlt: "c++ with dsa",
    credentialUrl: "https://pwskills.com/",
    skills: ["C++", "Problem Solving", "DSA", "Code Optimization"]
  },
  

];

const CertificationsSection: FC = () => {
  return (
    <CertificationsContainer id="certifications">
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
              Certifications & Courses
            </Typography>
            <Typography 
              variant="body1" 
              color="text.secondary" 
              sx={{ maxWidth: '600px', lineHeight: 1.8 }}
            >
              Professional certifications and completed courses that demonstrate 
              my commitment to continuous learning and expertise in various technologies.
            </Typography>
          </Stack>
          
          <CertificationsGrid>
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                description={cert.description}
                image={cert.image}
                imageAlt={cert.imageAlt}
                credentialUrl={cert.credentialUrl}
                skills={cert.skills}
              />
            ))}
          </CertificationsGrid>
        </Stack>
      </Container>
    </CertificationsContainer>
  );
};

export default CertificationsSection;