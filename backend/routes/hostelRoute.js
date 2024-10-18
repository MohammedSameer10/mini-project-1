const express = require('express');
const hostelRouter = express.Router();
const hostelDetail = require('../model/hostelDetails');
const userDetails = require('../model/userDetails'); 

const availabilityRoute = async (req, res) => {
  try {
    const { hostel, floor, wing } = req.body;

    if (!hostel || !floor  || !wing) {
      console.log("Invalid parameters provided");
      return res.status(400).json({ code: 0, msg: "Hostel, floor, and wing are required" });
    }

    const rooms = await hostelDetail.find({ hostel, floor: String(floor), wing });

    if (!rooms.length) {
      console.log(`No rooms found for ${hostel} on floor ${floor} in ${wing} wing`);
      return res.status(404).json({ code: 0, msg: "No rooms found for the specified criteria" });
    }

    const allWardens = await userDetails.find({ hostel, userType: "warden" });

    const wardenMap = allWardens.reduce((acc, warden) => {
      acc[warden.roomNo] = warden.name;
      return acc;
    }, {});

    const roomData = rooms.map(room => ({
      roomNo: room.roomNo,
      occupied: room.occupied.length,
      capacity: wardenMap[room.roomNo] ? 1 : 4,  
      warden: wardenMap[room.roomNo] || "None"
    }));

    console.log(`successfully fetched data for ${hostel} on floor ${floor}, wing ${wing}`);

    return res.status(200).json({
      code: 1,
      msg: "Successfully fetched data",
      data: roomData
    });

  } catch (err) {
    console.error("Internal server error: ", err);
    return res.status(500).json({
      code: -1,
      msg: "Internal server error while fetching room details"
    });
  }
};

hostelRouter.post('/availability', availabilityRoute);
module.exports = hostelRouter;