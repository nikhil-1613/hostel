

const express = require('express');
const router = express.Router();
const { updateStatus } = require('../Controllers/verifyController'); // Adjust the path based on your project structure

// Define the endpoint for updating status
router.post('/api/verify', updateStatus);

module.exports = router;
