const express = require("express");
const router = express.Router();
const userRoutes = require("./user.route");
const authRoutes = require("./auth.route");
const authMiddleware = require("../middleware/auth.middleware");

router.use("/auth", authRoutes);
router.use(authMiddleware.verifyToken);
router.use("/user", userRoutes);
router.get("/", (req, res) => {
  console.log(req.userId);
  res.send("Welcome to my store server");
});

module.exports = router;
