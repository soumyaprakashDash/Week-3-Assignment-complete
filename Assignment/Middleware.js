const express = require('express');
const app = express();

let requestCount = 0;
let totalTime = 0;

// Combined Middleware
app.use((req, res, next) => {
  const start = Date.now(); // Start time for this request

  requestCount++; // Increment request count

  res.on('finish', () => {
    const duration = Date.now() - start; // Time taken for this request
    totalTime += duration;

    const avgTime = totalTime / requestCount;

    console.log(`Request #${requestCount} took ${duration}ms`);
    console.log(`Average Time: ${avgTime.toFixed(2)}ms`);
  });

  next(); // Pass control to next middleware or route
});

// Sample route
app.get('/', (req, res) => {
  res.send('Hello world!');
});

// Route to see stats (optional)
app.get('/start', (req, res) => {
  const avgTime = requestCount ? (totalTime / requestCount).toFixed(2) : 0;
  res.json({
    totalRequests: requestCount,
    averageResponseTime: `${avgTime}ms`
  });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
