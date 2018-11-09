const express = require("express");
const router = express.Router();
const { addPage } = require("../views");

router.get("/", (req, res, next) => {
  res.send("wiki homepage");
});

router.post("/", (req, res, next) => {
  res.send("wiki post");
});

router.get("/add", (req, res, next) => {
  res.send(addPage());
});

module.exports = router;
