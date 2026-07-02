import mongoose from "mongoose";

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing from your .env file");
    }

    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 10000,
    });

    console.log(`MongoDB Connected Successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);

    if (error.name === "MongooseServerSelectionError") {
      console.error(
        "Check MongoDB Atlas Network Access: add your current IP address to the IP Access List, or temporarily allow 0.0.0.0/0 for development."
      );
      console.error(
        "Also confirm your internet/firewall/VPN allows outbound connections to MongoDB Atlas on port 27017."
      );
    }

    process.exit(1);
  }
};

export default connectDB;
