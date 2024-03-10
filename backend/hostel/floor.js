const mongoose = require('mongoose');
const Gfloors = require('./Models/floorModel');

mongoose.connect('mongodb+srv://admin:admin123@contactcluster.roy4160.mongodb.net/hostel2');

const floorsdata = [
  {
    floorNumber:0,
    totalBeds:106,
    availableBeds:106
  },
  {
    floorNumber:1,
    totalBeds:106,
    availableBeds:106
  },
  {
    floorNumber:2,
    totalBeds:106,
    availableBeds:106
  },
  {
    floorNumber:3,
    totalBeds:106,
    availableBeds:106
  },
  {
    floorNumber:4,
    totalBeds:106,
    availableBeds:106
  },
]
Gfloors.insertMany(floorsdata)
  .then(() => {
    console.log('Sample data inserted successfully.');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error inserting sample data:', error);
    mongoose.connection.close();
  });