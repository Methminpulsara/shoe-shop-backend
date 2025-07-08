const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const { protect } = require('../middlewares/auth.middleware');
const asyncHandler = require('../utils/asyncHandler');

// 🔐 Protected Routes (only logged-in users)
router.post('/', protect, asyncHandler(cartController.addToCart));        
router.get('/', protect, asyncHandler(cartController.getCart));           
router.delete('/:id', protect, asyncHandler(cartController.removeItem));    // ❌ Remove specific cart item

module.exports = router;
