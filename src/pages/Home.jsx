import { Container, Typography } from '@mui/material';
import AnimatedCard from '../components/common/AnimatedCard';

const Home = () => {
  return (
    <Container>
      <Typography variant="h1">As-Salamu Alaikum</Typography>
      <AnimatedCard>
        <Typography>Discover insights through our innovative surveys</Typography>
      </AnimatedCard>
    </Container>
  );
};

export default Home; 