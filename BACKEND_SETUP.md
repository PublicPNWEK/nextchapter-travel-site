# Backend Setup & Deployment Guide

This document provides complete instructions for setting up and deploying the Next Chapter Travel backend infrastructure.

## Architecture Overview

The application now features a full-stack architecture:

### Backend Stack
- **Runtime**: Node.js (v16+)
- **Framework**: Express.js
- **Database**: MongoDB (document database for flexible data models)
- **Cache**: Redis (optional, for session and API response caching)
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: Helmet, CORS, Rate Limiting

### Key Features
- ✅ User authentication (JWT-based)
- ✅ Customer account management
- ✅ Booking management system
- ✅ Agent/Admin dashboard
- ✅ Schedule & calendar management
- ✅ Persistent caching with Redis
- ✅ Role-based access control (Customer, Agent, Admin)
- ✅ RESTful API architecture
- ✅ Extensible integration framework

## Prerequisites

Before starting, ensure you have:

1. **Node.js** (v16 or higher) - [Download](https://nodejs.org/)
2. **MongoDB** - [Installation Guide](https://docs.mongodb.com/manual/installation/)
3. **Redis** (optional but recommended) - [Installation Guide](https://redis.io/docs/getting-started/installation/)
4. **Git** - [Download](https://git-scm.com/downloads)

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ksksrbiz-arch/nextchapter-travel-site.git
cd nextchapter-travel-site
```

### 2. Install Dependencies

```bash
npm install
```

This installs:
- `express` - Web framework
- `mongoose` - MongoDB ORM
- `redis` - Redis client
- `bcryptjs` - Password hashing
- `jsonwebtoken` - JWT authentication
- `cors` - Cross-origin resource sharing
- `helmet` - Security headers
- `express-rate-limit` - API rate limiting
- `dotenv` - Environment variables

### 3. Setup MongoDB

#### Option A: Local MongoDB

1. Install MongoDB on your system
2. Start MongoDB service:
   ```bash
   # On macOS with Homebrew
   brew services start mongodb-community

   # On Ubuntu/Debian
   sudo systemctl start mongod

   # On Windows
   net start MongoDB
   ```

3. MongoDB will be available at `mongodb://localhost:27017`

#### Option B: MongoDB Atlas (Cloud)

1. Create free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
4. Whitelist your IP address in Network Access

### 4. Setup Redis (Optional)

#### Option A: Local Redis

```bash
# On macOS with Homebrew
brew install redis
brew services start redis

# On Ubuntu/Debian
sudo apt-get install redis-server
sudo systemctl start redis

# On Windows
# Download from https://github.com/microsoftarchive/redis/releases
```

#### Option B: Redis Cloud

1. Create free account at [Redis Cloud](https://redis.com/try-free/)
2. Create a new database
3. Get your connection details (host, port, password)

**Note**: If Redis is not available, the application will still work but without caching.

### 5. Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` with your configuration:
   ```bash
   # Server Configuration
   NODE_ENV=development
   PORT=5000
   HOST=localhost

   # Database (Local MongoDB)
   MONGODB_URI=mongodb://localhost:27017/nextchapter-travel

   # OR MongoDB Atlas
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/nextchapter-travel

   # Redis (if using)
   REDIS_HOST=localhost
   REDIS_PORT=6379
   REDIS_PASSWORD=

   # Security - CHANGE THESE IN PRODUCTION!
   JWT_SECRET=your-super-secret-jwt-key-min-32-characters
   SESSION_SECRET=your-session-secret-min-32-characters

   # Email Configuration (for future features)
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_EMAIL=your-email@gmail.com
   SMTP_PASSWORD=your-app-password
   ```

3. **IMPORTANT**: Generate secure secrets:
   ```bash
   # Generate random secrets
   node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
   ```

## Running the Application

### Development Mode

```bash
npm run dev
```

This starts the server with nodemon (auto-restart on file changes).

### Production Mode

```bash
npm start
```

The server will be available at: `http://localhost:5000`

## Initial Setup

### 1. Create Admin User

After starting the server, create an admin user by making a POST request:

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Admin",
    "lastName": "User",
    "email": "admin@nextchaptertravel.com",
    "password": "SecurePassword123!",
    "phone": "+1234567890"
  }'
```

Then manually update the user role in MongoDB:

```javascript
// Connect to MongoDB
mongosh

// Use the database
use nextchapter-travel

// Update user to admin role
db.users.updateOne(
  { email: "admin@nextchaptertravel.com" },
  { $set: { role: "admin" } }
)
```

### 2. Access the Dashboard

1. Navigate to `http://localhost:5000/login.html`
2. Login with your admin credentials
3. You'll be redirected to the dashboard at `http://localhost:5000/dashboard.html`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user
- `PUT /api/auth/updatedetails` - Update user details
- `PUT /api/auth/updatepassword` - Update password
- `POST /api/auth/logout` - Logout user

### Bookings
- `GET /api/bookings` - Get all bookings (filtered by role)
- `GET /api/bookings/:id` - Get single booking
- `POST /api/bookings` - Create new booking
- `PUT /api/bookings/:id` - Update booking (Agent/Admin)
- `DELETE /api/bookings/:id` - Delete booking (Admin only)
- `POST /api/bookings/:id/notes` - Add note to booking

### Dashboard (Agent/Admin only)
- `GET /api/dashboard/stats` - Get dashboard statistics
- `GET /api/dashboard/customers` - Get all customers
- `GET /api/dashboard/schedule` - Get schedules
- `POST /api/dashboard/schedule` - Create schedule item
- `PUT /api/dashboard/schedule/:id` - Update schedule
- `DELETE /api/dashboard/schedule/:id` - Delete schedule

### Health Check
- `GET /api/health` - Server health status

## User Roles

### Customer
- Register and manage their own account
- Create and view their own bookings
- Update their profile and preferences

### Agent
- All customer permissions
- View and manage assigned bookings
- Access agent dashboard
- Manage schedule and calendar
- View all customers

### Admin
- All agent permissions
- View and manage all bookings
- Delete bookings
- Access system statistics
- Manage cache

## Caching Strategy

The application uses Redis for caching to improve performance:

### Cached Endpoints
- `GET /api/bookings` - 5 minutes
- `GET /api/dashboard/stats` - 1 minute
- `GET /api/dashboard/customers` - 5 minutes

### Cache Invalidation
Cache is automatically cleared when:
- Bookings are created, updated, or deleted
- User details are updated

### Manual Cache Management
Access Settings in the dashboard to manually clear cache.

## Deployment

### Option 1: Heroku

1. Install Heroku CLI: `npm install -g heroku`

2. Login to Heroku:
   ```bash
   heroku login
   ```

3. Create new Heroku app:
   ```bash
   heroku create nextchapter-travel
   ```

4. Add MongoDB add-on:
   ```bash
   heroku addons:create mongolab:sandbox
   ```

5. Add Redis add-on (optional):
   ```bash
   heroku addons:create heroku-redis:hobby-dev
   ```

6. Set environment variables:
   ```bash
   heroku config:set JWT_SECRET=your-secret-here
   heroku config:set SESSION_SECRET=your-session-secret
   heroku config:set NODE_ENV=production
   ```

7. Deploy:
   ```bash
   git push heroku main
   ```

### Option 2: DigitalOcean App Platform

1. Connect your GitHub repository
2. Configure build settings:
   - Build Command: `npm install`
   - Run Command: `npm start`
3. Add MongoDB and Redis databases
4. Set environment variables in the dashboard
5. Deploy

### Option 3: AWS EC2

1. Launch Ubuntu EC2 instance
2. SSH into instance
3. Install Node.js, MongoDB, Redis:
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs mongodb redis-server
   ```
4. Clone repository and install dependencies
5. Setup systemd service:
   ```bash
   sudo nano /etc/systemd/system/nextchapter.service
   ```
   ```ini
   [Unit]
   Description=Next Chapter Travel Server
   After=network.target

   [Service]
   Type=simple
   User=ubuntu
   WorkingDirectory=/home/ubuntu/nextchapter-travel-site
   ExecStart=/usr/bin/node server.js
   Restart=on-failure

   [Install]
   WantedBy=multi-user.target
   ```
6. Start service:
   ```bash
   sudo systemctl enable nextchapter
   sudo systemctl start nextchapter
   ```

### Option 4: Docker

1. Create `Dockerfile`:
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm install --production
   COPY . .
   EXPOSE 5000
   CMD ["node", "server.js"]
   ```

2. Create `docker-compose.yml`:
   ```yaml
   version: '3.8'
   services:
     app:
       build: .
       ports:
         - "5000:5000"
       environment:
         - NODE_ENV=production
         - MONGODB_URI=mongodb://mongo:27017/nextchapter-travel
         - REDIS_HOST=redis
       depends_on:
         - mongo
         - redis
     
     mongo:
       image: mongo:6
       volumes:
         - mongo-data:/data/db
     
     redis:
       image: redis:7-alpine
   
   volumes:
     mongo-data:
   ```

3. Run:
   ```bash
   docker-compose up -d
   ```

## Security Best Practices

### Production Checklist

- [ ] Change default JWT and session secrets
- [ ] Use strong passwords for admin accounts
- [ ] Enable HTTPS (use Let's Encrypt or Cloudflare)
- [ ] Set `NODE_ENV=production`
- [ ] Configure firewall (only allow 80, 443, 22)
- [ ] Enable MongoDB authentication
- [ ] Set Redis password
- [ ] Configure CORS with specific origins
- [ ] Enable rate limiting
- [ ] Regular security updates: `npm audit fix`
- [ ] Setup backup strategy for MongoDB
- [ ] Monitor server logs
- [ ] Implement SSL/TLS for database connections

### Environment Variables Security

Never commit `.env` file to git! It's already in `.gitignore`.

For production, use environment variable management:
- Heroku: `heroku config:set`
- AWS: AWS Secrets Manager
- DigitalOcean: App Platform environment variables

## Monitoring & Maintenance

### Logs

View server logs:
```bash
# Development
npm run dev

# Production (if using systemd)
sudo journalctl -u nextchapter -f

# Docker
docker-compose logs -f app
```

### Database Backup

MongoDB backup:
```bash
# Create backup
mongodump --uri="mongodb://localhost:27017/nextchapter-travel" --out=/backup

# Restore backup
mongorestore --uri="mongodb://localhost:27017/nextchapter-travel" /backup/nextchapter-travel
```

### Performance Monitoring

Consider adding monitoring tools:
- **PM2** - Process manager with monitoring
- **New Relic** - Application performance monitoring
- **DataDog** - Infrastructure monitoring
- **Sentry** - Error tracking

## Future Enhancements

### Planned Features
- [ ] Email verification and password reset
- [ ] File upload for booking documents
- [ ] Calendar integration (Google Calendar, Outlook)
- [ ] Payment gateway integration (Stripe)
- [ ] Automated email workflows
- [ ] Real-time notifications (WebSocket)
- [ ] Advanced analytics and reporting
- [ ] Mobile app (React Native)
- [ ] Third-party API integrations (booking engines, airlines, hotels)

### Plugin Architecture

The system is designed to support plugins for easy integration:

```javascript
// Example plugin structure
const myPlugin = {
  name: 'stripe-payments',
  version: '1.0.0',
  initialize: (app) => {
    app.post('/api/payments/charge', async (req, res) => {
      // Plugin logic here
    });
  }
};
```

## Troubleshooting

### MongoDB Connection Issues

**Error**: `MongoNetworkError: failed to connect`

**Solution**:
1. Check MongoDB is running: `sudo systemctl status mongod`
2. Verify connection string in `.env`
3. Check firewall settings

### Redis Connection Issues

**Error**: `Redis Client Error: connect ECONNREFUSED`

**Solution**:
1. Check Redis is running: `redis-cli ping` (should return PONG)
2. Verify Redis host/port in `.env`
3. The app will work without Redis (caching disabled)

### Port Already in Use

**Error**: `EADDRINUSE: address already in use`

**Solution**:
```bash
# Find process using port 5000
lsof -i :5000

# Kill the process
kill -9 <PID>
```

### JWT Token Invalid

**Error**: `JsonWebTokenError: invalid token`

**Solution**:
1. Clear browser localStorage
2. Login again
3. Verify JWT_SECRET hasn't changed

## Support & Documentation

- **GitHub Issues**: Report bugs and request features
- **API Documentation**: See `/api/health` for status
- **Contributing**: See CONTRIBUTING.md

## License

ISC - See LICENSE file for details

---

**Last Updated**: March 2026
**Version**: 1.0.0
