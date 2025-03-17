export const week5 = {
    id: 5,
    title: "Database Optimization",
    category: "5th Week",
    image: "/picture/week_5.jpg",
    date: "February 7, 2025",
    description: "Focused on database performance. Learned about indexing, query optimization, and implementing efficient data structures.",
    content: `
      <h2>Optimizing Database Performance</h2>
      <p>This week, I delved into the world of database optimization. As our application grows, ensuring efficient data access and storage becomes increasingly important. I worked closely with our database specialist to learn performance tuning techniques.</p>
      
      <h3>Database Indexing Strategies</h3>
      <p>I learned about the importance of proper indexing and implemented several improvements:</p>
      <ul>
        <li>Creating single-field and composite indexes</li>
        <li>Understanding index types (B-tree, hash, etc.)</li>
        <li>Analyzing index usage with EXPLAIN plans</li>
        <li>Avoiding index bloat and over-indexing</li>
        <li>Implementing partial and filtered indexes</li>
      </ul>
      
      <h3>Query Optimization Techniques</h3>
      <p>I reviewed and optimized several critical queries in our application:</p>
      <ul>
        <li>Rewriting inefficient SQL queries</li>
        <li>Implementing pagination for large result sets</li>
        <li>Using appropriate JOIN types</li>
        <li>Minimizing subqueries and using CTEs</li>
        <li>Optimizing aggregate functions</li>
      </ul>
      
      <h3>Efficient Data Structures</h3>
      <p>I implemented several data structure improvements to enhance performance:</p>
      <ul>
        <li>Denormalization for read-heavy operations</li>
        <li>Using JSON/JSONB for flexible schemas</li>
        <li>Implementing caching strategies</li>
        <li>Creating materialized views for complex reports</li>
        <li>Using array fields for one-to-many relationships</li>
      </ul>
      
      <h3>Performance Monitoring</h3>
      <p>I also learned about tools and techniques for ongoing performance monitoring:</p>
      <ul>
        <li>Setting up database metrics and alerts</li>
        <li>Using slow query logs for identifying bottlenecks</li>
        <li>Implementing connection pooling</li>
        <li>Monitoring database resource usage</li>
        <li>Creating performance benchmarks</li>
      </ul>
      
      <h3>Looking Ahead</h3>
      <p>In the final week of my internship, I'll be focusing on testing and deployment. I'm excited to learn about quality assurance practices and modern deployment strategies.</p>
    `,
    gallery: [
      {
        image: "/picture/week5_db_indexing.jpg",
        caption: "Working on database indexing strategy"
      },
      {
        image: "/picture/week5_query_optimization.jpg",
        caption: "Query optimization session with the database specialist"
      },
      {
        image: "/picture/week5_performance_testing.jpg",
        caption: "Running performance tests after optimizations"
      },
      {
        image: "/picture/week5_monitoring_setup.jpg",
        caption: "Setting up database performance monitoring dashboards"
      }
    ]
  };