const mongoose = require("mongoose");

const connectDB = async()=>{
        const connection = mongoose.connect("mongodb+srv://admin:admin123@contactcluster.roy4160.mongodb.net/hostel2")
        .then(() => console.log("database connected"))
        .catch((err)=>console.log(err));
}

module.exports = connectDB;