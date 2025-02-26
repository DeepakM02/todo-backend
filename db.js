const mongoose = require('mongoose');
require('dotenv').config(); // To load environment variables

const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

const connectDB = async () => {
  try {
    const db = process.env.MONGO_URI;
    await mongoose.connect(db, clientOptions);
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
