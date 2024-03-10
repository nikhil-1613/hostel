// userRoutes.js

const express = require('express');
const router = express.Router();
const UserController = require('../Controllers/UserController');

// Create a new user
router.post('/users', UserController.createUser);

// Get all users
router.get('/users', UserController.getAllUsers);

// Get a specific user by ID
router.get('/users/:id', UserController.getUserById);

// Update a user by ID
router.patch('/users/:id', UserController.updateUserById);

// Delete a user by ID
router.delete('/users/:id', UserController.deleteUserById);

module.exports = router;
