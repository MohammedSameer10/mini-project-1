const express = require('express');
const homeRouter = express.Router();
const info = require("../model/userDetails");
const roomInfo = require("../model/hostelDetails");
const tokenAuthenticator = require("../middleware/tokenAuthentication");

const homePage = async (req, res) => {
    try {
        const { userName } = req.user;

        // Fetch the user details for the current user
        const user_detail = await info.findOne({ name: userName });

        if (!user_detail) {
            return res.status(404).json({ code: -1, msg: "User not found" });
        }

        // Fetch room details for the current user using hostel and roomNo
        const room_detail = await roomInfo.findOne({
            hostel: user_detail.hostel,
            roomNo: user_detail.roomNo
        });

        if (!room_detail) {
            return res.status(404).json({ code: -1, msg: "Room not found" });
        }

        // Log current user and occupied roommates
        console.log("Current user:", userName);
        console.log("Occupied:", room_detail.occupied);

        // Find roommates excluding the current user
        const roommate_details = await Promise.all(
            room_detail.occupied
                .filter(occupant => occupant !== userName) // Exclude current user
                .map(async (roommate) => {
                    const roommate_detail = await info.findOne({ name: roommate });
                    if (roommate_detail) {
                        return {
                            name: roommate_detail.name,
                            email: roommate_detail.email,
                            phoneNo: roommate_detail.phoneNo
                        };
                    }
                    return null;
                })
        );

        // Remove any null results from roommates
        const valid_roommate_details = roommate_details.filter(detail => detail !== null);

        // Find the warden details based on the hostel (assuming there's only one warden per hostel)
        const warden_detail = await info.findOne({
            hostel: user_detail.hostel,
            userType: 'warden'
        });

        if (!warden_detail) {
            return res.status(404).json({ code: -1, msg: "Warden not found" });
        }

        // Fetch the warden's specific room details
        const warden_room_detail = await roomInfo.findOne({
            hostel: warden_detail.hostel,
            roomNo: warden_detail.roomNo
        });

        if (!warden_room_detail) {
            return res.status(404).json({ code: -1, msg: "Warden's room not found" });
        }

        // Send the response with room details, warden details, and roommate details
        return res.status(200).json({
            roomDetail: {
                roomNo: room_detail.roomNo,
                floor: room_detail.floor,
                wing: room_detail.wing,
                hostel: room_detail.hostel
            },
            wardenDetail: {
                name: warden_detail.name,
                phoneNo: warden_detail.phoneNo,
                roomNo: warden_room_detail.roomNo, // Warden's room details
                floor: warden_room_detail.floor,
                wing: warden_room_detail.wing,
                hostel: warden_room_detail.hostel
            },
            roommateDetails: valid_roommate_details
        });
    } catch (error) {
        console.log("Internal server error", error);
        return res.status(500).json({ code: -1, msg: "Internal server error" });
    }
};

homeRouter.get('/', tokenAuthenticator, homePage);
module.exports = homeRouter;
