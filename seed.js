/**
 * Database Seed Script
 * Creates sample data for testing and development
 */

require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./server/models/User');
const Booking = require('./server/models/Booking');
const Schedule = require('./server/models/Schedule');

// Connect to database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB Connected');
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

// Sample data
const sampleUsers = [
  {
    firstName: 'Admin',
    lastName: 'User',
    email: 'admin@nextchaptertravel.com',
    password: 'Admin123!',
    phone: '+1234567890',
    role: 'admin',
    isEmailVerified: true,
  },
  {
    firstName: 'Jane',
    lastName: 'Agent',
    email: 'agent@nextchaptertravel.com',
    password: 'Agent123!',
    phone: '+1234567891',
    role: 'agent',
    isEmailVerified: true,
  },
  {
    firstName: 'John',
    lastName: 'Customer',
    email: 'customer@example.com',
    password: 'Customer123!',
    phone: '+1234567892',
    role: 'customer',
    isEmailVerified: true,
    preferences: {
      newsletter: true,
      notifications: true,
      travelPreferences: {
        destinations: ['Orlando', 'Hawaii'],
        budgetRange: '$5000-$10000',
        travelStyle: 'Luxury Family',
      },
    },
  },
  {
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.j@example.com',
    password: 'Sarah123!',
    phone: '+1234567893',
    role: 'customer',
    isEmailVerified: true,
  },
  {
    firstName: 'Michael',
    lastName: 'Brown',
    email: 'michael.b@example.com',
    password: 'Michael123!',
    phone: '+1234567894',
    role: 'customer',
    isEmailVerified: false,
  },
];

// Seed database
const seedDatabase = async () => {
  try {
    // Clear existing data
    console.log('🗑️  Clearing existing data...');
    await User.deleteMany({});
    await Booking.deleteMany({});
    await Schedule.deleteMany({});

    // Create users
    console.log('👥 Creating users...');
    const users = await User.create(sampleUsers);
    console.log(`✅ Created ${users.length} users`);

    // Get user IDs
    const admin = users.find(u => u.role === 'admin');
    const agent = users.find(u => u.role === 'agent');
    const customers = users.filter(u => u.role === 'customer');

    // Create sample bookings
    console.log('📅 Creating bookings...');
    const sampleBookings = [
      {
        customer: customers[0]._id,
        agent: agent._id,
        tripType: 'disney-world',
        destination: 'Orlando, Florida',
        startDate: new Date('2026-07-15'),
        endDate: new Date('2026-07-22'),
        numberOfGuests: { adults: 2, children: 2 },
        status: 'confirmed',
        pricing: {
          basePrice: 4500,
          taxes: 400,
          fees: 100,
          total: 5000,
        },
        specialRequests: 'Celebrating 10th anniversary',
      },
      {
        customer: customers[1]._id,
        agent: agent._id,
        tripType: 'cruise',
        destination: 'Caribbean Cruise',
        startDate: new Date('2026-08-10'),
        endDate: new Date('2026-08-17'),
        numberOfGuests: { adults: 4, children: 0 },
        status: 'pending',
        pricing: {
          basePrice: 6000,
          taxes: 500,
          fees: 150,
          total: 6650,
        },
        specialRequests: 'Prefer balcony cabin',
      },
      {
        customer: customers[0]._id,
        tripType: 'aulani',
        destination: 'Aulani Resort, Hawaii',
        startDate: new Date('2026-12-20'),
        endDate: new Date('2026-12-27'),
        numberOfGuests: { adults: 2, children: 1 },
        status: 'inquiry',
        specialRequests: 'Looking for ocean view room',
      },
      {
        customer: customers[2]._id,
        agent: agent._id,
        tripType: 'international',
        destination: 'Disneyland Paris',
        startDate: new Date('2026-09-05'),
        endDate: new Date('2026-09-12'),
        numberOfGuests: { adults: 2, children: 3 },
        status: 'confirmed',
        pricing: {
          basePrice: 7500,
          taxes: 650,
          fees: 200,
          total: 8350,
        },
      },
    ];

    const bookings = await Booking.create(sampleBookings);
    console.log(`✅ Created ${bookings.length} bookings`);

    // Create sample schedule items
    console.log('🗓️  Creating schedule items...');
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    const nextWeek = new Date(today);
    nextWeek.setDate(nextWeek.getDate() + 7);

    const sampleSchedule = [
      {
        agent: agent._id,
        title: 'Client Meeting - John Customer',
        description: 'Discuss Disney World package details',
        type: 'appointment',
        startTime: tomorrow.setHours(14, 0, 0),
        endTime: tomorrow.setHours(15, 0, 0),
        customer: customers[0]._id,
        booking: bookings[0]._id,
        status: 'scheduled',
        priority: 'high',
      },
      {
        agent: agent._id,
        title: 'Follow-up: Sarah Johnson',
        description: 'Check on cruise booking preferences',
        type: 'follow-up',
        startTime: nextWeek.setHours(10, 0, 0),
        endTime: nextWeek.setHours(10, 30, 0),
        customer: customers[1]._id,
        status: 'scheduled',
        priority: 'medium',
      },
      {
        agent: agent._id,
        title: 'Complete booking documentation',
        description: 'Finalize all documents for confirmed bookings',
        type: 'task',
        startTime: tomorrow.setHours(9, 0, 0),
        endTime: tomorrow.setHours(11, 0, 0),
        status: 'scheduled',
        priority: 'high',
      },
    ];

    const schedules = await Schedule.create(sampleSchedule);
    console.log(`✅ Created ${schedules.length} schedule items`);

    // Display login credentials
    console.log('\n╔═══════════════════════════════════════════╗');
    console.log('║         Sample Login Credentials          ║');
    console.log('╚═══════════════════════════════════════════╝\n');
    
    console.log('👤 Admin Account:');
    console.log('   Email: admin@nextchaptertravel.com');
    console.log('   Password: Admin123!');
    console.log('');
    
    console.log('👤 Agent Account:');
    console.log('   Email: agent@nextchaptertravel.com');
    console.log('   Password: Agent123!');
    console.log('');
    
    console.log('👤 Customer Account:');
    console.log('   Email: customer@example.com');
    console.log('   Password: Customer123!');
    console.log('');

    console.log('✅ Database seeded successfully!\n');
    
  } catch (error) {
    console.error('❌ Seed Error:', error.message);
    throw error;
  }
};

// Run seed
const run = async () => {
  await connectDB();
  await seedDatabase();
  await mongoose.connection.close();
  console.log('👋 Database connection closed');
  process.exit(0);
};

run();
