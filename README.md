# Cafe Management System

A microservices-based cafe management system built with Node.js, Express, and MongoDB.

## Services

- API Gateway (Port: 3000)
- Menu Service (Port: 3001)
- Order Service (Port: 3002)
- Payment Service (Port: 3003)
- Inventory Service (Port: 3004)
- Customer Service (Port: 3005)
- MongoDB (Port: 27017)
- Mongo Express (Port: 8081)

## Prerequisites

- Docker
- Docker Compose
- Node.js (for local development)

## Getting Started

1. Clone the repository:
```bash
git clone <your-repository-url>
cd cafe-management-system
```

2. Start the services:
```bash
docker compose up
```

3. Access the services:
- API Gateway: http://localhost:3000
- Mongo Express: http://localhost:8081

## API Endpoints

### Health Checks
All services expose a health check endpoint at `/health`

### Menu Service
- GET /menu - Get all menu items
- GET /menu/:id - Get a specific menu item

### Order Service
- POST /orders - Create a new order
- GET /orders/:id - Get order details

### Payment Service
- POST /payments - Process a payment

## Development

To run services locally:

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a .env file in each service directory with required variables.

3. Start MongoDB:
```bash
docker compose up mongodb
```

4. Run services:
```bash
npm start
```

## License

MIT 