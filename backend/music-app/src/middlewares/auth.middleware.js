const jwt = require("jsonwebtoken")

async function authArtist(req,res,next){
    const token = req.cookies.token;

    if(!token){ // check if token is present in cookies
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
    
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET) // verify token

        if(decoded.role !== "artist"){ // check if user role is artist
            return res.status(403).json({
                message: "You dont have access to create music"
            })
        }

        req.user = decoded // add user to request
    
        next() // if token is valid, move to next middleware
    }
    catch(err){ // if token is not valid
        console.log(err);
        return res.status(401).json({
            message: "Unauthorized"
        })
    }   
}

async function authUser(req,res,next){
    const token = req.cookies.token;

    if(!token){ // check if token is present in cookies
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
    
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET) // verify token

        if(decoded.role !== "user"){ // check if user role is artist
            return res.status(403).json({
                message: "You dont have access"
            })
        }

        req.user = decoded // add user to request
    
        next() // if token is valid, move to next middleware
    }
    catch(err){ // if token is not valid
        console.log(err);
        return res.status(401).json({
            message: "Unauthorized"
        })
    }   
}

module.exports = {authArtist,authUser}