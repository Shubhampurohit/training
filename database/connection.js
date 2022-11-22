const mongoose = require("mongoose");

exports.connectToDb = async () => {
  mongoose
    .connect(process.env.MONGODB_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })
    .then(() => {
      console.log("connected");
    })
    .catch((error) => {
      console.log(error);
    });
};
