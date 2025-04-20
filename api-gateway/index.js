const express = require('express');
const dotenv = require('dotenv');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = process.env.PORT || 3000;

dotenv.config();
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK' });
});

// Proxy requests to the menu service
app.use('/api/menu', createProxyMiddleware({
  target: process.env.MENU_SERVICE_URL,
  pathRewrite: {
    '^/api/menu': '/'
  },
  changeOrigin: true,
}));

// Proxy requests to the order service
app.use('/api/orders', createProxyMiddleware({
  target: process.env.ORDER_SERVICE_URL,
  pathRewrite: {
    '^/api/orders': '/'
  },
  changeOrigin: true,
}));

// Proxy requests to the payment service
app.use('/api/payments', createProxyMiddleware({
  target: process.env.PAYMENT_SERVICE_URL,
  pathRewrite: {
    '^/api/payments': '/'
  },
  changeOrigin: true,
}));

// Proxy requests to the inventory service
app.use('/api/inventory', createProxyMiddleware({
  target: process.env.INVENTORY_SERVICE_URL,
  pathRewrite: {
    '^/api/inventory': '/'
  },
  changeOrigin: true,
}));

// Proxy requests to the customer service
app.use('/api/customers', createProxyMiddleware({
  target: process.env.CUSTOMER_SERVICE_URL,
  pathRewrite: {
    '^/api/customers': '/'
  },
  changeOrigin: true,
}));

app.listen(port, () => {
  console.log(`API Gateway running on port ${port}`);
});