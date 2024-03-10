const Hostel = require('../Models/hostelType');

const hostelController = {
  createHostel: async (req, res) => {
    try {
      const { hostelId,hostelType, hostelName, floors,totalRooms, specialRooms, beds } = req.body;

      const newHostel = new Hostel({
        hostelId,
        hostelType,
        hostelName,
        floors,
        totalRooms,
        specialRooms,
        beds,
      });

      const savedHostel = await newHostel.save();
      res.status(201).json(savedHostel);
    } catch (error) {
      console.error('Error creating hostel:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getAllHostels: async (req, res) => {
    try {
      const hostels = await Hostel.find();
      res.json(hostels);
    } catch (error) {
      console.error('Error getting hostels:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  updateHostelField: async (req, res) => {
    try {
      const { hostelId } = req.params; // Extracting hostelId from the request parameters
      const { field, value } = req.body; // Extracting the field and its new value from the request body

      // Validating that the provided field is a valid field in the hostel schema
      const validFields = ['hostelType', 'hostelName', 'floors', 'specialRooms', 'beds'];
      if (!validFields.includes(field)) {
        return res.status(400).json({ error: 'Invalid field specified for update' });
      }

      // Finding the hostel by hostelId
      const hostel = await Hostel.findOne({ hostelId });

      // If hostel with given ID is not found
      if (!hostel) {
        return res.status(404).json({ error: 'Hostel not found' });
      }

      // Updating the specified field
      hostel[field] = value;

      // Saving the updated hostel
      const updatedHostel = await hostel.save();

      res.json(updatedHostel);
    } catch (error) {
      console.error('Error updating hostel field:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
};


module.exports = hostelController;
