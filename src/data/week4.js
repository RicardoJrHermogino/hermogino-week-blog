export const week4 = {
    
    id: 4,
    title: "Authentication System",
    category: "4th Week",
    image: "/picture/week_4.jpg",
    date: "January 31, 2025",
    description: "Implemented authentication flows using JWT tokens. Learned about secure user management and authorization strategies.",
    content: `
      <h2>Securing Our Application</h2>
      <p>This week was all about implementing secure authentication and authorization in our full-stack application. Security is a critical aspect of our product, and I was excited to contribute to this important part of the system.</p>
      
      <h3>JWT Authentication Implementation</h3>
      <p>I worked on implementing JSON Web Tokens (JWT) for authentication. This process included:</p>
      <ul>
        <li>Setting up token generation and validation</li>
        <li>Creating middleware for protected routes</li>
        <li>Implementing refresh token mechanisms</li>
        <li>Managing token storage and expiration</li>
        <li>Handling token revocation</li>
      </ul>
      
      <h3>User Management System</h3>
      <p>I helped develop several user management features, including:</p>
      <ul>
        <li>User registration with email verification</li>
        <li>Password reset functionality</li>
        <li>Account settings and profile management</li>
        <li>User roles and permissions</li>
        <li>Multi-factor authentication options</li>
      </ul>
      
      <h3>Authorization Strategies</h3>
      <p>Beyond authentication, I learned about implementing proper authorization across the application:</p>
      <ul>
        <li>Role-based access control (RBAC)</li>
        <li>Attribute-based access control (ABAC)</li>
        <li>Frontend route protection</li>
        <li>API endpoint security</li>
        <li>Data-level security constraints</li>
      </ul>
      
      <h3>Security Best Practices</h3>
      <p>The team emphasized security best practices throughout the development process. I learned about:</p>
      <ul>
        <li>Preventing common vulnerabilities like XSS and CSRF</li>
        <li>Implementing proper input validation</li>
        <li>Secure password hashing and storage</li>
        <li>Rate limiting and brute force protection</li>
        <li>Audit logging for security events</li>
      </ul>
      
      <h3>Looking Ahead</h3>
      <p>Next week, I'll be focusing on database optimization to ensure our application performs well at scale. I'm looking forward to learning about query optimization and efficient data structures.</p>
    `,
    gallery: [
      {
        image: "/picture/week4_auth_flow.jpg",
        caption: "Authentication flow diagram I created"
      },
      {
        image: "/picture/week4_jwt_implementation.jpg",
        caption: "Working on JWT token implementation"
      },
      {
        image: "/picture/week4_security_meeting.jpg",
        caption: "Security review meeting with senior developers"
      },
      {
        image: "/picture/week4_user_management.jpg",
        caption: "Testing the user management interface"
      }
    ]
  };