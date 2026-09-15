import dotenv from "dotenv";
dotenv.config();

if (!process.env.MONGO_URI) {
    throw new Error("Please set the MONGO_URI environment variable");
}

if (!process.env.JWT_SECRET) {
    throw new Error("Please set the JWT_SECRET environment variable");
}

const config = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET
}

export default config;