import { type FC } from 'react';
import { Card, CardContent, Typography, Stack, Box, IconButton } from '@mui/material';
import { styled } from '@mui/material/styles';
import LaunchIcon from '@mui/icons-material/Launch';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  description: string;
  image: string;
  imageAlt: string;
  credentialUrl?: string;
  skills?: string[];
}

const StyledCard = styled(Card)(({ theme }) => ({
  background: 'rgba(248, 249, 250, 0.6)',
  backdropFilter: 'blur(20px)',
  border: `1px solid ${theme.palette.grey[200]}`,
  borderRadius: '20px',
  overflow: 'hidden',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  cursor: 'pointer',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  '&:hover': {
    transform: 'translateY(-8px) scale(1.02)',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
    '& .cert-image': {
      transform: 'scale(1.1)'
    },
    '& .cert-overlay': {
      opacity: 1
    }
  }
}));

const ImageContainer = styled(Box)({
  position: 'relative',
  overflow: 'hidden',
  height: 200,
  background: 'linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)'
});

const CertImage = styled('img')(() => ({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.4s ease'
}));

const ImageOverlay = styled(Box)(() => ({
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
  transition: 'opacity 0.3s ease'
}));

const ActionButton = styled(IconButton)(({ theme }) => ({
  background: 'rgba(255, 255, 255, 0.9)',
  color: theme.palette.text.primary,
  '&:hover': {
    background: theme.palette.background.default,
    transform: 'scale(1.1)'
  }
}));

const BadgeIcon = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  background: 'rgba(255, 255, 255, 0.95)',
  borderRadius: '50%',
  width: 48,
  height: 48,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
  color: theme.palette.primary.main
}));

const SkillChip = styled(Box)(({ theme }) => ({
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

const CertificationCard: FC<CertificationCardProps> = ({
  title,
  issuer,
  date,
  description,
  image,
  imageAlt,
  credentialUrl,
  skills
}) => {
  return (
    <StyledCard elevation={0}>
      <ImageContainer>
        <CertImage
          className="cert-image"
          src={image}
          alt={imageAlt}
        />
        <BadgeIcon>
          <WorkspacePremiumOutlinedIcon sx={{ fontSize: 28 }} />
        </BadgeIcon>
        {credentialUrl && (
          <ImageOverlay className="cert-overlay">
            <ActionButton 
              onClick={(e) => {
                e.stopPropagation();
                window.open(credentialUrl, '_blank');
              }}
              aria-label="View Credential"
            >
              <LaunchIcon />
            </ActionButton>
          </ImageOverlay>
        )}
      </ImageContainer>
      
      <CardContent sx={{ p: 3, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Stack spacing={2} sx={{ flexGrow: 1 }}>
          <Typography variant="h6" color="text.primary" fontWeight="600">
            {title}
          </Typography>
          
          <Typography variant="subtitle1" color="primary.main" fontWeight="500">
            {issuer}
          </Typography>
          
          <Stack direction="row" spacing={1} alignItems="center">
            <CalendarTodayOutlinedIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
            <Typography variant="body2" color="text.secondary" fontWeight="500">
              {date}
            </Typography>
          </Stack>
          
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6, flexGrow: 1 }}>
            {description}
          </Typography>
          
          {skills && skills.length > 0 && (
            <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1, mt: 'auto' }}>
              {skills.map((skill, index) => (
                <SkillChip key={index}>
                  {skill}
                </SkillChip>
              ))}
            </Stack>
          )}
        </Stack>
      </CardContent>
    </StyledCard>
  );
};

export default CertificationCard;