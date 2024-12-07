import { Container, Typography, Grid, Button } from '@mui/material';
import AnimatedCard from '../components/common/AnimatedCard';
import { Helmet } from 'react-helmet';

const BrowserTools = () => {
  const tools = [
    { name: 'GoLogin', url: 'https://gologin.com/' },
    { name: 'AdsPower', url: 'https://www.adspower.com/' },
    { name: 'Incognition', url: 'https://incogniton.com/' },
    { name: 'Dolphin{anty}', url: 'https://dolphin-anty.com/' },
    { name: 'MoreLogin', url: 'https://www.morelogin.com/' },
    { name: 'ClonBrowser', url: 'https://www.clonbrowser.com/' },
  ];

  return (
    <>
      <Helmet>
        <title>Browser Tools - Survey World of Farhan</title>
        <meta name="description" content="Explore our collection of browser tools and utilities" />
      </Helmet>
      <Container>
        <Typography variant="h1" component="h1">Browser Tools</Typography>
        <Grid container spacing={3}>
          {tools.map((tool) => (
            <Grid item xs={12} sm={6} md={4} key={tool.name}>
              <AnimatedCard>
                <Typography variant="h5" component="h2">{tool.name}</Typography>
                <Button 
                  variant="contained" 
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${tool.name} website`}
                >
                  Visit {tool.name}
                </Button>
              </AnimatedCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default BrowserTools; 