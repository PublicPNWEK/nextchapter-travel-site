const express = require('express');
const router = express.Router();
const {
  getDashboardStats,
  getSchedules,
  createSchedule,
  updateSchedule,
  deleteSchedule,
  getCustomers,
} = require('../controllers/dashboardController');
const { protect, authorize } = require('../middleware/auth');
const { cache } = require('../middleware/cache');

// All routes require authentication and agent/admin role
router.use(protect);
router.use(authorize('agent', 'admin'));

router.get('/stats', cache(60), getDashboardStats);
router.get('/customers', cache(300), getCustomers);

router
  .route('/schedule')
  .get(getSchedules)
  .post(createSchedule);

router
  .route('/schedule/:id')
  .put(updateSchedule)
  .delete(deleteSchedule);

module.exports = router;
