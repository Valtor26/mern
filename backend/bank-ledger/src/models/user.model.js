const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    email:{
        type: String,
        required: [true,"Email is required for creating a user"],
        trim: true,
        lowercase: true,
        match: [/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, "Invalid email address"],
        unique: [true,"Email already exists"]
    },
    name:{
        type: String,
        required: [true,"Name is required for creating an account"],
    },
    password:{
        type: String,
        required: [true,"Password is required for creating an account"],
        minlength: [6,"Password must be at least 6 characters long"],
        select: false
    }
},{
    timestamps: true // add createdAt and updatedAt fields
})

userSchema.pre("save", async function(next){ // run before saving user
    if(!this.isModified("password")){ // check if password is modified
        return next()
    }

    const hash = await bcrypt.hash(this.password,10) // hash password

    this.password = hash // add hash to user

    return next()
})

userSchema.methods.comparePassword = async function(password){ // compare password
    return await bcrypt.compare(password, this.password) 
}

const userModel = mongoose.model("user",userSchema);

module.exports = userModel