const mongoose = require('mongoose');

const connectDB = async () => {
  console.log('MONGODB_URI in db.js:', process.env.MONGODB_URI);
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error('MONGODB_URI environment variable is not set. Please add it to your .env file.');
    }
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Failed to connect to MongoDB. Please check the following:');
    console.error('1. Your MongoDB credentials in the .env file are correct.');
    console.error('2. Your current IP address is whitelisted in the MongoDB Atlas cluster.');
    console.error('3. Your internet connection and firewall settings are not blocking the connection.');
    console.error(`Original Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
