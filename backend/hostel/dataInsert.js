const mongoose = require('mongoose');
const GRoom = require('./Models/girlsModel');

mongoose.connect('mongodb+srv://admin:admin123@contactcluster.roy4160.mongodb.net/hostel2', { useNewUrlParser: true, useUnifiedTopology: true });

const roomsData = [
  // 0th floor starts
  {
    floorNumber: 0,
    roomNumber: 1,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  }, {
    floorNumber: 0,
    roomNumber: 2,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 0,
    roomNumber: 3,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 0,
    roomNumber: 4,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 0,
    roomNumber: 5,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 0,
    roomNumber: 6,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 0,
    roomNumber: 7,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 0,
    roomNumber: 8,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 0,
    roomNumber: 9,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 0,
    roomNumber: 10,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 0,
    roomNumber: 11,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 0,
    roomNumber: 12,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 0,
    roomNumber: 13,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 0,
    roomNumber: 14,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 0,
    roomNumber: 15,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 0,
    roomNumber: 16,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 0,
    roomNumber: 17,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 0,
    roomNumber: 18,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 0,
    roomNumber: 19,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 0,
    roomNumber: 20,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 0,
    roomNumber: 21,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  //0th floor ends 
  //1st floor starts
  {
    floorNumber: 1,
    roomNumber: 101,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  }, {
    floorNumber: 1,
    roomNumber: 102,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 1,
    roomNumber: 103,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 1,
    roomNumber: 104,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 1,
    roomNumber: 105,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 1,
    roomNumber: 106,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 1,
    roomNumber: 107,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 1,
    roomNumber: 108,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 1,
    roomNumber: 109,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 1,
    roomNumber: 110,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 1,
    roomNumber: 111,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 1,
    roomNumber: 112,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 1,
    roomNumber: 113,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 1,
    roomNumber: 114,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 1,
    roomNumber: 115,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 1,
    roomNumber: 116,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 1,
    roomNumber: 117,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 1,
    roomNumber: 118,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 1,
    roomNumber: 119,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 1,
    roomNumber: 120,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 1,
    roomNumber: 121,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  //1st floor ends
  //2nd floor starts
  {
    floorNumber: 2,
     roomNumber: 201,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   }, {
    floorNumber: 2,
     roomNumber: 202,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   },
   {
    floorNumber: 2,
     roomNumber: 203,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   },
   {
    floorNumber: 2,
     roomNumber: 204,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   },
   {
    floorNumber: 2,
     roomNumber: 205,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   },
   {
    floorNumber: 2,
     roomNumber: 206,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   },
   {
    floorNumber: 2,
     roomNumber: 207,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   },
   {
    floorNumber: 2,
     roomNumber: 208,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   },
   {
    floorNumber: 2,
     roomNumber: 209,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   },
   {
    floorNumber: 2,
     roomNumber: 210,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   },
   {
    floorNumber: 2,
     roomNumber: 211,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   },
   {
    floorNumber: 2,
     roomNumber: 212,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   },
   {
    floorNumber: 2,
     roomNumber: 213,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   },
   {
    floorNumber: 2,
     roomNumber: 214,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   },
   {
    floorNumber: 2,
     roomNumber: 215,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   },
   {
    floorNumber: 2,
     roomNumber: 216,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   },
   {
    floorNumber: 2,
     roomNumber: 217,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   },
   {
    floorNumber: 2,
     roomNumber: 218,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   },
   {
    floorNumber: 2,
     roomNumber: 219,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   },
   {
    floorNumber: 2,
     roomNumber: 220,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   },
   {
    floorNumber: 2,
     roomNumber: 221,
     bedNumber: [1, 2, 3, 4, 5, 6], 
   },
  //2nd floor ends
  //3rd floor starts
  {
    floorNumber: 3,
      roomNumber: 301,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    }, {
    floorNumber: 3,
      roomNumber: 302,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    },
    {
    floorNumber: 3,
      roomNumber: 303,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    },
    {
    floorNumber: 3,
      roomNumber: 304,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    },
    {
    floorNumber: 3,
      roomNumber: 305,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    },
    {
    floorNumber: 3,
      roomNumber: 306,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    },
    {
    floorNumber: 3,
      roomNumber: 307,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    },
    {
    floorNumber: 3,
      roomNumber: 308,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    },
    {
    floorNumber: 3,
      roomNumber: 309,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    },
    {
    floorNumber: 3,
      roomNumber: 310,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    },
    {
    floorNumber: 3,
      roomNumber: 311,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    },
    {
    floorNumber: 3,
      roomNumber: 312,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    },
    {
    floorNumber: 3,
      roomNumber: 313,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    },
    {
    floorNumber: 3,
      roomNumber: 314,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    },
    {
    floorNumber: 3,
      roomNumber: 315,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    },
    {
    floorNumber: 3,
      roomNumber: 316,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    },
    {
    floorNumber: 3,
      roomNumber: 317,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    },
    {
    floorNumber: 3,
      roomNumber: 318,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    },
    {
    floorNumber: 3,
      roomNumber: 319,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    },
    {
    floorNumber: 3,
      roomNumber: 320,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    },
    {
    floorNumber: 3,
      roomNumber: 321,
      bedNumber: [1, 2, 3, 4, 5, 6], 
    },
  //3rd floor ends
  //4st floor starts
  {
    floorNumber: 4,
    roomNumber: 401,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  }, {
    floorNumber: 4,
    roomNumber: 402,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 4,
    roomNumber: 403,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 4,
    roomNumber: 404,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 4,
    roomNumber: 405,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 4,
    roomNumber: 406,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 4,
    roomNumber: 407,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 4,
    roomNumber: 408,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 4,
    roomNumber: 409,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 4,
    roomNumber: 410,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 4,
    roomNumber: 411,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 4,
    roomNumber: 412,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 4,
    roomNumber: 413,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 4,
    roomNumber: 414,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 4,
    roomNumber: 415,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 4,
    roomNumber: 416,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 4,
    roomNumber: 417,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 4,
    roomNumber: 418,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 4,
    roomNumber: 419,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 4,
    roomNumber: 420,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  {
    floorNumber: 4,
    roomNumber: 421,
    bedNumber: [1, 2, 3, 4, 5, 6], 
  },
  //4th floor end

 
];

GRoom.insertMany(roomsData)
  .then(() => {
    console.log('Sample data inserted successfully.');
    mongoose.connection.close();
  })
  .catch((error) => {
    console.error('Error inserting sample data:', error);
    mongoose.connection.close();
  });
