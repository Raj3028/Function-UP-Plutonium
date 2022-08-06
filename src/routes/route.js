const express = require("express");
const myPage = require("../logger/logger");
const myPageHelper = require("../util/helper");
const myPageFormatter = require("../validator/formatter");
const router = express.Router();

router.get("/test-me", function (req, res) {
  console.log("_________________________" + "problem 1");
  myPage.printName();
  console.log("_________________________" + "problem 2");
  myPageHelper.date();
  console.log("_________________________" + "Problem 3");
  myPageFormatter.trim();
  res.send(
    "Welcome to my application. I am " +
      myPage.name +
      " and a part of FunctionUp Plutonium cohort."
  );
});

router.get("/give-me-students-data", function (req, res) {});
module.exports = router;
// adding this comment for no reason
