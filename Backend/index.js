const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const availabilityRoutes = require("./routes/availabilityRoutes.js");
const sessionRoutes = require("./routes/sessionRoutes.js");
const userRoutes = require("./routes/userRoutes.js");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3001;
const databaseURL = process.env.MONGODB_URL;

app.use(
  cors({
    origin: process.env.ORIGIN,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
  })
);

// Middleware
app.use(express.json()); // For parsing application/json

// Routes
app.use("/api/availability", availabilityRoutes);
app.use("/api/sessions", sessionRoutes);
app.use("/api/users", userRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

mongoose
  .connect(databaseURL)
  .then(() => console.log("DB connection successfully."))
  .catch((err) => console.log(err.message));
