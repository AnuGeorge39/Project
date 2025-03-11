import React from 'react';
import { Container, Typography, Grid, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledSection = styled('section')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  backgroundColor: '#f8f9fa'
}));

const AboutCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)'
  }
}));

export default function About_us() {
  const features = [
    {
      title: 'Our Mission',
      description: 'To provide innovative software solutions that empower businesses and individuals to achieve their digital transformation goals efficiently and effectively.'
    },
    {
      title: 'Our Vision',
      description: 'To become a leading force in the software industry by delivering cutting-edge solutions that drive technological advancement and create lasting value for our clients.'
    },
    {
      title: 'Our Values',
      description: 'Innovation, integrity, collaboration, and customer success are at the core of everything we do. We believe in fostering a culture of continuous learning and excellence.'
    }
  ];

  return (
    <div>
      <StyledSection>
        <Container maxWidth="lg">
          <Box textAlign="center" mb={6}>
            <Typography variant="h2" component="h1" gutterBottom>
              About Us
            </Typography>
            <Typography variant="h5" color="textSecondary" paragraph>
              Transforming Ideas into Powerful Software Solutions
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={4} key={index}>
                <AboutCard elevation={2}>
                  <CardContent>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </AboutCard>
              </Grid>
            ))}
          </Grid>

          <Box mt={8} textAlign="center">
            <Typography variant="h4" gutterBottom>
              Why Choose Us?
            </Typography>
            <Typography variant="body1" color="textSecondary" paragraph>
              With years of experience in software development and a passionate team of experts,
              we deliver solutions that are scalable, secure, and tailored to your specific needs.
              Our commitment to excellence and customer satisfaction sets us apart in the industry.
            </Typography>
          </Box>
        </Container>
      </StyledSection>
    </div>
  );
}
