const mongoose = require("mongoose");

const connectDb = async () => {
  const uri = process.env.MONGO_URI || process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/digitalstricker";
  try {
    const conn = await mongoose.connect(uri);
    console.log("MongoDB connected:", conn.connection.host);
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    throw err;
  }
};

module.exports = connectDb;
