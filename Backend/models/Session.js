const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // Reference to a User model (if you have one)
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
    attendees: [
      {
        name: String,
        email: String,
      },
    ],
    type: {
      type: String,
      enum: ["one-on-one", "group"],
      default: "one-on-one",
    },
  },
  {
    timestamps: true, // Automatically add createdAt and updatedAt fields
  }
);

const Session = mongoose.model("Session", sessionSchema);

module.exports = Session;
