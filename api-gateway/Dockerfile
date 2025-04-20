# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Define the command to run the application
CMD ["npm", "start"]

# Add http-proxy-middleware dependency
RUN npm install http-proxy-middleware

# Use http-proxy-middleware in the application
COPY ./proxy.js ./proxy.js

# Add proxy middleware configuration
COPY ./proxy.js ./proxy.js
RUN echo "const express = require('express');\nconst { createProxyMiddleware } = require('http-proxy-middleware');\n\nconst app = express();\nconst port = 3000;\n\n// Proxy requests to the menu service\napp.use('/menu', createProxyMiddleware({\n  target: 'http://localhost:3001', // Replace with the actual target service URL\n  changeOrigin: true,\n}));\n\n// Add more proxy routes as needed\napp.use('/orders', createProxyMiddleware({\n  target: 'http://localhost:3002',\n  changeOrigin: true,\n}));\n\napp.listen(port, () => {\n  console.log(`API Gateway running on port ${port}`);\n});" >> ./proxy.js