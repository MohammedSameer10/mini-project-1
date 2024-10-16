const mongoose = require('mongoose');

const roomDetailSchema = mongoose.Schema({
  hostel: {
    type: String,
    required: [true, "Please specify your hostel name"]
  },
  roomNo: {
    type: Number, 
    required: [true, "Please specify your roomNo"]
  },
  floor: {
    type: String,
    required: [true, "Please add your floor name"] 
  },
  wing: {
    type: String,
    required: [true, "Please specify your wing"] 
  },
  occupied: {
    type: [String], 
    validate: {
      validator: function (value) {
        return value.length <= 4; 
      },
      message: "A room cannot contain more than 4 members"
    }
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model("hostelDetails", roomDetailSchema);
