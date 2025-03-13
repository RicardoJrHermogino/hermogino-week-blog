import { Box, Container, Typography, Card, CardContent, CardMedia, Chip, useTheme, Button } from '@mui/material';
import { Calendar, Clock, Code, Briefcase } from 'lucide-react';

export default function WeeklyBlogSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  
  // Internship weekly data
  const weeks = [
    {
      id: 1,
      title: "Getting Started with the Team",
      category: "1st Week",
      image: "/picture/week_1.jpg",
      description: "First week of orientation. Met the team, set up my development environment, and learned about the company's workflow and methodologies."
    },
    {
      id: 2,
      title: "Backend Development Basics",
      category: "2nd Week",
      image: "/picture/week_1.jpg",
      description: "Began working on backend development. Learned RESTful API design principles and created my first endpoints with Express.js."
    },
    {
      id: 3,
      title: "Frontend Framework Introduction",
      category: "3rd Week",
      image: "/picture/week_1.jpg",
      description: "Started learning React and Material UI. Built my first component and integrated it with the API endpoints from last week."
    },
    {
      id: 4,
      title: "Authentication System",
      category: "4th Week",
      image: "/picture/week_1.jpg",
      description: "Implemented authentication flows using JWT tokens. Learned about secure user management and authorization strategies."
    },
    {
      id: 5,
      title: "Database Optimization",
      category: "5th Week",
      image: "/picture/week_1.jpg",
      description: "Focused on database performance. Learned about indexing, query optimization, and implementing efficient data structures."
    },
    {
      id: 6,
      title: "Testing and Deployment",
      category: "6th Week",
      image: "/picture/week_1.jpg",
      description: "Wrote unit and integration tests for our codebase. Set up CI/CD pipeline and learned about containerization with Docker."
    }
  ];

  return (
    <Box id='blog'
      sx={{ 
        py: { xs: 6, md: 10 },
        backgroundColor: isDark ? 'background.default' : '#f8fafc'
      }}
    >
      <Container maxWidth="lg">
        {/* Section Header */}
        <Box 
          sx={{
            textAlign: 'center',
            mb: { xs: 4, md: 6 }
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: '1.3rem', sm: '1.8rem', md: '2rem' },
              fontWeight: 700,
              color: isDark ? 'text.primary' : '#1e293b',
              mb: 2
            }}
          >
            My Internship Journey
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              color: isDark ? 'text.secondary' : '#64748b',
              maxWidth: '700px',
              mx: 'auto'
            }}
          >
            A weekly record of my progress, challenges, and achievements during my software development internship
          </Typography>
        </Box>

        {/* Weekly Blogs Grid */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)'
            },
            gap: { xs: 3, md: 4 },
            mt: 4
          }}
        >
          {weeks.map((week) => (
            <Card
            key={week.id}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '16px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              bgcolor: isDark ? 'background.paper' : 'white',
              color: isDark ? 'text.primary' : 'inherit',
              '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: isDark 
                  ? '0 12px 24px rgba(255, 255, 255, 0.1)' 
                  : '0 12px 24px rgba(0, 0, 0, 0.1)',
              },
            }}
          >
            <CardMedia
              component="img"
              height="180"
              image={week.image}
              alt={week.title}
              sx={{
                objectFit: 'cover',
              }}
            />
            <CardContent
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
                p: 2.5,
              }}
            >
              <Chip
                label={week.category}
                sx={{
                  alignSelf: 'flex-start',
                  backgroundColor: isDark ? 'rgba(226, 232, 240, 0.15)' : '#e2e8f0',
                  color: isDark ? 'text.primary' : '#1e293b',
                  fontWeight: 600,
                  mb: 1
                }}
              />
              
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 600,
                  color: isDark ? 'text.primary' : '#1e293b',
                  mb: 1,
                  fontSize: { xs: '1.1rem', sm: '1.3rem' }
                }}
              >
                {week.title}
              </Typography>
          
              <Typography
                sx={{
                  color: isDark ? 'text.secondary' : '#64748b',
                  fontSize: '0.95rem',
                  mb: 1.5,
                  flex: 1
                }}
              >
                {week.description}
              </Typography>
          
            
              
              <Button 
                variant="contained"
                sx={{
                  borderRadius:'30px',
                  height:'50px',
                  mt: 2,
                  bgcolor: isDark ? 'primary.main' : 'black',
                  '&:hover': {
                    bgcolor: isDark ? 'primary.dark' : '#1e40af',
                  },
                  textTransform: 'none',
                  fontWeight: 600,
                  py: 1
                }}
              >
                Dive in
              </Button>
            </CardContent>
          </Card>
          ))}
        </Box>
      </Container>
    </Box>
  );
}