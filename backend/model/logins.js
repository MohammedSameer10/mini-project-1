const mongoose = require('mongoose');

const loginSchema = mongoose.Schema({
  userName: {
    type: String,
    required: [true, "Please add a UserName"]
  },
  password: {
    type: String,
    required: [true, "Please add a password"]
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("logins", loginSchema);
