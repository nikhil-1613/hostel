

const mongoose = require('mongoose');

const floorSchema = new mongoose.Schema({
  floorNumber: {
    type: Number,
    required: true,
  },
  totalBeds: {
    type: Number,
    required: true,
  },
  availableBeds: {
    type: Number,
    required: true,
  },
});

const BFloor = mongoose.model('BFloor', floorSchema);

module.exports = BFloor;
