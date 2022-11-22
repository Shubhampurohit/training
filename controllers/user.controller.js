const userModel = require("../database/models/User");

exports.getUserDetails = async (req, res) => {
  try {
    const userData = await userModel.find();
    res.send({
      statusCode: 200,
      message: "List of all users",
      error: false,
      data: userData,
    });
  } catch (error) {
    res.send({
      statusCode: 400,
      message: error.message,
      error: true,
      data: null,
    });
  }
};
