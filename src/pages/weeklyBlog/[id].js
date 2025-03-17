import React, { useRef } from 'react'; // Added React and useRef imports
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Chip, Divider, useTheme, Grid, Paper } from '@mui/material';
import Navbar from '../components/navbar';
import Head from 'next/head';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ImageIcon from '@mui/icons-material/Image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'; // Added this import
import { weeksData } from '../../weekData';

export default function BlogDetail() {
  const router = useRouter();
  const { id } = router.query;
  const [blogData, setBlogData] = useState(null);
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [scrolled, setScrolled] = useState(false);
  
  // Add this reference for the blog content section
  const blogContentRef = React.useRef(null);
  
  const scrollToSection = (sectionId) => {
    if (sectionId === 'blog' || sectionId === 'hero' || sectionId === 'about' || sectionId === 'contact') {
      router.push(`/#${sectionId}`);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Add this function to scroll to blog content
  const scrollToContent = () => {
    if (blogContentRef.current) {
      blogContentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

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

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  const navLinks = [
    { name: 'Blog', sectionId: 'blog' },
  ];
  
  useEffect(() => {
    if (id) {
      // Find the blog post that matches the ID
      const blogPost = weeksData.find(week => week.id === parseInt(id));
      if (blogPost) {
        setBlogData(blogPost);
      } else {
        // Handle case where blog post doesn't exist
        router.push('/404');
      }
    }
  }, [id, router]);

  // Return loading state if data is not yet available
  if (!blogData) {
    return (
      <>
         <Navbar scrollToSection={scrollToSection} />
        <Box sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography>Loading...</Typography>
        </Box>
      </>
    );
  }

  return (
    <>
       <Navbar scrollToSection={scrollToSection} />
      <Head>
        <title>{blogData.title} | Hermogino Weekly Blog</title>
        <meta name="description" content={blogData.description} />
      </Head>

      {/* Hero Section */}
      <Box
        sx={{
          height: '60vh',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'black',
          color: 'white',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${blogData.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.6,
          }
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
        <Button 
          startIcon={<ArrowBackIcon />}
          onClick={() => router.push('/#blog')}
          sx={{
            color: 'white',
            mb: 2,  // This is already providing bottom margin
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.1)'
            }
          }}
        >
          Back to all weeks
        </Button>

           {/* Added a spacer Box for better separation */}
           <Box sx={{ height: '12px' }}></Box>
          
          {/* Moved Chip below with the date */}
          <Typography 
            variant="h2" 
            fontWeight="bold"
            sx={{
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              maxWidth: '800px'
            }}
          >
            {blogData.title}
          </Typography>
          
          <Box sx={{ mt: 2, display: 'flex', alignItems: 'center' }}>
            <Typography variant="body1" sx={{ opacity: 0.8 }}>
              {blogData.date}
            </Typography>
            <Box sx={{ mx: 2 }}>•</Box>
            <Chip 
              label={blogData.category} 
              sx={{ 
                width:'20%',
                bgcolor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                fontWeight: 600,
              }}
            />
          </Box>
        </Container>
      </Box>

      {/* Content Section */}
      <Container 
        maxWidth="xl"
        sx={{ 
          py: { xs: 6, md: 10 },
          px: { xs: 2, sm: 4, md: 6 }
        }}
      >
        {/* Photo Gallery Section - MOVED BEFORE CONTENT */}
        {blogData.gallery && blogData.gallery.length > 0 ? (
          <Box sx={{ 
            maxWidth: '1200px',
            mx: 'auto', 
            mb: 8,
            position: 'relative',
            paddingTop: 8 // Add padding for the bouncing arrow
          }}>
            {/* Bouncing Arrow */}
            <Box
              onClick={scrollToContent}
              sx={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                animation: 'bounce 2s infinite',
                '@keyframes bounce': {
                  '0%, 20%, 50%, 80%, 100%': {
                    transform: 'translateY(0) translateX(-50%)'
                  },
                  '40%': {
                    transform: 'translateY(-20px) translateX(-50%)'
                  },
                  '60%': {
                    transform: 'translateY(-10px) translateX(-50%)'
                  }
                }
              }}
            >
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}>
                Scroll to Details
              </Typography>
              <KeyboardArrowDownIcon fontSize="large" color="primary" />
            </Box>

            <Typography 
              variant="h4" 
              fontWeight="bold" 
              sx={{ 
                mb: 4,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <ImageIcon fontSize="large" />
              Documentation Gallery
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 4, color: isDark ? theme.palette.text.secondary : '#475569' }}>
              Visual documentation of key activities and milestones from Week {blogData.id}.
            </Typography>
            
            <Grid container spacing={3}>
              {blogData.gallery.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper
                    elevation={2}
                    sx={{
                      overflow: 'hidden',
                      borderRadius: 2,
                      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                    }}
                  >
                    <Box
                      sx={{
                        height: { xs: 280, sm: 320, md: 360 },
                        width: '100%',
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />

                    <Box sx={{ p: 2 }}>
                      <Typography variant="body2" sx={{ fontStyle: 'italic', color: isDark ? theme.palette.text.secondary : '#475569' }}>
                        {item.caption}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : (
          // Fallback content when gallery is not available
          <Box sx={{ 
            maxWidth: '1200px',
            mx: 'auto', 
            mb: 8,
            position: 'relative',
            paddingTop: 8 // Add padding for the bouncing arrow
          }}>
            {/* Bouncing Arrow */}
            <Box
              onClick={scrollToContent}
              sx={{
                position: 'absolute',
                top: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                animation: 'bounce 2s infinite',
                '@keyframes bounce': {
                  '0%, 20%, 50%, 80%, 100%': {
                    transform: 'translateY(0) translateX(-50%)'
                  },
                  '40%': {
                    transform: 'translateY(-20px) translateX(-50%)'
                  },
                  '60%': {
                    transform: 'translateY(-10px) translateX(-50%)'
                  }
                }
              }}
            >
              <Typography variant="body2" sx={{ mb: 1, fontWeight: 'medium' }}>
                Scroll to Details
              </Typography>
              <KeyboardArrowDownIcon fontSize="large" color="primary" />
            </Box>

            <Typography 
              variant="h4" 
              fontWeight="bold" 
              sx={{ 
                mb: 4,
                display: 'flex',
                alignItems: 'center',
                gap: 1
              }}
            >
              <ImageIcon fontSize="large" />
              Documentation Gallery
            </Typography>
            
            <Paper
              elevation={1}
              sx={{
                p: 4,
                borderRadius: 2,
                textAlign: 'center',
                bgcolor: isDark ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.02)'
              }}
            >
              <Typography variant="body1" sx={{ color: isDark ? theme.palette.text.secondary : '#475569' }}>
                No documentation images available for this week.
              </Typography>
            </Paper>
          </Box>
        )}

        <Divider sx={{ maxWidth: '1200px', mx: 'auto', mb: 6 }} />

        {/* Blog Content - NOW AFTER GALLERY */}
        <Box 
          ref={blogContentRef} // Added this ref
          sx={{ 
            maxWidth: '1200px',
            mx: 'auto',
            scrollMarginTop: '80px', // This ensures the scroll position accounts for any fixed headers
            '& h2': {
              fontSize: '1.8rem',
              fontWeight: 600,
              mb: 3,
              mt: 5,
              color: isDark ? theme.palette.text.primary : '#1e293b'
            },
            '& h3': {
              fontSize: '1.4rem',
              fontWeight: 600,
              mb: 2,
              mt: 4,
              color: isDark ? theme.palette.text.primary : '#1e293b'
            },
            '& p': {
              fontSize: '1.05rem',
              lineHeight: 1.7,
              mb: 3,
              color: isDark ? theme.palette.text.secondary : '#475569'
            },
            '& ul': {
              mb: 4,
              pl: 4
            },
            '& li': {
              mb: 1,
              fontSize: '1.05rem',
              color: isDark ? theme.palette.text.secondary : '#475569'
            }
          }}
          dangerouslySetInnerHTML={{ __html: blogData.content }}
        />

        <Divider sx={{ my: 6, maxWidth: '1200px', mx: 'auto' }} />
        
        {/* Navigation between blog posts */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2,
            mt: 4,
            maxWidth: '1200px',
            mx: 'auto'
          }}
        >
          {blogData.id > 1 && (
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => router.push(`/blog/${blogData.id - 1}`)}
              variant="outlined"
              sx={{ 
                borderRadius: 2,
                px: 3,
                py: 1
              }}
            >
              Previous Week
            </Button>
          )}
          
          {blogData.id < weeksData.length && (
            <Button
              endIcon={<ArrowForwardIcon />}
              onClick={() => router.push(`/blog/${blogData.id + 1}`)}
              variant="contained"
              sx={{ 
                borderRadius: 2,
                px: 3,
                py: 1,
                ml: 'auto'
              }}
            >
              Next Week
            </Button>
          )}
        </Box>
      </Container>
    </>
  );
}