require('dotenv').config();
const mongoose = require('mongoose');
const uri = process.env.MONGO_URI_DEV;

async function connectDB() {
    try {
        const conn = await mongoose.connect(uri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(err);
        process.exit(0);
    }
};

async function closeDB() {
    await mongoose.connection.close();
}

module.exports = {
    connectDB,
    closeDB
};