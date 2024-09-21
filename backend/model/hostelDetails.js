const mongoose = require('mongoose');

const roomDetailSchema = mongoose.Schema({
  hostel: {
    type: String,
    required: [true, "Please specify your hostel name"]
  },
  roomNo: {
    type: Number, // Numbering rooms uniquely across floors and wings
    required: [true, "Please specify your roomNo"]
  },
  floor: {
    type: String,
    required: [true, "Please add your floor name"] // e.g., "1st Floor"
  },
  wing: {
    type: String,
    required: [true, "Please specify your wing"] // e.g., "Left" or "Right"
  },
  occupied: {
    type: [String], // Array of user IDs or names
    validate: {
      validator: function (value) {
        return value.length <= 4; // Room cannot have more than 4 members
      },
      message: "A room cannot contain more than 4 members"
    }
  }
}, {
  timestamps: true,
});

module.exports = mongoose.model("hostelDetails", roomDetailSchema);
