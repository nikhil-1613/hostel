const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRoutes = require('./Routes/UserRoutes');
const authRoutes = require('./Routes/authRoutes');
const bookingRoutes = require('./Routes/BookingRoutes');
const girlsController = require('./Controllers/girlsController');
const boysController = require('./Controllers/boysController');
const connectDB = require('./config/databaseConnection');
const AuthController = require('./Controllers/authController');
const userController = require('./Controllers/userController');
const hostelController = require('./Controllers/hostelController');
const gfloorController = require('./Controllers/gfloorController');
const bfloorController = require('./Controllers/bfloorController');
const updateStatus= require('./Controllers/verifyController');
const cors = require('cors');



const app = express();
const PORT = process.env.PORT || 5000;

connectDB();
app.use(bodyParser.json());
app.use(cors());

// Routes for users
app.use('/api/users', userRoutes);
app.get('/api/users', userController.getAllUsers);

// Routes for authentication
app.use('/api/auth', authRoutes);
app.post('/api/auth/signup', AuthController.signup);

//Routes for Checking (Verfiying)
app.post('/api/verify',updateStatus);

// Routes for booking
app.use('/api/booking', bookingRoutes);
//Routes for girls floors
app.get('/api/girls/floors',gfloorController.getAllFloors);
// Routes for girls' rooms
app.get('/api/girls/rooms', girlsController.getAllRooms);
app.get('/api/rooms/:roomNumber', girlsController.getRoomByNumber);
app.post('/api/girls/bookroom', girlsController.bookRoom);
app.post('/api/girls/cancelbooking',girlsController.cancelBooking)




//Routes for biys floors
app.get('/api/boys/floors',bfloorController.getAllFloors);
// Routes for boys' rooms
app.get('/api/boys/rooms', boysController.getAllRooms);
app.post('/api/boys/bookroom', boysController.bookRoom);
app.post('/api/boys/cancelbooking',boysController.cancelBooking)

//Routes for hostel 
app.get('/api/hostels',hostelController.getAllHostels);
app.post('/api/hostels',hostelController.createHostel);
app.put('/api/hostels/:hostelId/update-field', hostelController.updateHostelField);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
