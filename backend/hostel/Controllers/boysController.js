const BRoom = require('../models/boysModel');
const BFloor = require('../Models/bfloor')

const boysController = {
  getAllRooms: async (req, res) => {
    try {
      const rooms = await BRoom.find();
      res.json(rooms);
    } catch (error) {
      console.error('Error getting rooms:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  bookRoom: async (req, res) => {
    const { floorNumber, roomNumber, bedNumber, username, adminId } = req.body;

    try {
      const room = await BRoom.findOne({ floorNumber, roomNumber });

      if (!room) {
        return res.status(404).json({ error: 'Room not found' });
      }

      const bedIndex = room.bedNumber.findIndex((bed) => bed === bedNumber);

      if (bedIndex === -1 || room.status[bedIndex] === 'booked') {
        return res.status(400).json({ error: 'Bed not available' });
      }

      room.status[bedIndex] = 'booked';
      room.bookedBy[bedIndex] = username;
      room.adminId[bedIndex] = adminId;

      // Update the available beds on the floor
      const floor = await BFloor.findOne({ floorNumber });

      if (floor.availableBeds > 0) {
        room.availableBeds--;
        floor.availableBeds--;

        await Promise.all([room.save(), floor.save()]);
      } else {
        return res.status(400).json({ error: 'No available beds on the floor' });
      }


      // Return the booked room details without circular references
      const details = {
        floorNumber: room.floorNumber,
        roomNumber: room.roomNumber,
        bedNumber: bedNumber,
        bookedBy: username,
        // adminId: adminId, // Include adminId in the response if needed
      };

      // Send the response without circular references
      res.json(details);
    } catch (error) {
      console.error('Error booking room:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  cancelBooking: async (req, res) => {
    const { floorNumber, roomNumber, bedNumber } = req.body;

    try {
      const room = await BRoom.findOne({ floorNumber, roomNumber });

      if (!room) {
        return res.status(404).json({ error: 'Room not found' });
      }

      const bedIndex = room.bedNumber.findIndex((bed) => bed === bedNumber);

      if (bedIndex === -1 || room.status[bedIndex] !== 'booked') {
        return res.status(400).json({ error: 'Bed not booked' });
      }

      // Cancel the booking
      room.status[bedIndex] = 'available';
      room.bookedBy[bedIndex] = null;
      room.adminId[bedIndex] = 'available';

      // Update the available beds on the floor
      const floor = await BFloor.findOne({ floorNumber });

      if (floor.availableBeds < floor.totalBeds) {
        room.availableBeds++;
        floor.availableBeds++;

        await Promise.all([room.save(), floor.save()]);
      } else {
        return res.status(400).json({ error: 'Floor already at maximum available beds' });
      }

      // Return the canceled room details without circular references
      const details = {
        floorNumber: room.floorNumber,
        roomNumber: room.roomNumber,
        bedNumber: bedNumber,
        status: room.status[bedIndex], // Assuming you also want to return the updated status
        availableBeds: room.availableBeds, // Assuming you also want to return availableBeds for the specific room
      };

      res.json(details);
    } catch (error) {
      console.error('Error canceling booking:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

};

module.exports = boysController;
