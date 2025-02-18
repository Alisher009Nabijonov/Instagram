const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to mongodb ${conn.connection.host}`);

  } catch (error) {
    console.log(error, "error while connecting to mongodb");
  }
};

module.exports = connectDB;
