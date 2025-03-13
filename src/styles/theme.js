// styles/theme.js
import { createTheme } from '@mui/material/styles';

// Create theme modes
export const getTheme = (mode) => createTheme({
  palette: {
    mode: mode, // 'light' or 'dark'
    ...(mode === 'light' 
      ? {
          // Light mode colors
          primary: {
            main: '#1976d2',
            light: '#63a4ff',
            dark: '#1565c0',
            contrastText: '#ffffff',
          },
          secondary: {
            main: '#ff9800',
            light: '#ffb74d',
            dark: '#f57c00',
            contrastText: '#ffffff',
          },
          background: {
            default: '#f5f5f5',
            paper: '#ffffff',
          },
          text: {
            primary: '#212121',
            secondary: '#757575',
          },
        }
      : {
          // Dark mode colors
          primary: {
            main: '#90caf9',
            light: '#e3f2fd',
            dark: '#42a5f5',
            contrastText: '#000000',
          },
          secondary: {
            main: '#ffb74d',
            light: '#ffe0b2',
            dark: '#f57c00',
            contrastText: '#000000',
          },
          background: {
            default: '#121212',
            paper: '#1e1e1e',
          },
          text: {
            primary: '#ffffff',
            secondary: '#b0b0b0',
          },
        }),
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    button: {
      textTransform: 'none',
    },
    h6: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        'a': {
          textDecoration: 'none',
          color: 'inherit'
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
});