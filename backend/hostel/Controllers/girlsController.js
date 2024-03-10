const GRoom = require('../Models/girlsModel');
const GFloor = require('../Models/floorModel');

const girlsController = {
  getAllRooms: async (req, res) => {
    try {
      const rooms = await GRoom.find();
      res.json(rooms);
    } catch (error) {
      console.error('Error getting rooms:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },
  getRoomByNumber: async (req, res) => {
    const roomNumber = req.params.roomNumber; // Assuming you're passing the room number in the URL parameters

    try {
      const room = await GRoom.findOne({ roomNumber });

      if (!room) {
        return res.status(404).json({ error: 'Room not found' });
      }

      res.json(room);
    } catch (error) {
      console.error('Error getting room by room number:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  bookRoom: async (req, res) => {
    const { floorNumber, roomNumber, bedNumber, username, adminId } = req.body;

    try {
      const room = await GRoom.findOne({ floorNumber, roomNumber });

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
      const floor = await GFloor.findOne({ floorNumber });

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
        availableBeds: room.availableBeds,
      };

      res.json(details);
    } catch (error) {
      console.error('Error booking room:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  cancelBooking: async (req, res) => {
    const { floorNumber, roomNumber, bedNumber } = req.body;

    try {
      const room = await GRoom.findOne({ floorNumber, roomNumber });

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
      const floor = await GFloor.findOne({ floorNumber });

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

  // Add other controller methods if needed
};

module.exports = girlsController;
