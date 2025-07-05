const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const asyncHandler = require('../utils/asyncHandler');

// Wrapped with asyncHandler to catch errors in async functions
router.post('/register', asyncHandler(authController.register));
router.post('/login', asyncHandler(authController.login));

module.exports = router;
