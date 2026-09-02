import dotenv from "dotenv";
dotenv.config();

if (!process.env.MONGO_URI) {
    throw new Error("Please set the MONGO_URI environment variable");
}

const config = {
    MONGO_URI: process.env.MONGO_URI
}

export default config;