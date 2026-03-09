const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const round1Routes = require("./routes/round1Routes");


dotenv.config();

const app = express();
app.use(express.json());



// Root route
app.get("/", (req, res) => {
  res.send("🚀 BlindBuild API running...");
});

// Routes
app.use("/api/round1", round1Routes);


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});