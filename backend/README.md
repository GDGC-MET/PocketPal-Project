# PocketPal Backend Setup Instructions

## Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud)

## Installation

1. **Navigate to the backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   ```
   
   Edit the `.env` file with your actual values:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/pocketpal
   JWT_SECRET=your-super-secret-jwt-key-here
   JWT_EXPIRE=7d
   FRONTEND_URL=http://localhost:3000
   ```

## Database Setup

1. **Install MongoDB:**
   - Download from [MongoDB](https://www.mongodb.com/try/download/community)
   - Or use MongoDB Atlas (cloud)

2. **Start MongoDB:**
   ```bash
   # Local MongoDB
   mongod
   
   # Or use MongoDB Atlas connection string in .env
   ```

## Running the Backend

1. **Development mode:**
   ```bash
   npm run dev
   ```

2. **Production mode:**
   ```bash
   npm start
   ```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/paypal-login` - Login with PayPal
- `GET /api/auth/me` - Get current user
- `POST /api/auth/logout` - Logout user

### User Management
- `GET /api/user/profile` - Get user profile
- `PUT /api/user/profile` - Update user profile
- `POST /api/user/goals` - Create savings goal
- `PUT /api/user/goals/:id` - Update savings goal
- `DELETE /api/user/goals/:id` - Delete savings goal
- `POST /api/user/subscriptions` - Add subscription
- `DELETE /api/user/subscriptions/:id` - Remove subscription


## Frontend Integration

1. **Update your frontend `.env.local`:**
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

2. **Install axios in your frontend:**
   ```bash
   npm install axios
   ```

3. **Use the auth service endpoints from your frontend app.**

## Testing

1. **Test the health endpoint:**
   ```bash
   curl http://localhost:5000/api/health
   ```

2. **Test user registration:**
   ```bash
   curl -X POST http://localhost:5000/api/auth/register \
     -H "Content-Type: application/json" \
     -d '{"name":"Test User","email":"test@example.com","password":"password123"}'
   ```

## Security Notes

- Never commit your `.env` file to version control
- Use strong JWT secrets in production
- Enable HTTPS in production
- Validate all inputs on both frontend and backend
- Use rate limiting for API endpoints
- Implement proper error handling

## Troubleshooting

1. **MongoDB connection issues:**
   - Ensure MongoDB is running
   - Check connection string in `.env`

2. **PayPal integration issues:**
   - Verify Client ID and Secret are correct
   - Ensure you're using sandbox credentials for testing
   - Check PayPal developer console for any restrictions

3. **CORS issues:**
   - Update `FRONTEND_URL` in `.env` to match your frontend URL
   - Check CORS configuration in `server.js`

## Production Deployment

1. **Environment variables:**
   - Set `NODE_ENV=production`
   - Use production MongoDB URI
   - Use live PayPal credentials
   - Set strong JWT secret

2. **Security:**
   - Enable HTTPS
   - Use environment variables for all secrets
   - Implement proper logging
   - Set up monitoring

3. **Scaling:**
   - Use PM2 for process management
   - Set up load balancing
   - Use Redis for session storage
   - Implement database indexing
