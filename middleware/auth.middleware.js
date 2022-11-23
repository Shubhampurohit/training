const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  try {
    let token = req.headers.authorization;
    if (token) {
      token = token.split(" ")[1];
      let user = jwt.verify(token, process.env.SECRET_KEY);
      if (user) {
        req.userId = user.userId;
      } else {
        res.send({
          statusCode: 401,
          message: "Unauthorised access, invalid token",
        });
      }
    } else {
      res.send({
        statusCode: 401,
        message: "Unauthorised access",
        error: true,
      });
    }
    next();
  } catch (error) {
    res.send({
      statusCode: 400,
      message: error.message,
      error: true,
      data: null,
    });
  }
};
