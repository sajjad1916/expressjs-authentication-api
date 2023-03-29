const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');


// Public Routes
router.post('/login', UserController.userLogin)
router.post('/register', UserController.registerUser)

module.exports = router; 