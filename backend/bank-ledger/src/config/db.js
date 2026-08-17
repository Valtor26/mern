const mongoose = require('mongoose');
const dns = require("dns");

dns.setServers(["1.1.1.1", "8.8.8.8"]);


async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Database connected successfully');
    } catch (error) {
        console.error('Error connecting to Database:', error);
        process.exit(1); // exit the process with an error code when the connection fails
    }
}

module.exports = connectDB;