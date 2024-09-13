// server/middleware/setHeaders.js

const setHeaders = (req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS'); // Allowed HTTP methods
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); // Allowed headers
    res.setHeader('X-Powered-By', 'YourAppName'); // Custom header
    next();
  };
  
  module.exports = setHeaders;
  