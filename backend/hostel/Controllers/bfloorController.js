

const BFloor = require('../Models/bfloor'); 

// Get all floors
const getAllFloors = async (req, res) => {
  try {
    const floors = await BFloor.find();
    res.json(floors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new floor
const createFloor = async (req, res) => {
  const { floorNumber, totalBeds, availableBeds } = req.body;

  try {
    const newFloor = new BFloor({
      floorNumber,
      totalBeds,
      availableBeds,
    });

    const savedFloor = await newFloor.save();
    res.status(201).json(savedFloor);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getAllFloors, createFloor };
