// pages/_app.js
import { useState, useMemo, createContext, useEffect } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { getTheme } from '../styles/theme';

// Create a context to manage the theme state
export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export default function App({ Component, pageProps }) {
  // Default to light mode
  const [mode, setMode] = useState('light');
  
  // Check if we're in the browser and load saved preference
  useEffect(() => {
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode) {
      setMode(savedMode);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // Use system preference as fallback
      setMode('dark');
    }
  }, []);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === 'light' ? 'dark' : 'light';
          // Save preference to localStorage
          localStorage.setItem('themeMode', newMode);
          return newMode;
        });
      },
      mode,
    }),
    [mode]
  );

  // Update the theme only when the mode changes
  const theme = useMemo(() => getTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}