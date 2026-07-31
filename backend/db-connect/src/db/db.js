const dns = require("dns");
const mongoose = require("mongoose");

// Temporary workaround for local DNS issue
dns.setServers(["1.1.1.1", "8.8.8.8"]);

async function connectDB() {
    await mongoose.connect(
        "mongodb+srv://abhishekoggy26_db_user:***********@backend.cauicxd.mongodb.net/halley"
    );

    console.log("Connected to DB");
}

module.exports = connectDB;