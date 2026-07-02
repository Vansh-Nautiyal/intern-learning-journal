import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";
import internRoutes from "./routes/internRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use("/interns", internRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Intern API is running...");
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});