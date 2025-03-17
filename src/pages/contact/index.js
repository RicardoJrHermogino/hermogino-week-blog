import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

const ContactSection = ({ isDark }) => {
  return (
    <Box sx={{ py: 8, px: 4, bgcolor: "background.default" }}>
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" textAlign="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 4 }}>
          Get in touch with our team
        </Typography>

        <Box sx={{ textAlign: "center", my: 4 }}>
          <Typography variant="body1" gutterBottom>
            Email: contact@example.com
          </Typography>
          <Typography variant="body1" gutterBottom>
            Phone: +1 (123) 456-7890
          </Typography>
          <Typography variant="body1">Address: 123 Main St, City, Country</Typography>
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
  );
};

export default ContactSection;
