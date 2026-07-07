import bcrypt from "bcrypt";
import User from "../model/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const registerUser= async (req,res) => {
    try{
        const {username, email, password} = req.body;

        // Checking for existing user
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                message : "User Already Exists",
            });
        }

        // Creating new user
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            username,
            email,
            password : hashedPassword,
        });
        res.status(201).json({
            messgae : "User Created Successfully",
            user : {
                id : User._id,
                username : User.username,
                email : User.email,
            }
        });
    } catch(error){
        res.status(500).json({
            message : error.message,
        });
    }
};

export const loginUser = async (req,res) =>{
    try{
        const {email,password} = req.body;
        const user = await User.findOne({email});

        if(!user){
            return res.status(400).json({
                message : "Invalid Username or Password",
            });
        }

        const isMatch = await bcrypt.compare (
            password, user.password
        );

        if (!isMatch){
            return res.status(400).json({
                message : "Invalid Username or Password",
            });
        }

        const token = jwt.sign(
            {
                id : user._id,
            },
            process.env.JWT_SECRET,
            {
                expiresIn : "7d",
            }
        );
        res.status(200).json({
            message : "Login Successful",
            token,
            user : {
                id : user._id,
                username : user.username,
                email : user.email,
            }
        });
    } catch(error){
        res.status(500).json({
            message : error.message,
        });
    }
};