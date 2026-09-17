import userModel from "../models/user.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import config from "../config/config.js";

export async function registerUser(req, res) {

    const { username, email, password } = req.body;

    const isAlreadyRegistered = await userModel.findOne({
        $or: [
            { username },
            { email }
        ]
    });    

    if (isAlreadyRegistered) {
        return res.status(409).json({ 
            message: "Username or email already exists" 
        });
    }

    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex"); // Hash the password using SHA-256

    const user = await userModel.create({
        username,
        email,
        password: hashedPassword
    });

    const accessToken = jwt.sign({id: user._id }, config.JWT_SECRET, { expiresIn: "15m" });

    const refreshToken = jwt.sign({id: user._id }, config.JWT_SECRET, { expiresIn: "7d" });

    res.cookie("refreshToken", refreshToken,{
        httpOnly: true, // to prevent client side script from reading the cookie
        secure: true, // to prevent cookie from being accessed by client side script
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    })

    res.status(201).json({
        message: "User registered successfully",
        user:{
            username: user.username,
            email: user.email,
        },
        accessToken
    });

}

export async function getMe(req, res) {
    
    const token = req.headers.authorization.split(" ")[1]; // Extract the token from the Authorization header

    if(!token) {
        return res.status(401).json({ message: "token is missing" });
    }

    const decoded = jwt.verify(token, config.JWT_SECRET); // Verify the token

    const user = await userModel.findById(decoded.id); // Find the user with the given id

    res.status(200).json({
        message: "User fetched successfully",
        user: {
            username: user.username,
            email: user.email
        }
    });
} 

export async function refreshToken(req, res) {

    const refreshToken = req.cookies.refreshToken; // Get the refresh token from the cookies

    if(!refreshToken) {
        return res.status(401).json({ message: "refresh token is missing" });
    }

    const decoded = jwt.verify(refreshToken, config.JWT_SECRET); // Verify the refresh token

    const accessToken = jwt.sign({id: decoded.id }, config.JWT_SECRET, { expiresIn: "15m" }); // Generate a new access token

    const newRefreshToken = jwt.sign({id: decoded.id }, config.JWT_SECRET, { expiresIn: "7d" }); // Generate a new refresh token

    res.cookie("refreshToken", newRefreshToken,{
        httpOnly: true, // to prevent client side script from reading the cookie
        secure: true, // to prevent cookie from being accessed by client side script
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    })

    res.status(200).json({
        message: "Access token refreshed successfully",
        accessToken
    })
}