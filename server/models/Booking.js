const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  agent: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  bookingNumber: {
    type: String,
    unique: true,
    required: true,
  },
  tripType: {
    type: String,
    enum: ['disney-world', 'cruise', 'aulani', 'adventures', 'international', 'custom'],
    required: true,
  },
  destination: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  numberOfGuests: {
    adults: {
      type: Number,
      default: 1,
      min: 0,
    },
    children: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  status: {
    type: String,
    enum: ['inquiry', 'quoted', 'pending', 'confirmed', 'in-progress', 'completed', 'cancelled'],
    default: 'inquiry',
  },
  pricing: {
    basePrice: {
      type: Number,
      default: 0,
    },
    taxes: {
      type: Number,
      default: 0,
    },
    fees: {
      type: Number,
      default: 0,
    },
    total: {
      type: Number,
      default: 0,
    },
    currency: {
      type: String,
      default: 'USD',
    },
  },
  payments: [{
    amount: Number,
    date: Date,
    method: String,
    status: {
      type: String,
      enum: ['pending', 'completed', 'refunded'],
    },
    transactionId: String,
  }],
  itinerary: [{
    day: Number,
    date: Date,
    activities: [String],
    notes: String,
  }],
  accommodations: [{
    name: String,
    checkIn: Date,
    checkOut: Date,
    confirmationNumber: String,
  }],
  specialRequests: {
    type: String,
    maxlength: 1000,
  },
  notes: [{
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    content: String,
    createdAt: {
      type: Date,
      default: Date.now,
    },
  }],
  documents: [{
    name: String,
    url: String,
    type: String,
    uploadedAt: {
      type: Date,
      default: Date.now,
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Generate unique booking number
bookingSchema.pre('save', async function (next) {
  if (!this.bookingNumber) {
    const count = await mongoose.model('Booking').countDocuments();
    const date = new Date();
    const year = date.getFullYear().toString().slice(-2);
    const month = String(date.getMonth() + 1).padStart(2, '0');
    this.bookingNumber = `NCT${year}${month}${String(count + 1).padStart(5, '0')}`;
  }
  
  this.updatedAt = Date.now();
  next();
});

// Calculate total price
bookingSchema.methods.calculateTotal = function () {
  this.pricing.total = this.pricing.basePrice + this.pricing.taxes + this.pricing.fees;
  return this.pricing.total;
};

module.exports = mongoose.model('Booking', bookingSchema);
