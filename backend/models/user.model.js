const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  isProvider: { type: Boolean, default: false },
  location: String
});

const User = mongoose.models.User || mongoose.model('User', userSchema);
module.exports=User;