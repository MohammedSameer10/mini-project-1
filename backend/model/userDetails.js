const mongoose = require('mongoose');

const userDetailSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add name same as username"]
  },
  rollNo: {
    type: String,
    required: [true, "Please add Rollno"]
  },
  email: {
    type: String,
    required: [true, "Please add email"],
    unique:[true, "Please add email"]
  },
  userType: {
    type: String,
    required: [true, "Please add usertype"]
  },
  hostel: {
    type: String, // This will match the hostel name in the room detail
    required: [true, "Please add which hostel you are in"]
  },
  roomNo: {
    type: Number, // This will match the room number in the room detail
    required: [true, "Specify your roomNo"]
  },
  phoneNo: {
    type: Number
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("userDetail", userDetailSchema);
