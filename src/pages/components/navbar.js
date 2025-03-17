'use client';

import { useState, useEffect, useContext } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box, Drawer, List, ListItem, ListItemButton, Container, useTheme } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ColorModeContext } from '../_app';

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  const isDark = theme.palette.mode === 'dark';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleDrawer = (open) => () => {
    setIsOpen(open);
  };

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Home', sectionId: 'hero' },
    { name: 'About', sectionId: 'about' },
    { name: 'Blog', sectionId: 'blog' },
    { name: 'Contact', sectionId: 'contact' }
  ];

  return (
    <>
      {/* Top Navbar */}
      <AppBar 
        position="fixed" 
        elevation={0}
        sx={{ 
          backgroundColor: isDark
            ? (scrolled ? 'rgba(30, 30, 30, 0.80)' : 'transparent')
            : (scrolled ? 'rgba(255, 255, 255, 0.60)' : 'transparent'),
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.05)' : 'none'
        }}
      >
        <Container maxWidth="xl" sx={{ px: { xs: 3, sm: 5, md: 8 } }}>
          <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', py: 1 }}>
            {/* Brand Logo with More Left Spacing */}
            <Typography 
              variant="h6" 
              component="div"
              onClick={() => handleNavClick('hero')}
              sx={{ 
                fontWeight: 'bold', 
                cursor: 'pointer',
                color: isDark 
                  ? (scrolled ? theme.palette.text.primary : 'white') 
                  : (scrolled ? '#111' : 'white'),
                letterSpacing: '0.5px',
                ml: { xs: 0, md: 15 }
              }}
            >
              Hermogino Weekly Blog
            </Typography>

            {/* Desktop Menu with Increased Spacing */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 10, mr: 15 }}>
              {navLinks.map((link) => (
                <Typography
                  key={link.name}
                  variant="body1"
                  onClick={() => handleNavClick(link.sectionId)}
                  sx={{
                    color: isDark 
                      ? (scrolled ? theme.palette.text.primary : 'white') 
                      : (scrolled ? '#111' : 'white'),
                    cursor: 'pointer',
                    fontWeight: 500,
                    fontSize: '1rem',
                    padding: '0 8px',
                    position: 'relative',
                    '&:hover': { 
                      color: isDark 
                        ? (scrolled ? theme.palette.text.secondary : 'rgba(255, 255, 255, 0.8)') 
                        : (scrolled ? '#555' : 'rgba(255, 255, 255, 0.8)')
                    },
                    '&:after': {
                      content: '""',
                      position: 'absolute',
                      width: '0',
                      height: '2px',
                      bottom: '-4px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      backgroundColor: isDark 
                        ? (scrolled ? theme.palette.text.primary : 'white') 
                        : (scrolled ? '#111' : 'white'),
                      transition: 'width 0.3s ease'
                    },
                    '&:hover:after': {
                      width: '100%'
                    },
                    transition: 'all 0.3s ease'
                  }}
                >
                  {link.name}
                </Typography>
              ))}
              
              {/* Theme Toggle Button */}
              <IconButton 
                onClick={colorMode.toggleColorMode} 
                color="inherit"
                sx={{ 
                  color: isDark 
                    ? (scrolled ? theme.palette.text.primary : 'white') 
                    : (scrolled ? '#111' : 'white'),
                  '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.1)' }
                }}
              >
                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
              </IconButton>
            </Box>

            {/* Mobile Menu Button */}
            <IconButton 
              edge="end" 
              onClick={toggleDrawer(true)} 
              sx={{ 
                display: { md: 'none' },
                color: isDark 
                  ? (scrolled ? theme.palette.text.primary : 'white') 
                  : (scrolled ? '#111' : 'white')
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Menu Drawer */}
      <Drawer anchor="right" open={isOpen} onClose={toggleDrawer(false)}>
        <Box 
          sx={{ 
            width: 280, 
            background: isDark 
              ? 'rgba(30, 30, 30, 0.95)'
              : 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(10px)',
            height: '100%', 
            color: theme.palette.text.primary, 
            display: 'flex', 
            flexDirection: 'column' 
          }}
        >
          {/* Close Button */}
          <IconButton onClick={toggleDrawer(false)} sx={{ alignSelf: 'flex-end', color: theme.palette.text.primary, m: 2 }}>
            <CloseIcon />
          </IconButton>

          {/* Mobile Menu Items with Increased Spacing */}
          <List sx={{ px: 2 }}>
            {navLinks.map((link) => (
              <ListItem key={link.name} disablePadding sx={{ my: 2 }}>
                <ListItemButton 
                  onClick={() => handleNavClick(link.sectionId)}
                  sx={{
                    borderRadius: 1,
                    py: 1.5,
                    '&:hover': {
                      backgroundColor: isDark 
                        ? 'rgba(255, 255, 255, 0.05)'
                        : 'rgba(0, 0, 0, 0.04)'
                    }
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      color: theme.palette.text.primary,
                      fontWeight: 500,
                      fontSize: '1.05rem',
                      '&:hover': { color: theme.palette.text.secondary },
                      transition: 'color 0.3s ease'
                    }}
                  >
                    {link.name}
                  </Typography>
                </ListItemButton>
              </ListItem>
            ))}
            
            {/* Theme Toggle in Mobile Menu */}
            <ListItem disablePadding sx={{ my: 2 }}>
              <ListItemButton 
                onClick={colorMode.toggleColorMode}
                sx={{
                  borderRadius: 1,
                  py: 1.5,
                  display: 'flex',
                  justifyContent: 'space-between',
                  '&:hover': {
                    backgroundColor: isDark 
                      ? 'rgba(255, 255, 255, 0.05)'
                      : 'rgba(0, 0, 0, 0.04)'
                  }
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 500,
                    fontSize: '1.05rem',
                  }}
                >
                  {isDark ? 'Light Mode' : 'Dark Mode'}
                </Typography>
                {isDark ? <LightModeIcon /> : <DarkModeIcon />}
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;