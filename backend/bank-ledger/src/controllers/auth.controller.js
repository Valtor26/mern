const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")
const emailService = require("../services/email.service")
const tokenBlacklistModel = require("../models/blackList.model")



async function userRegister(req, res) {
    const {email,password,name} = req.body

    const iSExists = await userModel.findOne({
        email : email
    })
    if(iSExists){ // if user already exists
        return res.status(422).json({
            message : "Email already exists with email",
            status: "failed"
        })
    }
    const user = await userModel.create({ // create user if not exists
        email,
        password,
        name
    })

    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "3d" }
    )

    res.cookie("token", token)

    res.status(201).json({
        user:{
            _id : user._id,
            email : user.email,
            name : user.name
        },
        token
    })

    await emailService.sendRegistrationEmail(user.email,user.name)
    
}

async function userLogin(req, res) {
    const {email,password} = req.body

    const user = await userModel.findOne({ email }).select("+password");

    if(!user){
        return res.status(401).json({
            message : "Email or password is invalid",
        })
    }
    
    const isPasswordMatch = await user.comparePassword(password)

    if(!isPasswordMatch){
        return res.status(401).json({
            message : "Email or password is invalid",
        })
    }
    const token = jwt.sign(
        { userId: user._id },
        process.env.JWT_SECRET,
        { expiresIn: "3d" }
    )
    res.cookie("token", token)
    res.status(200).json({
        user:{
            _id : user._id,
            email : user.email,
            name : user.name
        },
        token
    })
}

async function userLogout(req, res) {
    const token = req.cookies.token || req.headers.authorization.split(" ")[1] // get token from cookies or authorization header

    if(!token){ // if token is not present
        return res.status(400).json({
            message : "User logged out successfully",
        })
    }

    await tokenBlacklistModel.create({
        token: token
    })

    res.clearCookie("token")
    
    res.status(200).json({
        message : "User logged out successfully",
    })
}

module.exports = {
    userRegister, userLogin, userLogout
}