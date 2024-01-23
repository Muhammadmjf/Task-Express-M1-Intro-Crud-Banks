const mongoose = require("mongoose");
const dotenv = require(`dotenv`);

dotenv.config();
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MOHGODB_LINK);
    console.log("connecter to DB!");
  } catch (error) {
    console.log("could not connect to DB", error);
  }
};
module.exports = connectDb;
