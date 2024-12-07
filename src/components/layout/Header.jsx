import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import ThemeToggle from '../common/ThemeToggle';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'rgba(0, 0, 0, 0.5)',
  backdropFilter: 'blur(10px)',
}));

const Logo = styled(motion.div)({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  color: 'var(--primary-color)',
});

const NavLinks = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '20px',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { title: 'Home', path: '/' },
    { title: 'WinCleaner', path: '/wincleaner' },
    { title: 'Browser Tools', path: '/browser-tools' },
    { title: 'Dollar Exchange', path: '/dollar-exchange' },
    { title: 'Contact', path: '/contact' },
  ];

  return (
    <StyledAppBar position="fixed">
      <Toolbar>
        <Logo
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Survey World of Farhan
        </Logo>
        
        <NavLinks>
          {navItems.map((item) => (
            <motion.div
              key={item.path}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to={item.path}>{item.title}</Link>
            </motion.div>
          ))}
        </NavLinks>

        <ThemeToggle />

        <IconButton
          color="inherit"
          edge="start"
          onClick={() => setMobileOpen(true)}
          sx={{ display: { md: 'none' } }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          anchor="right"
          open={mobileOpen}
          onClose={() => setMobileOpen(false)}
        >
          <List>
            {navItems.map((item) => (
              <ListItem 
                key={item.path}
                component={Link}
                to={item.path}
                onClick={() => setMobileOpen(false)}
              >
                {item.title}
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header; 