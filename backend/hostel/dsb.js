const mongoose = require('mongoose');
const BRoom = require('./Models/boysModel');

mongoose.connect('mongodb+srv://admin:admin123@contactcluster.roy4160.mongodb.net/hostel2', { useNewUrlParser: true, useUnifiedTopology: true });

const roomsData = [
  //1st floor starts
  {
    floorNumber: 1,
    roomNumber: 101,
    bedNumber: [1, 2, 3, 4, 5], 
  }, {
    floorNumber: 1,
    roomNumber: 102,
    bedNumber: [1, 2, 3, 4, 5], 
  },
  {
    floorNumber: 1,
    roomNumber: 103,
    bedNumber: [1,2,3,4,5], 
  },
  {
    floorNumber: 1,
    roomNumber: 104,
    bedNumber: [1,2,3,4,5], 
  },
  {
    floorNumber: 1,
    roomNumber: 105,
    bedNumber: [1,2,3,4,5], 
  },
  {
    floorNumber: 1,
    roomNumber: 106,
    bedNumber: [1,2,3,4,5], 
  },
  {
    floorNumber: 1,
    roomNumber: 107,
    bedNumber: [1,2,3,4,5], 
  },
  {
    floorNumber: 1,
    roomNumber: 108,
    bedNumber: [1,2,3,4,5], 
  },
  {
    floorNumber: 1,
    roomNumber: 109,
    bedNumber: [1,2,3,4,5], 
  },
  {
    floorNumber: 1,
    roomNumber: 110,
    bedNumber: [1,2,3,4,5], 
  },
  {
    floorNumber: 1,
    roomNumber: 111,
    bedNumber: [1,2,3,4,5], 
  },
  //1st floor end

  //2nd floor starts
  {
    floorNumber: 2,
    roomNumber: 201,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 2,
    roomNumber: 202,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 2,
    roomNumber: 203,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 2,
    roomNumber: 204,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 2,
    roomNumber: 205,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 2,
    roomNumber: 206,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 2,
    roomNumber: 207,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 2,
    roomNumber: 208,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 2,
    roomNumber: 209,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 2,
    roomNumber: 210,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 2,
    roomNumber: 211,
    bedNumber: [1,2,3,4,5],
  },
  //2nd floor ends

  //3rd floor starts
  {
    floorNumber: 3,
    roomNumber: 301,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 3,
    roomNumber: 302,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 3,
    roomNumber: 303,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 3,
    roomNumber: 304,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 3,
    roomNumber: 305,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 3,
    roomNumber: 306,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 3,
    roomNumber: 307,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 3,
    roomNumber: 308,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 3,
    roomNumber: 309,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 3,
    roomNumber: 310,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 3,
    roomNumber: 311,
    bedNumber: [1,2,3,4,5],
  },
  //3rd floor ends

  //4th floor starts
  {
    floorNumber: 4,
    roomNumber: 401,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 4,
    roomNumber: 402,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 4,
    roomNumber: 403,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 4,
    roomNumber: 404,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 4,
    roomNumber: 405,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 4,
    roomNumber: 406,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 4,
    roomNumber: 407,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 4,
    roomNumber: 408,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 4,
    roomNumber: 409,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 4,
    roomNumber: 410,
    bedNumber: [1,2,3,4,5],
  },
  {
    floorNumber: 4,
    roomNumber: 411,
    bedNumber: [1,2,3,4,5],
  },
 //4th floor starts
];

BRoom.insertMany(roomsData)
  .then(() => {
    console.log('Sample data inserted successfully.');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error inserting sample data:', error);
    mongoose.connection.close();
  });
