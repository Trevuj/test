import { Container, Typography } from '@mui/material';
import AnimatedCard from '../components/common/AnimatedCard';

const Contact = () => {
  return (
    <Container>
      <Typography variant="h1">Contact Us</Typography>
      <AnimatedCard>
        <Typography>Connect with us on social media</Typography>
        {/* Add your social media links here */}
      </AnimatedCard>
    </Container>
  );
};

export default Contact; 