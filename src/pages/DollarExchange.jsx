import { Container, Typography, Button } from '@mui/material';
import AnimatedCard from '../components/common/AnimatedCard';

const DollarExchange = () => {
  return (
    <Container>
      <Typography variant="h1">Dollar Exchange</Typography>
      <AnimatedCard>
        <Typography>Best Dollar exchange Rate here...</Typography>
        <Button 
          variant="contained" 
          href="https://forms.gle/3m8veagMgjZnKUCS8"
          target="_blank"
        >
          Exchange
        </Button>
      </AnimatedCard>
    </Container>
  );
};

export default DollarExchange; 