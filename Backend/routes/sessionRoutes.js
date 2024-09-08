const express = require("express");
const router = express.Router();
const Session = require("../models/Session.js"); // Adjust the path as necessary

// Create a new session
router.post("/", async (req, res) => {
  const { user, startTime, endTime, attendees, type } = req.body;

  if (!user || !startTime || !endTime || !attendees || !type) {
    return res
      .status(400)
      .json({
        error:
          "All fields (user, startTime, endTime, attendees, type) are required",
      });
  }

  if (new Date(endTime) <= new Date(startTime)) {
    return res.status(400).send("End time must be after start time");
  }

  try {
    const session = new Session({ user, startTime, endTime, attendees, type });
    await session.save();
    res.status(201).json(session);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Fetch availability for a specific user
router.get("/availability/:userId", async (req, res) => {
  try {
    const { userId } = req.params;
    // Assuming Slot is your model and you need to query availability by userId
    const slots = await Slot.find({ user: userId }); // Adjust query as necessary

    if (!slots) {
      return res.status(404).json({ error: "No availability found" });
    }

    res.status(200).json(slots);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
