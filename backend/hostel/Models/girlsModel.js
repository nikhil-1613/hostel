const mongoose = require('mongoose');

const girlsSchema = new mongoose.Schema({
  floorNumber: {
    type: Number,
    required: true,
  },
  roomNumber: {
    type: Number,
    required: true,
  },
  bedNumber: {
    type: [Number],
    required: true,
    validate: {
      validator: function (value) {
        return value.length === 6;
      },
      message: 'Bed number array must have exactly 6 elements.',
    },
  },
  bookedBy: {
    type: [String],
    default: [null, null, null, null, null, null],
  },
  status: {
    type: [String],
    default: ['available', 'available', 'available', 'available', 'available', 'available'],
  },
  adminId: {
    type: [String],
    default: ['available', 'available', 'available', 'available', 'available', 'available'],
  },
});

const GRoom = mongoose.model('GRoom', girlsSchema);

module.exports = GRoom;
