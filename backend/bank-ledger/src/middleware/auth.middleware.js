const userModel = require("../models/user.model")
const jwt = require("jsonwebtoken")

/*
    This middleware is used to verify the token and add user to request,
    it checks whether the request is coming from a valid logged in user or not
*/ 

async function authMiddleware(req, res, next) {
    const token = req.cookies.token || req.headers.authorization.split(" ")[1] // get token from cookies or authorization header

    if(!token){ // if token is not present
        return res.status(401).json({
            message : "Unauthorized access, token is missing",
        })
    }
    try { // verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET) // decode token, this will throw an error if token is invalid or else it will return decoded token, the decoded token will have userId

        const user = await userModel.findById(decoded.userId) // find user by id

        req.user = user // add user to request

        return next() // call next middleware
    } catch (error) {
        return res.status(401).json({
            message : "Unauthorized access, invalid token",
        })
    }
}


module.exports = {authMiddleware}