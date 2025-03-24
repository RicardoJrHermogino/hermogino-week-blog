import { Box, Container, Typography, Card, CardContent, CardMedia, Chip, useTheme, Button } from '@mui/material';
import { useRouter } from 'next/router';

export default function WeeklyBlogSection() {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const router = useRouter();
  
  // Internship weekly data
  const weeks = [
    {
      id: 1,
      title: "First Week Training with IClinicSys Encoding",
      category: "1st Week",
      image: "/picture/week_1/week_1.jpg",
      description: "Started my On-the-Job Training at Gubat Rural Health Unit and Birthing Home under the Local Government Unit of Gubat. Welcomed by Sir Jay-Ar Jarabejo, who trained me in encoding patient records into IClinicSys. Learned to process paper records, interpret handwritten data, and keep up with the fast-paced flow of free healthcare services provided daily to the community."
    },
    {
      id: 2,
      title: "Adjusting to RHU Workflow & Improving Efficiency",
      category: "2nd Week",
      image: "/picture/week_2/1.jpg",
      description: "On my second week, I quickly adapted to RHU's fast-paced workflow, steadily improving my efficiency in handling tasks like iClinicSys encoding and PhilHealth eligibility checks. I also realized how positive and nice the environment was, with the doctors, nurses, and staff being genuinely kind and supportive."
    },    
    {
      "id": 3,
      "title": "Record Organization & Encoding Tasks",
      "category": "3rd Week",
      "image": "/picture/week_3/3.jpg",
      "description": "With fewer tasks this week, Sir Jay Ar assigned me and Kenneth Fazon to organize and file paper records. After that, we resumed our usual encoding duties. Ma’am Rona also let me observe as she fixed a PC that wouldn’t power on due to a faulty PSU. She even let me replace the PSU myself and reconnect the cables—giving me hands-on experience outside our usual tasks."
    },       
    {
      id: 4,
      title: "Building Confidence in RHU Workflow",
      category: "4th Week",
      image: "/picture/week_4/2.jpg",
      description: "This week, we stayed consistent with our regular RHU tasks—encoding patient data, organizing records, and supporting daily operations. I started becoming more confident and quicker, especially in understanding doctors’ handwriting on prescriptions and diagnoses, which helped me complete tasks faster without second-guessing."
    },
    {
      id: 5,
      title: "RHU Workflow Mastery",
      category: "5th Week",
      image: "/picture/week_5/3.jpg",
      description: "By this week, I fully mastered the RHU’s workflow—from patient encoding to handling records smoothly. Tasks felt automatic; I rarely needed to ask supervisors for clarification, even when unusual documents or issues came up. Everything ran efficiently, making my contributions solid and independent."
    },
    {
      id: 6,
      title: "Guiding New Intern & Continuing RHU Duties",
      category: "6th Week",
      image: "/picture/week_6/1.jpg",
      description: "This week, our classmate Chryst Ian joined as a new intern. While continuing our regular encoding and record management tasks, we also guided Ian in adapting to RHU’s workflow and systems, ensuring a smooth transition for him."
    },
    {
      id: 7,
      title: "PhilHealth Konsulta Event Participation",
      category: "7th Week",
      image: "/picture/week_7/1.jpg",
      description: "Assigned as part of the official workforce for the PhilHealth Konsulta event. Managed registration and data encoding tasks for community members receiving free health check-ups."
    },    
    {
      id: 8,
      title: "PhilHealth Eligibility and Patient Record Encoding",
      category: "8th Week",
      image: "/picture/week_8/1.jpg",
      description: "Continued encoding patient records in iClinicSys and handled PhilHealth eligibility claims by verifying Individual Treatment Records (ITR) for proper registration under Gubat RHU."
    },    
    {
      id: 9,
      title: "Regular RHU Duties & Website Assignment",
      category: "9th Week",
      image: "/picture/week_9/3.jfif",
      description: "While assisting with encoding and records, Dr. Ronald tasked us to create an RHU website for events, admin access, and information display, with development set to begin next week."
    },        
    {
      id: 10,
      title: "Start of RHU System Frontend Development & Tech Stack Finalization",
      category: "10th Week",
      image: "/picture/week_10/2.png",
      description: "We formally began RHU system development this week. The tech stack was finalized: Next.js for frontend, Material UI for design, Next.js API Routes for backend operations, and MongoDB as the database. We started building key frontend components and laid the groundwork for backend integration."
    },          
    {
      id: 11,
      title: "Backend Completion and System Finalization Amid RHU Duties",
      category: "11th Week",
      image: "/picture/week_11/1.jpg",
      description: "We dedicated this week to completing the backend development of the RHU system, utilizing Next.js API Routes and MongoDB. After meeting our primary development targets earlier than planned, we proceeded with final testing and debugging. Alongside system work, we also continued handling regular RHU tasks. By the end of the week, the RHU system was finalized and ready for use."
    },       
    {
      id: 12,
      title: "Assisted Patient Data Encoding & Final System Turnover Discussion",
      category: "12th Week",
      image: "/picture/week_12/7.jpg",
      description: "In our final week at Gubat RHU, after completing our system development, we returned to assist in encoding patient data into the IClinicSys system. At the end of the week, we were awarded a certificate and had a photo with Dr. Ronald E. Ferreras, Municipal Health Officer of Gubat, and Sir Jay-Ar Jarabejo, IT staff and our training supervisor."
    }
  ];

  // Function to navigate to blog detail page
  const handleBlogClick = (weekId) => {
    router.push(`/weeklyBlog/${weekId}`);
  };

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
            fontWeight="bold" 
            gutterBottom
            sx={{ 
              fontSize: { xs: '2.2rem', md: '2.8rem' },
              position: 'relative',
              mb: 5,
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: -16,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 80,
                height: 4,
                bgcolor: 'primary.main',
                borderRadius: 2
              }
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
          {[...weeks]
          .sort((a, b) => b.id - a.id)
          .map((week) => (
            <Card
              key={week.id}
              onClick={() => handleBlogClick(week.id)}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'all 0.3s ease',
                bgcolor: isDark ? 'background.paper' : 'white',
                color: isDark ? 'text.primary' : 'inherit',
                cursor: 'pointer', // Add this to show it's clickable
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
                  onClick={() => handleBlogClick(week.id)}
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