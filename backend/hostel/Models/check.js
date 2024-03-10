const mongoose = require('mongoose');

const checkSchema  = new mongoose.Schema({
    adminId:{
        type: String,
        required:true,
    },
    userName:{
        type: String,
        required:true,
    },
    status:{
        type:String,
        default:'available',
    }

});
const verfiy = mongoose.model('verify', checkSchema);

module.exports = verfiy;