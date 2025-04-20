const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = 3000;

// Proxy requests to the menu service
app.use('/menu', createProxyMiddleware({
  target: 'http://menu-service:3001',
  changeOrigin: true,
}));

// Proxy requests to the order service
app.use('/orders', createProxyMiddleware({
  target: 'http://order-service:3002',
  changeOrigin: true,
}));

app.listen(port, () => {
  console.log(`API Gateway running on port ${port}`);
}); 