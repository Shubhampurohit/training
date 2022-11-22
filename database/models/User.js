const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String },
  mobile_number: { type: Number },
  password: { type: String },
  dob: { type: Date },
  address: {
    street: { type: String },
    city: { type: String },
    pincode: { type: Number },
  },
});

const userModel = new model("users", userSchema);

module.exports = userModel;
