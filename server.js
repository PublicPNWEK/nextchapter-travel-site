require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const connectDB = require('./server/config/database');
const { connectRedis } = require('./server/config/redis');
const { errorHandler, notFound } = require('./server/middleware/error');
const path = require('path');

// Initialize Express app
const app = express();

// Connect to Database
connectDB();

// Connect to Redis (optional - won't fail if Redis is unavailable)
connectRedis().catch(err => {
  console.warn('Redis not available, caching will be disabled:', err.message);
});

// Security middleware
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      imgSrc: ["'self'", "data:", "blob:"],
      fontSrc: ["'self'", "https://fonts.gstatic.com"],
      connectSrc: ["'self'"],
      mediaSrc: ["'self'"],
    },
  },
}));

// CORS configuration
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:3000',
  credentials: true,
}));

// Rate limiting
const limiter = rateLimit({
  windowMs: (process.env.RATE_LIMIT_WINDOW || 15) * 60 * 1000,
  max: process.env.RATE_LIMIT_MAX || 100,
  message: 'Too many requests from this IP, please try again later.',
});
app.use('/api/', limiter);

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/videos', express.static(path.join(__dirname, 'videos')));
app.use('/nextchapter', express.static(path.join(__dirname, 'nextchapter')));

// API Routes
app.use('/api/auth', require('./server/routes/auth'));
app.use('/api/bookings', require('./server/routes/bookings'));
app.use('/api/dashboard', require('./server/routes/dashboard'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

// Serve frontend HTML pages for main routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/trips', (req, res) => {
  res.sendFile(path.join(__dirname, 'trips.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/testimonials', (req, res) => {
  res.sendFile(path.join(__dirname, 'testimonials.html'));
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// NextChapter routes
app.get('/nextchapter', (req, res) => {
  res.sendFile(path.join(__dirname, 'nextchapter', 'index.html'));
});

app.get('/nextchapter/:page', (req, res) => {
  const page = req.params.page;
  const allowedPages = ['wdw', 'cruise', 'aulani', 'adventures', 'international', 'contact'];
  
  if (allowedPages.includes(page)) {
    res.sendFile(path.join(__dirname, 'nextchapter', `${page}.html`));
  } else {
    res.status(404).sendFile(path.join(__dirname, 'nextchapter', 'index.html'));
  }
});

// Error handlers (must be last)
app.use(notFound);
app.use(errorHandler);

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
  console.log(`
  ╔═══════════════════════════════════════════╗
  ║   Next Chapter Travel - Server Running   ║
  ╠═══════════════════════════════════════════╣
  ║   Environment: ${process.env.NODE_ENV || 'development'}
  ║   Port: ${PORT}
  ║   URL: http://localhost:${PORT}
  ╚═══════════════════════════════════════════╝
  `);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err) => {
  console.error(`Unhandled Rejection: ${err.message}`);
  server.close(() => process.exit(1));
});

module.exports = app;
