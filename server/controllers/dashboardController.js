const Schedule = require('../models/Schedule');
const Booking = require('../models/Booking');
const User = require('../models/User');

// @desc    Get dashboard statistics
// @route   GET /api/dashboard/stats
// @access  Private (Agent/Admin)
exports.getDashboardStats = async (req, res) => {
  try {
    const agentId = req.user.role === 'agent' ? req.user.id : null;

    // Get booking statistics
    const bookingQuery = agentId ? { agent: agentId } : {};
    
    const totalBookings = await Booking.countDocuments(bookingQuery);
    const pendingBookings = await Booking.countDocuments({ ...bookingQuery, status: 'pending' });
    const confirmedBookings = await Booking.countDocuments({ ...bookingQuery, status: 'confirmed' });
    const completedBookings = await Booking.countDocuments({ ...bookingQuery, status: 'completed' });

    // Get customer count
    const totalCustomers = await User.countDocuments({ role: 'customer' });

    // Get upcoming schedule
    const scheduleQuery = agentId ? { agent: agentId } : {};
    const upcomingSchedule = await Schedule.find({
      ...scheduleQuery,
      startTime: { $gte: new Date() },
      status: 'scheduled',
    })
      .sort('startTime')
      .limit(5)
      .populate('customer', 'firstName lastName email');

    // Get recent bookings
    const recentBookings = await Booking.find(bookingQuery)
      .sort('-createdAt')
      .limit(5)
      .populate('customer', 'firstName lastName email');

    // Calculate revenue (if admin)
    let totalRevenue = 0;
    if (req.user.role === 'admin') {
      const bookings = await Booking.find({ status: { $in: ['confirmed', 'completed'] } });
      totalRevenue = bookings.reduce((sum, booking) => sum + (booking.pricing.total || 0), 0);
    }

    res.status(200).json({
      success: true,
      stats: {
        bookings: {
          total: totalBookings,
          pending: pendingBookings,
          confirmed: confirmedBookings,
          completed: completedBookings,
        },
        customers: totalCustomers,
        revenue: totalRevenue,
        upcomingSchedule,
        recentBookings,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get all schedules
// @route   GET /api/dashboard/schedule
// @access  Private (Agent/Admin)
exports.getSchedules = async (req, res) => {
  try {
    const query = req.user.role === 'agent' ? { agent: req.user.id } : {};

    // Filter by date range if provided
    if (req.query.startDate || req.query.endDate) {
      query.startTime = {};
      if (req.query.startDate) {
        query.startTime.$gte = new Date(req.query.startDate);
      }
      if (req.query.endDate) {
        query.startTime.$lte = new Date(req.query.endDate);
      }
    }

    const schedules = await Schedule.find(query)
      .populate('customer', 'firstName lastName email phone')
      .populate('booking', 'bookingNumber destination')
      .sort('startTime');

    res.status(200).json({
      success: true,
      count: schedules.length,
      schedules,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Create schedule item
// @route   POST /api/dashboard/schedule
// @access  Private (Agent/Admin)
exports.createSchedule = async (req, res) => {
  try {
    // Set agent to current user if agent role
    if (req.user.role === 'agent') {
      req.body.agent = req.user.id;
    }

    const schedule = await Schedule.create(req.body);

    res.status(201).json({
      success: true,
      message: 'Schedule created successfully',
      schedule,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update schedule item
// @route   PUT /api/dashboard/schedule/:id
// @access  Private (Agent/Admin)
exports.updateSchedule = async (req, res) => {
  try {
    let schedule = await Schedule.findById(req.params.id);

    if (!schedule) {
      return res.status(404).json({
        success: false,
        message: 'Schedule not found',
      });
    }

    // Check authorization
    if (
      req.user.role === 'agent' &&
      schedule.agent.toString() !== req.user.id
    ) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this schedule',
      });
    }

    schedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    res.status(200).json({
      success: true,
      message: 'Schedule updated successfully',
      schedule,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Delete schedule item
// @route   DELETE /api/dashboard/schedule/:id
// @access  Private (Agent/Admin)
exports.deleteSchedule = async (req, res) => {
  try {
    const schedule = await Schedule.findById(req.params.id);

    if (!schedule) {
      return res.status(404).json({
        success: false,
        message: 'Schedule not found',
      });
    }

    // Check authorization
    if (
      req.user.role === 'agent' &&
      schedule.agent.toString() !== req.user.id
    ) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to delete this schedule',
      });
    }

    await schedule.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Schedule deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get all customers
// @route   GET /api/dashboard/customers
// @access  Private (Agent/Admin)
exports.getCustomers = async (req, res) => {
  try {
    const customers = await User.find({ role: 'customer' })
      .select('-password')
      .sort('-createdAt');

    res.status(200).json({
      success: true,
      count: customers.length,
      customers,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
