const mongoose = require("mongoose");

const availabilitySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    endTime: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number, // Duration in minutes
      required: true,
      min: 1, // Assuming minimum duration should be at least 1 minute
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
);

const Availability = mongoose.model("Availability", availabilitySchema);

module.exports = Availability;
