//Now Creating Schema
const mongoose = require("mongoose");
const validator = require("validator");
const schema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    require: true,

    // validate(value) {
    //     try{
    //         if (!validator.isEmail(value)) {
    //             throw new Error("Email is Invalid");
    //         }

    //     }
    //     catch(e)
    //     {

    //     }

    // },
  },
  password: {
    type: String,
    require: true,
  },
});
//Now I have To carete A Schema
const User = new mongoose.model("User", schema);
module.exports = User;
