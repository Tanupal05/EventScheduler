const express = require("express");
const router = express.Router();
const Availability = require("../models/Availability.js"); // Adjust the path as necessary

// Create new availability
router.post("/", async (req, res) => {
  try {
    const { user, startTime, endTime, duration } = req.body;

    // Ensure endTime is after startTime
    if (new Date(endTime) <= new Date(startTime)) {
      return res
        .status(400)
        .json({ error: "End time must be after start time" });
    }
    const availability = new Availability({
      user,
      startTime,
      endTime,
      duration,
    });
    await availability.save();
    res.status(201).json(availability);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Fetch all availabilities
router.get("/:userId", async (req, res) => {
  try {
    const availabilities = await Availability.find({ user: req.params.userId });
    res.status(200).json(availabilities);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
