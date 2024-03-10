const mongoose = require('mongoose');

const hostelSchema = mongoose.Schema({
    hostelId:{
        type:Number,
        required:true,
    },
    hostelType: {
        type: String,
        required: true,
    },
    hostelName: {
        type: String,
        required: true,
    },
    floors: {
        type: Number,
        required: true,
    },
    totalRooms: {
        type: Number,
        required: true,
    },

    specialRooms: {
        type: Number,
        required: true,
    },
    beds: {
        type: Number,
        required: true,
    },
});

const Hostel = mongoose.model('Hostel', hostelSchema);

module.exports = Hostel;
