import { IconButton, Tooltip } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import { useTheme } from '../../context/ThemeContext';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <motion.div whileTap={{ scale: 0.9 }}>
      <Tooltip title={`Switch to ${isDark ? 'light' : 'dark'} mode`}>
        <IconButton onClick={toggleTheme} color="inherit">
          {isDark ? <Brightness7 /> : <Brightness4 />}
        </IconButton>
      </Tooltip>
    </motion.div>
  );
};

export default ThemeToggle; 