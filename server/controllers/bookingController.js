const Booking = require('../models/Booking');
const { clearCache } = require('../middleware/cache');

// @desc    Get all bookings (with filters)
// @route   GET /api/bookings
// @access  Private (Agent/Admin)
exports.getBookings = async (req, res) => {
  try {
    let query = {};

    // If customer, only show their bookings
    if (req.user.role === 'customer') {
      query.customer = req.user.id;
    }

    // If agent, show their assigned bookings
    if (req.user.role === 'agent') {
      query.agent = req.user.id;
    }

    // Add filters from query params
    if (req.query.status) {
      query.status = req.query.status;
    }

    if (req.query.tripType) {
      query.tripType = req.query.tripType;
    }

    const bookings = await Booking.find(query)
      .populate('customer', 'firstName lastName email phone')
      .populate('agent', 'firstName lastName email')
      .sort('-createdAt');

    res.status(200).json({
      success: true,
      count: bookings.length,
      bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Get single booking
// @route   GET /api/bookings/:id
// @access  Private
exports.getBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id)
      .populate('customer', 'firstName lastName email phone address emergencyContact')
      .populate('agent', 'firstName lastName email phone')
      .populate('notes.author', 'firstName lastName');

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found',
      });
    }

    // Check authorization
    if (
      req.user.role === 'customer' &&
      booking.customer._id.toString() !== req.user.id
    ) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to access this booking',
      });
    }

    res.status(200).json({
      success: true,
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Create new booking
// @route   POST /api/bookings
// @access  Private
exports.createBooking = async (req, res) => {
  try {
    // Set customer to current user if customer role
    if (req.user.role === 'customer') {
      req.body.customer = req.user.id;
    }

    const booking = await Booking.create(req.body);

    // Clear cache with application prefix
    await clearCache('nct:cache:/api/bookings*');

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Update booking
// @route   PUT /api/bookings/:id
// @access  Private (Agent/Admin)
exports.updateBooking = async (req, res) => {
  try {
    let booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found',
      });
    }

    // Check authorization
    if (
      req.user.role === 'agent' &&
      booking.agent &&
      booking.agent.toString() !== req.user.id
    ) {
      return res.status(403).json({
        success: false,
        message: 'Not authorized to update this booking',
      });
    }

    booking = await Booking.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    // Clear cache with application prefix
    await clearCache('nct:cache:/api/bookings*');

    res.status(200).json({
      success: true,
      message: 'Booking updated successfully',
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Delete booking
// @route   DELETE /api/bookings/:id
// @access  Private (Admin only)
exports.deleteBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found',
      });
    }

    await booking.deleteOne();

    // Clear cache with application prefix
    await clearCache('nct:cache:/api/bookings*');

    res.status(200).json({
      success: true,
      message: 'Booking deleted successfully',
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// @desc    Add note to booking
// @route   POST /api/bookings/:id/notes
// @access  Private (Agent/Admin)
exports.addNote = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        message: 'Booking not found',
      });
    }

    booking.notes.push({
      author: req.user.id,
      content: req.body.content,
    });

    await booking.save();

    res.status(200).json({
      success: true,
      message: 'Note added successfully',
      booking,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
