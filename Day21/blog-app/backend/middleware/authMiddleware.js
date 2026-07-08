import jwt from "jsonwebtoken";
import User from "../model/user.js";
import dotenv from "dotenv";
dotenv.config();
const authMiddleware = async (req, res, next) => {
    try {
        // Checking for token
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return res.status(401).json({
                message: "No token provided",
            });
        }
        const token = authHeader.split(" ")[1];

        // Verify token
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        const user = await User.findById(decoded.id).select("-password");
        if (!user) {
            return res.status(500).json({
                message: "User not Found",
            });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(401).json({
            message: error.message,
        });
    }
};

export default authMiddleware;