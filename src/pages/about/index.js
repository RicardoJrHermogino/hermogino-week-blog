import { Typography, Container, Box, Grid, Paper, Avatar, useTheme, useMediaQuery, alpha } from "@mui/material";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SchoolIcon from '@mui/icons-material/School';

// About component with improved UI design
export default function About({ aboutRef }) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box 
      ref={aboutRef} 
      sx={{ 
        py: { xs: 10, md: 14 }, 
        px: { xs: 2, sm: 4 },
        bgcolor: theme.palette.mode === 'light' ? 'grey.50' : 'background.paper',
        position: 'relative',
        overflow: 'hidden',
        borderTop: `1px solid ${alpha(theme.palette.divider, 0.05)}`,
        borderBottom: `1px solid ${alpha(theme.palette.divider, 0.05)}`
      }}
    >
      {/* Background decorative elements - simplified and improved */}
      <Box 
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          opacity: 0.03,
          background: 'linear-gradient(135deg, #6b73ff 0%, #000dff 100%)',
          clipPath: 'polygon(100% 0, 100% 100%, 0 100%, 60% 0)',
          zIndex: 0
        }}
      />
      
      <Box 
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '40%',
          height: '60%',
          opacity: 0.02,
          background: 'radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          transform: 'translate(-20%, 30%)',
          zIndex: 0
        }}
      />
      
      {/* Small decorative elements - positioned more intentionally */}
      {[
        { top: '10%', left: '5%', size: '20px', color: 'primary' },
        { bottom: '15%', right: '10%', size: '15px', color: 'secondary' },
        { top: '30%', right: '20%', size: '12px', color: 'info' },
        { bottom: '40%', left: '15%', size: '10px', color: 'success' }
      ].map((item, index) => (
        <Box 
          key={index}
          sx={{
            position: 'absolute',
            top: item.top || 'auto',
            left: item.left || 'auto',
            bottom: item.bottom || 'auto',
            right: item.right || 'auto',
            width: item.size,
            height: item.size,
            bgcolor: alpha(theme.palette[item.color].main, 0.15),
            borderRadius: '50%',
            zIndex: 0
          }}
        />
      ))}

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header Section with improved styling */}
        <Box 
          sx={{ 
            mb: { xs: 8, md: 10 },
            textAlign: 'center',
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          <SchoolIcon
              
              sx={{ 
                width: 50,
                height: 50,
                borderRadius: '50%',
                color: theme.palette.primary.main,
              }}
            />
          
          <Typography 
            variant="h2" 
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
            About My Journey
          </Typography>
          
          <Typography 
            variant="h6" 
            color="text.secondary" 
            sx={{ 
              mt: 3, 
              fontWeight: 'normal', 
              maxWidth: '600px', 
              mx: 'auto',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.5
            }}
          >
            My OJT Experience at Gubat Rural Health Unit and Birthing Home
          </Typography>
        </Box>

        <Grid 
          container 
          justifyContent="center" 
          alignItems="center" 
          spacing={1} 
          sx={{ mb: 6 }}
          >
          <Grid 
            item 
            xs={12} 
            md={5} 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              pr: { md: 3 }
            }}
          >
            <Box
              component="img"
              src="ccs.webp"
              alt="College of Computer Studies"
              sx={{
                width: { xs: '50%', sm: '40%', md: '55%' },
                height: 'auto',
                objectFit: 'contain'
              }}
            />
          </Grid>
          <Grid 
            item 
            xs={12} 
            md={2} 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Box
              sx={{
                width: '30px',
                height: '2px',
                bgcolor: 'primary.main',
                mx: 1,
                transform: { xs: 'rotate(90deg)', md: 'rotate(0deg)' },
                my: { xs: 2, md: 0 }
              }}
            />
          </Grid>
          <Grid 
            item 
            xs={12} 
            md={5} 
            sx={{ 
              display: 'flex', 
              justifyContent: 'center',
              alignItems: 'center',
              pl: { md: 3 }
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                gap: { xs: 1, sm: 2 }
              }}
            >
              <Box
                component="img"
                src="lgu.svg"
                alt="Local Government Unit"
                sx={{
                  width: { xs: '40%', sm: '35%', md: '45%' },
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
              <Box
                component="img"
                src="grhu.svg"
                alt="Gubat Rural Health Unit"
                sx={{
                  width: { xs: '40%', sm: '35%', md: '45%' },
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </Box>
          </Grid>
          </Grid>
        
        
        {/* Main Content Section with improved Grid Layout */}
        <Grid container spacing={{ xs: 4, md: 6 }} sx={{ maxWidth: "1200px", mx: "auto" }}>
          <Grid item xs={12} md={5}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: { xs: 4, md: 5 }, 
                height: '100%', 
                borderRadius: 4,
                bgcolor: 'background.paper',
                boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 28px rgba(0,0,0,0.08)',
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Avatar 
                  sx={{ 
                    bgcolor: alpha(theme.palette.primary.main, 0.12),
                    color: theme.palette.primary.main,
                    mr: 2.5,
                    width: 56,
                    height: 56,
                    padding: 0.5  // Add some padding for the image
                  }}
                >
                  {/* Replace SchoolIcon with CCS badge */}
                  <Box
                    component="img"
                    src="ccs.webp"
                    alt="College of Computer Studies"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </Avatar>
                <Typography variant="h5" fontWeight="600" color="primary.main">
                  The Program
                </Typography>
              </Box>
              
              <Typography 
                variant="body1" 
                paragraph 
                sx={{ 
                  mb: 4,
                  lineHeight: 1.7,
                  color: alpha(theme.palette.text.primary, 0.9)
                }}
              >
                The Lewis College (TLC) recognizes that learning doesn&apos;st stop inside the classroom. To better prepare BSIT students for the demands of the IT industry, TLC has implemented an On-the-Job Training (OJT) program focused on exposing students to real-world work environments and actual industry practices. Through this program, students are given the chance to apply the technical skills they&apos;ve developed—whether in programming, troubleshooting, system development, or project management—directly in professional settings.

                The OJT program allows students to work alongside experienced professionals, take part in day-to-day operations, and understand how IT departments function in real organizations. It&apos;s not only about honing technical skills but also about adjusting to workplace expectations, improving communication, collaborating with a team, and learning how to handle responsibilities under real deadlines.

                To document and reflect on this experience, this blog showcases the interns&apos; journey throughout their OJT. It gives a detailed view of how they navigated their tasks, handled challenges, balanced technical work with other responsibilities, and ultimately grew both personally and professionally. Through these entries, readers can see how theoretical knowledge is applied in practice, how the interns adapted to real-world scenarios, and how their experience helped prepare them for future careers in IT.
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Avatar 
                  sx={{ 
                    bgcolor: alpha(theme.palette.primary.main, 0.12),
                    color: theme.palette.primary.main,
                    mr: 2.5,
                    width: 56,
                    height: 56
                  }}
                >
                  <Box
                    component="img"
                    src="grhu.svg"
                    alt="College of Computer Studies"
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain'
                    }}
                  />
                </Avatar>
                <Typography variant="h5" fontWeight="600" color="primary.main">
                  The Facility
                </Typography>
              </Box>
              
              <Typography 
                variant="body1" 
                paragraph
                sx={{ 
                  lineHeight: 1.7,
                  color: alpha(theme.palette.text.primary, 0.9)
                }}
              >
                The OJT Venue, Gubat Rural Health Unit and Birthing Home, plays a crucial role in public healthcare services, offering medical assistance to the local community. In partnership with TLC, the RHU has provided a conducive environment for student trainees to apply their IT skills in a professional setting.
              </Typography>
            </Paper>
          </Grid>
          
          {/* Second Column - Personal Reflection */}
          <Grid item xs={12} md={7}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: { xs: 4, md: 5 }, 
                height: '100%', 
                borderRadius: 4,
                bgcolor: 'background.paper',
                boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 28px rgba(0,0,0,0.08)',
                },
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Subtle background decoration */}
              <Box 
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '150px',
                  height: '150px',
                  opacity: 0.04,
                  background: 'radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0) 70%)',
                  borderRadius: '50%',
                  zIndex: 0
                }}
              />
              
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                  <Avatar 
                    sx={{ 
                      bgcolor: alpha(theme.palette.primary.main, 0.12),
                      color: theme.palette.primary.main,
                      mr: 2.5,
                      width: 56,
                      height: 56
                    }}
                  >
                    <WorkIcon fontSize="medium" />
                  </Avatar>
                  <Typography variant="h5" fontWeight="600" color="primary.main">
                    My Learning Experience
                  </Typography>
                </Box>
                
                <Typography 
                  variant="body1" 
                  paragraph
                  sx={{ 
                    mb: 3,
                    lineHeight: 1.7,
                    color: alpha(theme.palette.text.primary, 0.9)
                  }}
                >
                  My OJT experience at Gubat Rural Health Unit and Birthing Home has been transformative, allowing me to apply my IT knowledge in a practical setting while gaining insights into the role of technology in healthcare. The exposure to real-world challenges has significantly enhanced my technical skills and problem-solving abilities.
                </Typography>
                
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, my: 4 }}>
                  <SkillChip label="Technical Skills" />
                  <SkillChip label="Healthcare IT" />
                  <SkillChip label="Professional Growth" />
                </Box>
                
                <Typography 
                  variant="body1" 
                  paragraph
                  sx={{ 
                    mb: 4,
                    lineHeight: 1.7,
                    color: alpha(theme.palette.text.primary, 0.9)
                  }}
                >
                  The mentorship from professionals has guided my professional growth and helped me understand the importance of applying technology solutions in healthcare settings. I am grateful for this opportunity and look forward to using these experiences to build a successful career in the IT industry.
                </Typography>
                
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Box 
                      sx={{ 
                        display: 'flex',
                        p: 3,
                        borderRadius: 3,
                        bgcolor: alpha(theme.palette.primary.main, 0.05),
                        mb: 2
                      }}
                    >
                      <Avatar 
                        sx={{ 
                          bgcolor: alpha(theme.palette.primary.main, 0.15),
                          color: theme.palette.primary.main,
                          mr: 2,
                          mt: 0.5
                        }}
                      >
                        <PersonIcon />
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle1" fontWeight="600" gutterBottom>
                          Training Supervisor
                        </Typography>
                        <Typography 
                          variant="body2"
                          sx={{ 
                            lineHeight: 1.7,
                            color: alpha(theme.palette.text.primary, 0.9)
                          }}
                        >
                          <strong>Jay-Ar Jarabejo</strong> has been designated to guide and mentor us throughout our OJT journey at Gubat Rural Health Unit and Birthing Home. He ensures that we receive the necessary support, assignments, and feedback to enhance our learning experience.
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  
                  <Grid item xs={12}>
                    <Box 
                      sx={{ 
                        display: 'flex',
                        p: 3,
                        borderRadius: 3,
                        bgcolor: alpha(theme.palette.secondary.main, 0.05)
                      }}
                    >
                      <Avatar 
                        sx={{ 
                          bgcolor: alpha(theme.palette.secondary.main, 0.15),
                          color: theme.palette.secondary.main,
                          mr: 2,
                          mt: 0.5
                        }}
                      >
                        <PersonIcon />
                      </Avatar>
                      <Box>
                        <Typography variant="subtitle1" fontWeight="600" gutterBottom>
                          Faculty Coordinator
                        </Typography>
                        <Typography 
                          variant="body2"
                          sx={{ 
                            lineHeight: 1.7,
                            color: alpha(theme.palette.text.primary, 0.9)
                          }}
                        >
                          <strong>Gil Jamisola Jr.</strong> is responsible for overseeing the overall OJT implementation from the academic side. As the designated OJT coordinator at The Lewis College, he ensures that our training aligns with our academic curriculum and professional development goals.
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
          
          {/* Third Column - Personal Information */}
          <Grid item xs={12}>
            <Paper 
              elevation={0} 
              sx={{ 
                p: { xs: 4, md: 5 }, 
                borderRadius: 4,
                bgcolor: 'background.paper',
                boxShadow: '0 8px 24px rgba(0,0,0,0.05)',
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 12px 28px rgba(0,0,0,0.08)',
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
                <Avatar 
                  sx={{ 
                    bgcolor: alpha(theme.palette.primary.main, 0.12),
                    color: theme.palette.primary.main,
                    mr: 2.5,
                    width: 56,
                    height: 56
                  }}
                >
                  <EventNoteIcon fontSize="medium" />
                </Avatar>
                <Typography variant="h5" fontWeight="600" color="primary.main">
                  Intern&apos;s Information
                </Typography>
              </Box>
              
              <Grid container spacing={4}>
                {/* Main personal details */}
                <Grid item xs={12} md={6}>
                  <Box 
                    sx={{ 
                      p: 3, 
                      borderRadius: 3, 
                      bgcolor: alpha(theme.palette.primary.main, 0.04),
                      height: '100%'
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight="600" color="primary.main" sx={{ mb: 3 }}>
                      Personal Details
                    </Typography>
                    
                    <InfoItem label="Name" value="Ricardo Jr. E. Hermogino" />
                    <InfoItem label="Course" value="Bachelor of Science in Information Technology (BSIT-4)" />
                    <InfoItem label="Address" value="Cogon, Gubat, Sorsogon" />
                  </Box>
                </Grid>
                
                {/* Bio information - restyled */}
                <Grid item xs={12} md={6}>
                  <Box 
                    sx={{ 
                      p: 3, 
                      borderRadius: 3, 
                      bgcolor: alpha(theme.palette.secondary.main, 0.04),
                      height: '100%'
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight="600" color="secondary.main" sx={{ mb: 3 }}>
                      Bio Information
                    </Typography>
                    
                    <Grid container spacing={2}>
                      <Grid item xs={6}>
                        <InfoItem label="Age" value="22" highlight />
                      </Grid>
                      <Grid item xs={6}>
                        <InfoItem label="Sex" value="Male" highlight />
                      </Grid>
                      <Grid item xs={6}>
                        <InfoItem label="Birth Date" value="March 20, 2003" highlight />
                      </Grid>
                      <Grid item xs={6}>
                        <InfoItem label="Birth Place" value="Gubat, Sorsogon" highlight />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
                
                {/* Additional details - in a separate section */}
                <Grid item xs={12}>
                  <Box 
                    sx={{ 
                      p: 3, 
                      borderRadius: 3, 
                      bgcolor: alpha(theme.palette.info.main, 0.04) 
                    }}
                  >
                    <Typography variant="subtitle1" fontWeight="600" color="info.main" sx={{ mb: 3 }}>
                      Additional Information
                    </Typography>
                    
                    <Grid container spacing={2}>
                      <Grid item xs={6} sm={4} md={3}>
                        <InfoItem label="Height" value="165 cm" highlight="info" />
                      </Grid>
                      <Grid item xs={6} sm={4} md={3}>
                        <InfoItem label="Weight" value="57 kg" highlight="info" />
                      </Grid>
                      <Grid item xs={6} sm={4} md={3}>
                        <InfoItem label="Religion" value="Roman Catholic" highlight="info" />
                      </Grid>
                      <Grid item xs={6} sm={4} md={3}>
                        <InfoItem label="Civil Status" value="Single" highlight="info" />
                      </Grid>
                      <Grid item xs={6} sm={4} md={3}>
                        <InfoItem label="Nationality" value="Filipino (Philippines)" highlight="info" />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// Improved InfoItem component with cleaner styling
const InfoItem = ({ label, value, highlight = false }) => {
  const theme = useTheme();
  const colorKey = typeof highlight === 'string' ? highlight : 'primary';
  
  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2.5 }}>
      {highlight ? (
        <Box 
          sx={{ 
            width: 6, 
            height: 6, 
            borderRadius: '50%', 
            bgcolor: `${colorKey}.main`, 
            mt: 1.2,
            mr: 1.5
          }}
        />
      ) : (
        <Box 
          component="span"
          sx={{ 
            display: 'inline-block',
            width: 3, 
            height: 24, 
            bgcolor: alpha(theme.palette.primary.main, 0.5),
            borderRadius: 4,
            mr: 2
          }}
        />
      )}
      <Box>
        <Typography 
          variant="body2" 
          color="text.secondary" 
          sx={{ 
            fontWeight: 500,
            fontSize: '0.85rem',
            mb: 0.5
          }}
        >
          {label}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            fontWeight: highlight ? 500 : 400,
            color: highlight ? `${colorKey}.main` : 'text.primary'
          }}
        >
          {value}
        </Typography>
      </Box>
    </Box>
  );
};

// Improved SkillChip component with enhanced styling
const SkillChip = ({ label }) => {
  const theme = useTheme();
  
  return (
    <Box 
      sx={{ 
        display: 'inline-flex',
        alignItems: 'center',
        px: 2.5,
        py: 1,
        borderRadius: 6,
        bgcolor: alpha(theme.palette.primary.main, 0.1),
        color: theme.palette.primary.main,
        fontSize: '0.875rem',
        fontWeight: 600,
        mb: { xs: 1, md: 0 },
        transition: 'all 0.2s ease',
        '&:hover': {
          bgcolor: alpha(theme.palette.primary.main, 0.15),
          transform: 'translateY(-2px)'
        }
      }}
    >
      {label}
    </Box>
  );
};