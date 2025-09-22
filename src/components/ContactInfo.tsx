import React from 'react';
import { Stack, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import SocialButton from './SocialButton';
import EmailButton from './EmailButton';

interface ContactInfoProps {
  email: string;
  phone: string;
  githubUrl: string;
  linkedinUrl: string;
  twitterUrl: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({
  email,
  phone,
  githubUrl,
  linkedinUrl,
  twitterUrl
}) => {
  return (
    <Stack spacing={4} alignItems="center">
      <EmailButton email={email} />
      
      <Stack direction="row" spacing={3}>
        <SocialButton 
          href={githubUrl}
          ariaLabel="GitHub Profile"
          size="medium"
        >
          <GitHubIcon />
        </SocialButton>
        
        <SocialButton 
          href={linkedinUrl}
          ariaLabel="LinkedIn Profile"
          size="medium"
        >
          <LinkedInIcon />
        </SocialButton>
        
        <SocialButton 
          href={twitterUrl}
          ariaLabel="Twitter Profile"
          size="medium"
        >
          <TwitterIcon />
        </SocialButton>
      </Stack>
      
      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        Available for freelance opportunities and collaborations
      </Typography>
      
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
        Phone: {phone}
      </Typography>
    </Stack>
  );
};

export default ContactInfo;