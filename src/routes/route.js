const express = require("express");
const express1 = require("lodash");
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
  console.log("_________________________" + "Problem 4");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  console.log(express1.chunk(months, [4]));
  console.log("_________________________");

  const oddNum = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  console.log(express1.tail(oddNum, []));
  console.log("_________________________");

  const arr = [2];
  const arr1 = [2];
  const arr2 = [2];
  const arr3 = [2];
  const arr4 = [2];
  const Result = express1.union(arr, arr1, arr2, arr3, arr4);
  console.log(Result);
  console.log("_________________________");

  const pairs = [
    ["horror", "The Shining"],
    ["drama", "Titanic"],
    ["thriller", "Shutter Island"],
    ["fantasy", "Pans Labyrinth"],
  ];
  const obj = express1.fromPairs(pairs);
  console.log(obj);
  console.log("_________________________");

  res.send(
    "Welcome to my application. I am " +
      myPage.name +
      " and a part of FunctionUp Plutonium cohort."
  );
});

router.get("/give-me-students-data", function (req, res) {});
module.exports = router;
// adding this comment for no reason
