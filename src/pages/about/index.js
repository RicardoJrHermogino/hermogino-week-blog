import { Typography, Container, Box } from "@mui/material";

// About component that can be imported into the main page
export default function About({ aboutRef }) {
  return (
    <Box ref={aboutRef} sx={{ py: 8, px: 4, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" fontWeight="bold" textAlign="center" gutterBottom>
          About
        </Typography>
        <Typography variant="h6" textAlign="center" color="text.secondary" sx={{ mb: 6 }}>
          The story behind our blog
        </Typography>
        
        <Box sx={{ maxWidth: "800px", mx: "auto" }}>
          <Typography variant="body1" paragraph>
            Welcome to our tech blog, where we share insights, tutorials, and the latest trends in the world of technology. Founded in 2023, our mission is to make complex technical concepts accessible to everyone, from beginners to seasoned professionals.
          </Typography>
          
          <Typography variant="body1" paragraph>
            Our team consists of passionate developers, designers, and tech enthusiasts who are dedicated to creating high-quality content that helps our readers stay ahead in the rapidly evolving tech landscape. We cover a wide range of topics including web development, mobile app creation, UI/UX design principles, programming languages, and emerging technologies.
          </Typography>
          
          <Typography variant="body1" paragraph>
            What sets our blog apart is our commitment to providing practical, hands-on examples alongside theoretical knowledge. Whether you're looking to expand your skillset, solve a coding problem, or simply stay informed about the latest industry developments, we've got you covered.
          </Typography>
          
          <Typography variant="body1" paragraph>
            We believe in fostering a community of learners and innovators. Our comment section and forum encourage readers to share their experiences, ask questions, and connect with like-minded individuals. We regularly feature guest posts from industry experts and highlight community projects that showcase creativity and technical excellence.
          </Typography>
          
          <Typography variant="body1">
            Join us on this journey of exploration and discovery as we navigate the exciting world of technology together. Subscribe to our newsletter to receive weekly updates and be the first to know about new articles, tutorials, and resources.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}