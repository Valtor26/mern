import userModel from "../models/user.model.js";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import config from "../config/config.js";
import sessionModel from "../models/session.model.js";
import { sendEmail } from "../services/email.service.js";
import {generateOtp, getOtpHtml} from "../utils/utils.js";
import otpModel from "../models/otp.model.js";

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

    const otp = generateOtp(); // Generate a 6-digit OTP

    const html = getOtpHtml(otp); // Generate an HTML string with the OTP

    const otpHash = crypto.createHash("sha256").update(otp).digest("hex"); // Hash the OTP using SHA-256

    await otpModel.create({
        email,
        user: user._id,
        otp: otpHash
    });

    await sendEmail(email, "OTP Verification", "", html); // Send an email with the OTP (html body)

    res.status(201).json({
        message: "User registered successfully",
        user:{
            username: user.username,
            email: user.email,
            verified: user.verified
        }, 
    });

}

export async function loginUser(req, res) {
    const { email, password } = req.body;

    const user = await userModel.findOne({email });

    if(!user) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    if(!user.verified) {
        return res.status(401).json({ message: "Email not verified" });
    }
    
    const hashedPassword = crypto.createHash("sha256").update(password).digest("hex"); // Hash the password using SHA-256

    const isPasswordValid = hashedPassword === user.password;

    if(!isPasswordValid) {
        return res.status(401).json({ message: "Invalid email or password" });
    }

    const refreshToken = jwt.sign({id: user._id }, config.JWT_SECRET, { expiresIn: "7d" }); // Generate a refresh token

    const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex"); // Hash the refresh token using SHA-256

    const session = await sessionModel.create({
        user: user._id,
        refreshTokenHash,
        ip: req.ip,
        userAgent: req.headers["user-agent"]
    });

    const accessToken = jwt.sign({id: user._id, sessionId: session._id }, config.JWT_SECRET, { expiresIn: "15m" }); // Generate an access token

    res.cookie("refreshToken", refreshToken,{
        httpOnly: true, // to prevent client side script from reading the cookie
        secure: true, // to prevent cookie from being accessed by client side script
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 * 7 // 7 days
    })

    res.status(200).json({
        message: "User logged in successfully",
        user:{
            username: user.username,
            email: user.email,
        },
        accessToken
    })
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

    const decoded = jwt.verify(refreshToken, config.JWT_SECRET); // Verify the refresh token and get the user data from it

    const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex"); // Hash the refresh token using SHA-256

    const session = await sessionModel.findOne({ refreshTokenHash, revoked: false }); // Find the session associated with the refresh token


    // session is not found when the refresh token is invalid or has been revoked, so we return an error message to the client
    if(!session){
        return res.status(401).json({ message: "refresh token is invalid" });
    }

    const accessToken = jwt.sign({id: decoded.id }, config.JWT_SECRET, { expiresIn: "15m" }); // Generate a new access token


    // generate a new refresh token for better security and to prevent token reuse, sometimes the refresh token can be stolen and used to generate new access tokens, so generating a new refresh token will invalidate the old one and prevent it from being used again. This is a security measure to prevent token reuse and to ensure that the user has to re-authenticate after a certain period of time.
    const newRefreshToken = jwt.sign({id: decoded.id }, config.JWT_SECRET, { expiresIn: "7d" }); // Generate a new refresh token

    const newRefreshTokenHash = crypto.createHash("sha256").update(newRefreshToken).digest("hex"); // Hash the new refresh token using SHA-256

    session.refreshTokenHash = newRefreshTokenHash; // Update the refresh token hash in the session
    await session.save(); // Save the updated session

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

export async function logout(req, res) {

    const refreshToken = req.cookies.refreshToken; // Get the refresh token from the cookies

    if(!refreshToken) {
        return res.status(400).json({ message: "refresh token is missing" });
    }

    const refreshTokenHash = crypto.createHash("sha256").update(refreshToken).digest("hex"); // Hash the refresh token using SHA-256

    const session = await sessionModel.findOne({ refreshTokenHash, revoked: false }); // Find the session associated with the refresh token

    if(!session){
        return res.status(400).json({ message: "refresh token is invalid" });
    }

    session.revoked = true; // Set the revoked flag to true
    await session.save(); // Save the updated session

    res.clearCookie("refreshToken"); // Clear the refresh token cookie

    res.status(200).json({ message: "Logged out successfully" });

}

export async function logoutAll(req, res) {
    const refreshToken = req.cookies.refreshToken; // Get the refresh token from the cookies

    if(!refreshToken) {
        return res.status(400).json({ message: "refresh token is missing" });
    }

    const decoded = jwt.verify(refreshToken, config.JWT_SECRET); // Verify the refresh token and get the user data from it

    await sessionModel.updateMany({ user: decoded.id, revoked: false }, { revoked: true }); // Revoke all sessions for the user

    res.clearCookie("refreshToken"); // Clear the refresh token cookie


    res.status(200).json({ message: "Logged out from all devices successfully" });
}

export async function verifyEmail(req, res) {
    const { email, otp } = req.body;

    if(!email || !otp) {
        return res.status(400).json({ message: "Email and OTP are required" });
    }

    const otpHash = crypto.createHash("sha256").update(otp).digest("hex"); // Hash the OTP using SHA-256

    const otpRecord = await otpModel.findOne({ email, otp: otpHash }); // Find the OTP record
    
    if(!otpRecord) {
        return res.status(400).json({ message: "Invalid OTP" });
    }

    const user = await userModel.findByIdAndUpdate(otpRecord.user, { verified: true }, { new: true }); // Update and return updated user

    await otpModel.deleteMany({ user: otpRecord.user }); // Delete the OTP records

    return res.status(200).json({ message: "Email verified successfully",
        user: {
            username: user.username,
            email: user.email,
            verified: user.verified
        }
    });
}