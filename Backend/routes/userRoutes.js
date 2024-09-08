const express = require("express");
const router = express.Router();
const User = require("../models/User.js"); // Adjust the path as necessary

// Define your routes here
router.post("/login", async (req, res) => {
  try {
    const { email } = req.body;
    let user = await User.findOne({ email });
    if (!user) {
      user = new User({ email, password: "LoginPassword" });
      await user.save();
    }
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// More routes can be added here

module.exports = router;
