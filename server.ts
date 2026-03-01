import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import mathRoutes from "./routes/mathRoutes.ts";
import dfsRoutes from "./routes/dfsRoutes.ts";

dotenv.config();

const app = express();
app.use(express.json());

// MongoDB connection URI
const mongoURI =
  process.env.MONGO_URI ||
  "mongodb://localhost:27017";

// Connect to MongoDB Atlas
mongoose
  .connect(mongoURI)
  .then(() => console.log("✅ Connected to MongoDB Atlas (kriya26 DB)"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });



// Root route
app.get("/", (req, res) => {
  res.send("🚀 BlindBuild API running...");
});

app.use("/api/m1", mathRoutes);
app.use("/api/d1", dfsRoutes);
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});