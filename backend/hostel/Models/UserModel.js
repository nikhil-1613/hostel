const mongoose = require('mongoose');
//const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    
    required: true,
  },
});

// Apply the passport-local-mongoose plugin to enable authentication methods

//userSchema.plugin(passportLocalMongoose);

const User = mongoose.model('User', userSchema);

module.exports = User;
