export const week2 = {
  id: 2,
  title: "Backend Development Basics",
  category: "2nd Week",
  image: "/picture/week_2.jpg",
  date: "September 09, 2024 - September 13, 2024",
  description: "Began working on backend development. Learned RESTful API design principles and created my first endpoints with Express.js.",
  content: `
    <h2>Diving Into Backend Development</h2>
    <p>This week marked my transition from onboarding to hands-on development work. I was assigned to work on the backend team, focusing on expanding our API capabilities for the upcoming product release.</p>
    
    <h3>Learning RESTful API Design</h3>
    <p>I spent significant time understanding REST principles and best practices. This included:</p>
    <ul>
      <li>Resource-oriented architecture</li>
      <li>Proper HTTP method usage</li>
      <li>Status code implementation</li>
      <li>API versioning strategies</li>
      <li>Authentication and authorization patterns</li>
    </ul>
    
    <h3>First Endpoints with Express.js</h3>
    <p>With guidance from my mentor, I created my first set of API endpoints using Express.js. The process involved:</p>
    <ul>
      <li>Setting up route handlers</li>
      <li>Implementing middleware for request validation</li>
      <li>Connecting to the database using Mongoose</li>
      <li>Handling errors and edge cases</li>
      <li>Writing documentation for the endpoints</li>
    </ul>
    
    <h3>Code Review Experience</h3>
    <p>I submitted my first pull request and received valuable feedback from senior developers. This helped me understand the team's coding standards and expectations. The review process was constructive and educational.</p>
    
    <h3>Challenges and Solutions</h3>
    <p>I faced some challenges with asynchronous operations and error handling. After researching and discussing with teammates, I implemented async/await patterns and created a centralized error handler to improve code quality.</p>
    
    <h3>Looking Ahead</h3>
    <p>Next week, I'll be exploring the frontend framework and learning how to integrate it with the APIs I've built. I'm looking forward to seeing the full-stack development process in action.</p>
  `,
  gallery: [
    {
      image: "/picture/week2_api_design.jpg",
      caption: "Whiteboarding session for API design planning"
    },
    {
      image: "/picture/week2_code.jpg",
      caption: "Working on my first Express.js endpoints"
    },
    {
      image: "/picture/week2_mentor.jpg",
      caption: "Code review session with my mentor"
    },
    {
      image: "/picture/week2_documentation.jpg",
      caption: "API documentation I created using Swagger"
    }
  ]
  };