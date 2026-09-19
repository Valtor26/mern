import dotenv from "dotenv";
dotenv.config();

if (!process.env.MONGO_URI) {
    throw new Error("Please set the MONGO_URI environment variable");
}

if (!process.env.JWT_SECRET) {
    throw new Error("Please set the JWT_SECRET environment variable");
}

if (!process.env.GOOGLE_CLIENT_ID) {
    throw new Error("Please set the GOOGLE_CLIENT_ID environment variable");
}

if (!process.env.GOOGLE_CLIENT_SECRET) {
    throw new Error("Please set the GOOGLE_CLIENT_SECRET environment variable");
}

if (!process.env.GOOGLE_REFRESH_TOKEN) {
    throw new Error("Please set the GOOGLE_REFRESH_TOKEN environment variable");
}

if (!process.env.GOOGLE_USER) {
    throw new Error("Please set the GOOGLE_USER environment variable");
}

const config = {
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET: process.env.JWT_SECRET,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    GOOGLE_REFRESH_TOKEN: process.env.GOOGLE_REFRESH_TOKEN,
    GOOGLE_USER: process.env.GOOGLE_USER,
}

export default config;