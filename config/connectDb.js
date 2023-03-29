const mongoose = require("mongoose");

const connectDb = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "practice",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected Successfully...");
  } catch (e) {
      console.log(e);
  }
};

module.exports = connectDb;