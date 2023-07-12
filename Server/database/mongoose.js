const mongoose = require("mongoose");
require("dotenv").config();

const connectMongodb = async () => {
  await mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGODB_URL);
};

module.exports = {
  connectMongodb,
};
