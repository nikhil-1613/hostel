const express = require('express');
const router = express.Router();
const roomController = require('../Controllers/girlsController'); // Adjust the path if needed
const authenticateMiddleware = require('../middlewares/authenticateuser'); // Adjust the path if needed

// Route to book a room
router.post('/bookroom', authenticateMiddleware, roomController.bookRoom);

module.exports = router;
