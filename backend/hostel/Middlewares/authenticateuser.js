// authenticateUser.js

const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');

const authenticateUser = async (req, res, next) => {
  // Get the token from the request headers
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized. Token not provided.' });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, 'your_secret_key');

    // Find the user based on the decoded user ID
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: 'Unauthorized. Invalid user.' });
    }

    // Set the authenticated user in the request object
    req.user = user;
    next(); // Continue to the next middleware or route handler
  } catch (error) {
    console.error('JWT verification error:', error.message);
    return res.status(401).json({ message: 'Unauthorized. Invalid token.' });
  }
};

module.exports = authenticateUser;
