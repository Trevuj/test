import { createTheme } from '@mui/material/styles';

const getTheme = (mode) => createTheme({
  palette: {
    mode,
    primary: {
      main: '#6C63FF',
    },
    secondary: {
      main: '#4CAF50',
    },
    background: {
      default: mode === 'dark' ? '#121212' : '#f5f5f5',
      paper: mode === 'dark' ? '#1E1E1E' : '#ffffff',
    },
    text: {
      primary: mode === 'dark' ? '#E0E0E0' : '#070A0E',
      secondary: mode === 'dark' ? '#B0B0B0' : '#424242',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          transition: 'all 0.3s ease',
        },
      },
    },
  },
});

export default getTheme; 