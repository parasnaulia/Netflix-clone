const mongoose = require("mongoose");
async function connection() {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://parasnaulia645:nx7w2cQ4pHnjfTbl@cluster0.ivdbulp.mongodb.net/"
    );
    console.log("Connection is Sucessful");
  } catch (e) {
    console.log("There is Some Error In Connection");
  }
}
connection();
