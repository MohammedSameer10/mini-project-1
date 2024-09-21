const express = require('express');
const hostelRouter = express.Router();
const hostelDetail = require('../model/hostelDetails');

const hostelRoute = async (req, res) => {
  try {
    const { hostel } = req.params;
    
    if (!hostel) {
      console.log(`No hostel: ${hostel} name found in the parameter`);
      return res.status(401).json({ code: 0, message: "Hostel name not received in the parameter" });
    }

    // Fetch rooms by hostel name
    const rooms = await hostelDetail.find({ hostel });
    
    if (!rooms.length) {
      console.log("No rooms found in this hostel");
      return res.status(201).json({ code: 0, message: "Authentication failed or invalid hostel name" });
    }

    const hostelData = {
      firstFloor: { leftWing: [], rightWing: [] },
      secondFloor: { leftWing: [], rightWing: [] },
      thirdFloor: { leftWing: [], rightWing: [] }
    };

    rooms.forEach((room) => {
      const roomInfo = { 
        roomNo: room.roomNo, 
        occupied: room.occupied.length // Fix: Get length of occupied array
      };

      if (room.floor === "1") {
        if (room.wing === "Left") {
          hostelData.firstFloor.leftWing.push(roomInfo);
        } else {
          hostelData.firstFloor.rightWing.push(roomInfo);
        }
      } else if (room.floor === "2") {
        if (room.wing === "Left") {
          hostelData.secondFloor.leftWing.push(roomInfo);
        } else {
          hostelData.secondFloor.rightWing.push(roomInfo);
        }
      } else if (room.floor === "3") {
        if (room.wing === "Left") {
          hostelData.thirdFloor.leftWing.push(roomInfo);
        } else {
          hostelData.thirdFloor.rightWing.push(roomInfo);
        }
      }
    });

    console.log(`Hostel Data: ${JSON.stringify(hostelData)}`);
    return res.status(201).json({
      code: 1,
      message: "Successfully fetched data",
      Data: hostelData
    });

  } catch (err) {
    console.log("Internal server error in hostelRoute: ", err);
    return res.status(501).json({
      code: -1,
      message: "Internal server error while trying to fetch hostel room details",
    });
  }
};

hostelRouter.get('/:hostel', hostelRoute);
module.exports = hostelRouter;
