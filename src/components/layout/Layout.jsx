import { Box } from '@mui/material';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <Box>
      <Header />
      <Box component="main" sx={{ pt: 8, minHeight: '100vh' }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout; 