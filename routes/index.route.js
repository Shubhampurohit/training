const express = require("express");
const router = express.Router();
const userRoutes = require("./user.route");
const authRoutes = require("./auth.route");

router.use("/auth", authRoutes);
router.use("/user", userRoutes);
router.get("/", (req, res) => {
  res.send("Welcome to my store server");
});

module.exports = router;
