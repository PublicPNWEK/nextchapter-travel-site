const express = require('express');
const router = express.Router();
const {
  getBookings,
  getBooking,
  createBooking,
  updateBooking,
  deleteBooking,
  addNote,
} = require('../controllers/bookingController');
const { protect, authorize } = require('../middleware/auth');
const { cache } = require('../middleware/cache');

// All routes require authentication
router.use(protect);

router
  .route('/')
  .get(cache(300), getBookings)
  .post(createBooking);

router
  .route('/:id')
  .get(getBooking)
  .put(authorize('agent', 'admin'), updateBooking)
  .delete(authorize('admin'), deleteBooking);

router.post('/:id/notes', authorize('agent', 'admin'), addNote);

module.exports = router;
