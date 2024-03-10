const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../Models/UserModel');
const signup = async (req, res) => {
  try {
    console.log(req.body);
    const { username, password } = req.body; // Change from "user" to "username"

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }
    //check whether admn or not
    if (req.body.username === 'admin' && req.body.password === 'Hoat@admin') {
      user.isAdmin = true;
      await user.save();
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the hashed password
    const newUser = new User({ username, password: hashedPassword }); // Change from "user" to "username"
    const savedUser = await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ userId: savedUser._id }, 'your_secret_key');

    res.status(201).json({ user: savedUser.username, token }); // Change from "user" to "username"
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


const login = async (req, res) => {
  try {
    const { user, password } = req.body;

    // Find the user by username
    const existingUser = await User.findOne({ user });
    if (!existingUser) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Compare the provided password with the hashed password in the database
    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: existingUser._id }, 'your_secret_key');

    res.status(200).json({ user: existingUser.user, token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  signup,
  login,
};
