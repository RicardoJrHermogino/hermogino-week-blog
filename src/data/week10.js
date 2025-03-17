export const week10 = {
    id: 10,
    title: "Testing and Deployment",
    category: "6th Week",
    image: "/picture/week_6.jpg",
    date: "February 14, 2025",
    description: "Wrote unit and integration tests for our codebase. Set up CI/CD pipeline and learned about containerization with Docker.",
    content: `
      <h2>Quality Assurance and Deployment</h2>
      <p>In my final week, I focused on ensuring code quality through testing and streamlining the deployment process. These skills are crucial for delivering reliable software and maintaining a sustainable development workflow.</p>
      
      <h3>Test-Driven Development</h3>
      <p>I embraced test-driven development practices and wrote various types of tests:</p>
      <ul>
        <li>Unit tests for individual functions and components</li>
        <li>Integration tests for API endpoints</li>
        <li>End-to-end tests for critical user flows</li>
        <li>Performance tests for database operations</li>
        <li>Security tests for authentication flows</li>
      </ul>
      
      <h3>Testing Frameworks and Tools</h3>
      <p>I gained experience with several testing frameworks and tools:</p>
      <ul>
        <li>Jest for JavaScript unit testing</li>
        <li>React Testing Library for component testing</li>
        <li>Supertest for API testing</li>
        <li>Cypress for end-to-end testing</li>
        <li>JMeter for performance testing</li>
      </ul>
      
      <h3>Containerization with Docker</h3>
      <p>I learned how to containerize our application using Docker:</p>
      <ul>
        <li>Creating optimized Dockerfiles</li>
        <li>Setting up multi-stage builds</li>
        <li>Configuring Docker Compose for local development</li>
        <li>Managing environment variables securely</li>
        <li>Implementing volume mounts for persistent data</li>
      </ul>
      
      <h3>CI/CD Pipeline Implementation</h3>
      <p>I helped set up a continuous integration and deployment pipeline:</p>
      <ul>
        <li>Configuring GitHub Actions workflows</li>
        <li>Implementing automated testing on pull requests</li>
        <li>Setting up code quality checks with ESLint and Prettier</li>
        <li>Creating deployment stages (development, staging, production)</li>
        <li>Implementing rollback strategies</li>
      </ul>
      
      <h3>Reflection on My Internship Journey</h3>
      <p>As I conclude my six-week internship, I'm grateful for the comprehensive experience I've gained. From backend development to frontend frameworks, from security to performance optimization, and finally to testing and deployment, I've had the opportunity to work on all aspects of modern web development.</p>
      
      <p>I want to thank the entire team for their support, guidance, and patience throughout this journey. I've grown significantly as a developer and look forward to applying these skills in my future endeavors.</p>
    `,
    gallery: [
      {
        image: "/picture/week6_unit_testing.jpg",
        caption: "Writing unit tests for backend components"
      },
      {
        image: "/picture/week6_docker.jpg",
        caption: "Working on Docker containerization"
      },
      {
        image: "/picture/week6_ci_cd.jpg",
        caption: "Setting up CI/CD pipeline with GitHub Actions"
      },
      {
        image: "/picture/week6_final_presentation.jpg",
        caption: "Giving my final presentation to the team"
      }
    ]
  };