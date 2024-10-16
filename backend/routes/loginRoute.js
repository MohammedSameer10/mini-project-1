const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const loginRouter = express.Router();
const login = require('../model/logins');

const loginUser = async (req, res) => {
  try {
    const { userName, password } = req.body;

    // Validation for missing fields
    if (!(userName && password)) {
      console.log("Enter all fields");
      return res.status(400).json({ code: "0", msg: "Validation error: Missing fields" });
    }

    // Find the user by userName
    const user = await login.findOne({ userName });
    if (!user) {
      console.log("User does not exist");
      return res.status(400).json({ code: 0, msg: "Username not found" });
    }

    // Compare entered password with stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ code: 0, msg: "Incorrect password" });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userName: user.userName },
      process.env.SECRET_KEY,
      { expiresIn: "15m" } // Token expiry time
    );
    console.log("User signed in, token created successfully. Token:", token);

    // Remove password from user object before sending response
    user.password = undefined;
    user.token = token;

    // Send the response with the token
    return res.status(201).json({ code: 1, msg: "Login successful", JWT: token });

  } catch (error) {
    console.log("Error in login route", error);
    return res.status(500).json({ code: -1, msg: "Internal server error", error });
  }
};

loginRouter.post('/', loginUser);
module.exports = loginRouter;
