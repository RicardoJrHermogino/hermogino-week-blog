import Head from "next/head";
import { Typography, Button, Box, Container, useTheme } from "@mui/material";
import Navbar from "./components/navbar";
import About from "./about";
import WeeklyBlogSection from "@/pages/blog/index"
import { useRef } from "react";

export default function Home() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  // Create refs for all sections
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (sectionId) => {
    const sectionRefs = {
      hero: heroRef,
      about: aboutRef,
      blog: blogRef,
      contact: contactRef
    };
    
    if (sectionRefs[sectionId] && sectionRefs[sectionId].current) {
      sectionRefs[sectionId].current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      <Head>
        <title>Hermogino Weekly Blog</title>
        <meta name="description" content="A minimalist and modern homepage" />
      </Head>

      {/* Hero Section */}
      <Box
        ref={heroRef}
        id="hero"
        sx={{
          height: "100vh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 3,
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            zIndex: 1,
          },
        }}
      >
        {/* Video Background */}
        <Box
          component="video"
          autoPlay
          muted
          loop
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        >
          <source src="/video/ojt_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Box>

        {/* Content that overlays the video */}
        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            color: "white",
          }}
        >
          <Typography variant="h2" fontWeight="bold" gutterBottom>
            Welcome to my Internship Weekly Blog
          </Typography>
          <Typography variant="h5" sx={{ color: "rgba(255, 255, 255, 0.8)", mb: 4 }}>
            Sharing my internship journey—projects, challenges, and lessons learned every week.
          </Typography>

          <Button
            variant="outlined"
            onClick={() => scrollToSection('about')}
            sx={{
              borderRadius: '50px',
              height: '50px',
              width: "20%",
              bgcolor: "rgba(255, 255, 255, 0.2)",
              backdropFilter: "blur(10px)",
              borderColor: "rgba(255, 255, 255, 0.5)",
              color: "white",
              "&:hover": {
                bgcolor: "rgba(255, 255, 255, 0.4)",
                color: "black"
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Box>

      {/* About Section */}
      <Box ref={aboutRef} id="about">
        <About />
      </Box>

      {/* Blog Section */}
      <Box ref={blogRef} id="blog">
        <WeeklyBlogSection />
      </Box>

      {/* Contact Section */}
      <Box 
        ref={contactRef}
        id="contact"
        sx={{ py: 8, px: 4, bgcolor: 'background.default' }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" fontWeight="bold" textAlign="center" gutterBottom>
            Contact
          </Typography>
          <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
            Get in touch
          </Typography>

          <Box sx={{ textAlign: "center", my: 4 }}>
            <Typography variant="body1" gutterBottom>
              Email: ricardohermoginojr@thelewiscollege.edu.ph
            </Typography>
            <Typography variant="body1" gutterBottom>
              Phone: +639506471431
            </Typography>
            <Typography variant="body1">
              Address: Cogon, Gubat, Sorsogon 
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center", mt: 4 }}>
            <Button
              variant="contained"
              color="primary"
              sx={{
                bgcolor: isDark ? 'primary.main' : 'black',
                "&:hover": {
                  bgcolor: isDark ? 'primary.dark' : '#333'
                }
              }}
            >
              Send Message
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ py: 4, bgcolor: isDark ? 'background.paper' : 'black', color: isDark ? 'text.primary' : 'white' }}>
        <Container maxWidth="lg">
          <Typography variant="body2" textAlign="center">
          © {new Date().getFullYear()} Hermogino. All rights reserved.
          </Typography>
        </Container>
      </Box>
    </>
  );
}