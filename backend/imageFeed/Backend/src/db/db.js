const dns = require("dns");
const mongoose = require("mongoose");

// Temporary workaround for local DNS issue
dns.setServers(["1.1.1.1", "8.8.8.8"]);

async function connectDB() {
    await mongoose.connect(
        process.env.MONGO_URI
    );

    console.log("Connected to DB");
}

module.exports = connectDB;