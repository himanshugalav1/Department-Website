const mongoose = require("mongoose");
const colors = require("colors");
require('dotenv').config();

const connectDB = async () => {
  try {  
    const conn = await mongoose.connect(process.env.MONGO_URI, {
     
    });

    console.log(`MongoDB Connected: ${conn.connection.host} 😊`.rainbow.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit(1); // Exit with a non-zero status code to indicate an error
  }
};

module.exports = connectDB;

