const userModel = require("../database/models/User");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

exports.signup = async (req, res) => {
  try {
    const userData = req.body;

    const userExists = await userModel.findOne({ email: userData.email });

    if (userExists) {
      res.send({
        statusCode: 200,
        message: "User already exists. Please try to login",
        error: false,
        data: userExists,
      });
    } else {
      const hash = crypto.createHash("sha1");
      hash.update(userData.password + process.env.SALT);
      const hashPassword = hash.digest("hex");

      const newUser = new userModel({
        name: userData.name,
        email: userData.email,
        password: hashPassword,
        mobile_number: userData.mobile_number,
        dob: userData.dob,
        address: userData.address,
      });

      await newUser.save();

      const token = jwt.sign({ userId: newUser._id }, process.env.SECRET_KEY);
      res.send({
        statusCode: 200,
        message: "User created successfully",
        error: false,
        data: newUser,
        token: token,
      });
    }
  } catch (error) {
    res.send({
      statusCode: 400,
      message: error.message,
      error: true,
      data: null,
    });
  }
};
