import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import blogRoutes from "./routes/blogRoutes.js";
import authRoutes from "./routes/authRoutes.js"
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

connectDB();

app.use("/api/blogs",blogRoutes);
app.use("/api/auth",authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("Server running on port 3000");
});
