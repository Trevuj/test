import { motion } from 'framer-motion';
import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const AnimatedCard = styled(motion(Card))({
  padding: '2rem',
  background: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  borderRadius: '15px',
});

export default function ToolCard({ children }) {
  return (
    <AnimatedCard
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </AnimatedCard>
  );
} 